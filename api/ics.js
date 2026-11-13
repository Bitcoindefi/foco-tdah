/* GET /api/ics?url=  — fetch a public or secret ICS feed on behalf of the browser.
   Only https URLs, with a size cap and a timeout. Nothing is stored. */
const MAX_BYTES = 1_000_000;
const TIMEOUT_MS = 8000;
const MAX_REDIRECTS = 3;

function fail(res, status, error) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(status).json({ error });
}

function hostOf(u) {
  return String(u.hostname || '').toLowerCase().replace(/^\[|\]$/g, '');
}

function isBlockedHost(host) {
  const h = String(host || '').toLowerCase().replace(/^\[|\]$/g, '');
  if (!h) return true;
  if (h === 'localhost' || h === '::1' || h === '0.0.0.0' || h === '::' || h.endsWith('.localhost') || h.endsWith('.local') || h.endsWith('.internal')) return true;
  if (h === 'metadata.google.internal' || h === 'metadata.google.com') return true;
  const ip4 = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ip4) {
    const a = ip4.slice(1).map(n => +n);
    if (a.some(n => n > 255)) return true;
    const [p, q] = a;
    if (p === 0 || p === 10 || p === 127 || p >= 224) return true;
    if (p === 169 && q === 254) return true;
    if (p === 172 && q >= 16 && q <= 31) return true;
    if (p === 192 && q === 168) return true;
    if (p === 100 && q >= 64 && q <= 127) return true;
    return false;
  }
  if (h.includes(':')) {
    const n = h.replace(/^:/, '');
    if (h === '::1' || h.startsWith('fc') || h.startsWith('fd') || h.startsWith('fe80') || h.startsWith('::ffff:')) return true;
  }
  return false;
}

function toHttps(raw) {
  let s = String(raw || '').trim();
  if (/^webcal:\/\//i.test(s)) s = 'https://' + s.slice('webcal://'.length);
  return s;
}

function okUrl(s) {
  let u;
  try { u = new URL(s); } catch (e) { return null; }
  if (u.protocol !== 'https:') return null;
  if (u.username || u.password) return null;
  if (isBlockedHost(hostOf(u))) return null;
  return u;
}

async function readLimited(resp, extra = 0) {
  const len = Number(resp.headers.get('content-length') || 0);
  if (len && len + extra > MAX_BYTES) {
    const err = new Error('too-large');
    err.code = 'too-large';
    throw err;
  }
  const reader = resp.body && resp.body.getReader ? resp.body.getReader() : null;
  if (!reader) {
    const buf = Buffer.from(await resp.arrayBuffer());
    if (buf.length + extra > MAX_BYTES) {
      const err = new Error('too-large');
      err.code = 'too-large';
      throw err;
    }
    return buf;
  }
  const chunks = [];
  let n = extra;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    n += value.length;
    if (n > MAX_BYTES) {
      try { reader.cancel(); } catch (e) { /* ignore */ }
      const err = new Error('too-large');
      err.code = 'too-large';
      throw err;
    }
    chunks.push(Buffer.from(value));
  }
  return Buffer.concat(chunks);
}

async function fetchIcs(start) {
  let url = start;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), TIMEOUT_MS);
    let resp;
    try {
      resp = await fetch(url, {
        method: 'GET',
        redirect: 'manual',
        signal: ac.signal,
        headers: {
          Accept: 'text/calendar, text/plain, */*',
          'User-Agent': 'EnFocoCalendar/1.0'
        }
      });
    } finally {
      clearTimeout(t);
    }
    const loc = resp.headers.get('location');
    if (resp.status >= 300 && resp.status < 400 && loc) {
      if (hop === MAX_REDIRECTS) {
        const err = new Error('redirects');
        err.code = 'redirects';
        throw err;
      }
      const next = okUrl(new URL(loc, url).toString());
      if (!next) {
        const err = new Error('bad-redirect');
        err.code = 'bad-url';
        throw err;
      }
      url = next;
      continue;
    }
    if (!resp.ok) {
      const err = new Error('fetch-failed');
      err.code = 'fetch';
      err.status = resp.status;
      throw err;
    }
    return readLimited(resp);
  }
  const err = new Error('redirects');
  err.code = 'redirects';
  throw err;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  if (req.method !== 'GET') return fail(res, 405, 'method');
  const url = okUrl(toHttps(req.query && req.query.url));
  if (!url) return fail(res, 400, 'bad-url');
  try {
    const buf = await fetchIcs(url);
    const text = buf.toString('utf8').replace(/^\uFEFF/, '');
    if (!/BEGIN:VCALENDAR/i.test(text)) return fail(res, 422, 'not-ics');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.status(200).send(text);
  } catch (e) {
    if (e && (e.name === 'AbortError' || e.code === 'ABORT_ERR')) return fail(res, 504, 'timeout');
    if (e && e.code === 'too-large') return fail(res, 413, 'too-large');
    if (e && e.code === 'bad-url') return fail(res, 400, 'bad-url');
    if (e && e.code === 'redirects') return fail(res, 400, 'bad-url');
    return fail(res, 502, 'fetch');
  }
};
