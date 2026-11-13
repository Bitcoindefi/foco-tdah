/* GET  /api/feed/:token.ics  — published iCalendar of the device's scheduled tasks.
   PUT  /api/feed/:token      — replace the stored payload (titles and times only).
   DELETE /api/feed/:token    — drop the stored copy (reset or wipe).
   Stored in a private Vercel Blob under the unguessable token. */
const { put, get, del } = require('@vercel/blob');

const TOKEN = /^[a-f0-9]{64}$/;
const MAX_ITEMS = 200;
const MAX_TITLE = 200;
const MAX_BODY = 64 * 1024;
const PATH = token => 'feeds/' + token + '.json';

function send(res, status, body, headers) {
  Object.entries(headers || {}).forEach(([k, v]) => res.setHeader(k, v));
  if (typeof body === 'string' || Buffer.isBuffer(body)) return res.status(status).send(body);
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(status).json(body);
}

function tokenOf(req) {
  const raw = String((req.query && req.query.token) || '');
  const t = raw.replace(/\.ics$/i, '').toLowerCase();
  return TOKEN.test(t) ? t : '';
}

function isDate(d) { return /^\d{4}-\d{2}-\d{2}$/.test(String(d)); }
function isTime(t) { return /^([01]\d|2[0-3]):[0-5]\d$/.test(String(t)); }
function pad(n) { return String(n).padStart(2, '0'); }

function icsStamp(d) {
  return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + 'T' +
    pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + 'Z';
}
function icsDate(s) { return String(s).replace(/-/g, ''); }
function icsTime(date, time) { return icsDate(date) + 'T' + String(time).replace(':', '') + '00'; }
function nextDate(s) {
  const [y, m, d] = String(s).split('-').map(Number);
  const dt = new Date(y, m - 1, d + 1, 12);
  return dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());
}
function escIcs(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
}
function foldLine(line) {
  const u8 = Buffer.from(line, 'utf8');
  if (u8.length <= 75) return line;
  const out = [];
  let i = 0, first = 75;
  while (i < u8.length) {
    const n = Math.min(first, u8.length - i);
    let cut = n;
    while (cut > 0 && (u8[i + cut] & 0xc0) === 0x80) cut--;
    if (cut <= 0) cut = n;
    out.push(u8.slice(i, i + cut).toString('utf8'));
    i += cut;
    first = 74;
  }
  return out.join('\r\n ');
}

function cleanItems(raw) {
  if (!Array.isArray(raw)) return null;
  if (raw.length > MAX_ITEMS) return null;
  const items = [];
  const seen = new Set();
  for (const row of raw) {
    if (!row || typeof row !== 'object') return null;
    const uid = String(row.uid || '').trim();
    const title = String(row.title || '').trim().slice(0, MAX_TITLE);
    const start = String(row.start || '').trim();
    const end = String(row.end || '').trim();
    const startTime = String(row.startTime || '').trim();
    const endTime = String(row.endTime || '').trim();
    if (!uid || uid.length > 80 || !/^[A-Za-z0-9._@-]+$/.test(uid)) return null;
    if (seen.has(uid)) continue;
    seen.add(uid);
    if (!title || !isDate(start)) return null;
    if (end && !isDate(end)) return null;
    if (startTime && !isTime(startTime)) return null;
    if (endTime && !isTime(endTime)) return null;
    const item = { uid, title, start, allDay: !startTime };
    if (end && end !== start) item.end = end;
    if (startTime) item.startTime = startTime;
    if (endTime) item.endTime = endTime;
    items.push(item);
  }
  return items;
}

function toIcs(payload) {
  const now = icsStamp(new Date());
  const name = (payload && payload.name) || 'EnFoco';
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//EnFoco//Calendar Feed//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:' + escIcs(name),
    'X-PUBLISHED-TTL:PT1H',
    'REFRESH-INTERVAL;VALUE=DURATION:PT1H'
  ];
  (payload.items || []).forEach(it => {
    lines.push('BEGIN:VEVENT');
    lines.push('UID:' + it.uid);
    lines.push('DTSTAMP:' + now);
    if (it.startTime) {
      let endDate = it.end || it.start, endTime = it.endTime;
      if (!endTime) {
        const [h, m] = it.startTime.split(':').map(Number);
        const add = h + 1;
        if (add >= 24) { endDate = nextDate(it.start); endTime = pad(add - 24) + ':' + pad(m); }
        else endTime = pad(add) + ':' + pad(m);
      }
      lines.push('DTSTART:' + icsTime(it.start, it.startTime));
      lines.push('DTEND:' + icsTime(endDate, endTime));
    } else {
      lines.push('DTSTART;VALUE=DATE:' + icsDate(it.start));
      lines.push('DTEND;VALUE=DATE:' + icsDate(it.end || nextDate(it.start)));
    }
    lines.push('SUMMARY:' + escIcs(it.title));
    lines.push('END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.map(foldLine).join('\r\n') + '\r\n';
}

async function readPayload(token) {
  const file = await get(PATH(token), { access: 'private', useCache: false });
  if (!file || file.statusCode === 404 || file.statusCode === 304) return null;
  if (file.statusCode && file.statusCode !== 200) return null;
  let text = '';
  if (file.stream && typeof file.stream.getReader === 'function') {
    const reader = file.stream.getReader();
    const chunks = [];
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(Buffer.from(value));
    }
    text = Buffer.concat(chunks).toString('utf8');
  } else if (typeof file.text === 'function') text = await file.text();
  else if (file.body) text = await new Response(file.body).text();
  else if (typeof file === 'string') text = file;
  else return null;
  try { return JSON.parse(text); } catch (e) { return null; }
}

module.exports = async function handler(req, res) {
  const token = tokenOf(req);
  if (!token) return send(res, 404, { error: 'not-found' });
  const method = req.method || 'GET';

  if (method === 'GET') {
    let payload = null;
    try { payload = await readPayload(token); } catch (e) { payload = null; }
    if (!payload) return send(res, 404, { error: 'not-found' }, { 'Cache-Control': 'no-store' });
    const ics = toIcs(payload);
    return send(res, 200, ics, {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'inline; filename="enfoco.ics"',
      'Cache-Control': 'public, max-age=300'
    });
  }

  if (method === 'PUT' || method === 'POST') {
    let raw = req.body;
    if (raw && typeof raw === 'object' && !Buffer.isBuffer(raw)) {
      /* already parsed */
    } else {
      const text = Buffer.isBuffer(raw) ? raw.toString('utf8') : String(raw || '');
      if (text.length > MAX_BODY) return send(res, 413, { error: 'too-large' });
      try { raw = JSON.parse(text || '{}'); } catch (e) { return send(res, 400, { error: 'bad-json' }); }
    }
    const items = cleanItems(raw && raw.items);
    if (!items) return send(res, 400, { error: 'bad-payload' });
    const payload = { v: 1, name: 'EnFoco', updated: new Date().toISOString(), items };
    const body = JSON.stringify(payload);
    if (body.length > MAX_BODY) return send(res, 413, { error: 'too-large' });
    try {
      await put(PATH(token), body, {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
        cacheControlMaxAge: 0
      });
    } catch (e) {
      return send(res, 500, { error: 'store' });
    }
    return send(res, 200, { ok: true, n: items.length }, { 'Cache-Control': 'no-store' });
  }

  if (method === 'DELETE') {
    try { await del(PATH(token)); } catch (e) { /* missing is fine */ }
    return send(res, 200, { ok: true }, { 'Cache-Control': 'no-store' });
  }

  res.setHeader('Allow', 'GET, PUT, POST, DELETE');
  return send(res, 405, { error: 'method' });
};
