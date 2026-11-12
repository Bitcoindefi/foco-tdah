# EnFoco

**O teu calendário, uma luz de cada vez.** Protótipo de hackathon para adultos com PHDA (TDAH noutros países): um calendário em mapa low poly em que cada data se ilumina com o foco que teve, e nenhum dia fica em atraso.

- Demonstração: https://bitcoindefi.github.io/foco-tdah/
- Repositório: https://github.com/Bitcoindefi/foco-tdah
- Equipa: Leonardo Cagliero e Sofía Vázquez Furriel
- Contexto: Portugal Tech Week, *Hackathon for a Cause*, com a Brainstorm (associação portuguesa de PHDA)

> O EnFoco não é uma ferramenta médica. Não diagnostica, não trata e não substitui acompanhamento profissional. Todos os dados de demonstração são inventados.

[English version below](#enfoco-english)

---

## Como correr

1. **Abrir diretamente.** Faz duplo clique em `index.html`. Precisa de rede para ir buscar o Three.js ao unpkg.com; sem rede, a app passa sozinha para o calendário simples (2D).
2. **Servidor local** (necessário para testar um modelo GLB próprio):
   ```bash
   python3 -m http.server 8000
   # abre http://localhost:8000
   ```
3. **GitHub Pages.** Põe `index.html` na raiz do repositório e ativa o Pages no ramo principal. Não há passo de compilação.

Estrutura:

```
index.html        a app inteira (HTML, CSS e JavaScript)
README.md         este ficheiro
pitch.md          guião do pitch de 3 minutos
models/bulb.glb   opcional: modelo 3D da lâmpada
```

## Desenho (versão 3)

- **Low poly em 2.5D.** Toda a geometria 3D é facetada e usa materiais com `flatShading`. A câmara é ortográfica.
- **Capa.** O logótipo vive só aqui: a marca «EnFoco», a frase, o botão «Começar» e uma lâmpada low poly que roda devagar numa pequena ilha. O cabeçalho já não tem logótipo. No menu, «Ecrã inicial» volta à capa.
- **Calendário em mapa.** O mês é um tabuleiro visto de cima e em ângulo (vista isométrica por omissão; o botão de rodar alterna com uma vista mais de cima, com as semanas em linhas). Cada data é um bloco.
- **Luzes à volta de cada data.** Cada bloco tem doze luzes, três por lado. Cada luz acesa vale cerca de 10 minutos de foco nesse dia ou uma tarefa feita. Quando há um temporizador a correr, as luzes de hoje pulsam e a próxima luz pisca. Os dias com luzes também aquecem a cor do bloco, para se lerem ao longe.
- **Abrir um dia.** Tocar numa data abre esse dia no painel e aproxima o mapa. As tarefas de hoje aparecem como foquitos em cima do bloco de hoje.
- **Zoom e arrasto.** Roda do rato, beliscar com dois dedos e botões + e −; arrastar move o mapa. Há um botão para voltar a ver o mês inteiro.
- **Objetivos.** Ficam por baixo do calendário, numa lista em acordeão que abre e fecha. Uma bandeirinha no mapa marca a data de cada objetivo.
- **Ordem de entrada.** Capa, respiração guiada (com «Saltar»), menu.

## Como usar

1. **Capa.** «Começar» leva à respiração. Língua, tema e movimento mudam-se no canto superior direito.
2. **Respiração.** Três respirações (inspira 4 s, sustém 2 s, expira 6 s). Há sempre um botão «Saltar» e a opção de não mostrar ao abrir.
3. **Menu.** O meu calendário, Só 2 minutos, Despejar ideias, Foco acompanhado, Cenários de demonstração, Privacidade e dados, Visão e limites, Respirar de novo, Ecrã inicial.
4. **O meu calendário.** O mapa à esquerda (em cima, no telemóvel) e o dia aberto ao lado. Em hoje há o painel «Agora», com uma tarefa, o temporizador em anel e os passos. Num dia futuro planeia-se; num dia passado vê-se o que ficou feito.
5. **Teclado e leitores de ecrã.** O mapa é decorativo para leitores de ecrã. As setas «dia anterior» e «dia seguinte» e o campo de data fazem o mesmo que tocar no mapa.

## Funcionalidades e cenário que servem

| Funcionalidade | O que faz | Cenário da Brainstorm |
|---|---|---|
| Calendário de luzes | Cada data acende com o foco desse dia; dias em branco não levam marca | Sofia, Joana |
| Uma tarefa de cada vez | Painel «Agora», temporizador visual, hora a que termina, passos automáticos acima de 25 min | Todos |
| Temporizador sempre à mão | Uma barra pequena acompanha o ecrã quando o painel «Agora» não está à vista | Todos |
| Despejar ideias | Captura rápida, uma ideia por linha; «Primeiro passo» sugere o passo minúsculo e leva-o para hoje | Marta |
| Só 2 minutos | Arranque de 120 s; no fim, parar conta e continuar é opcional. «Versão feia permitida» | Tiago |
| Nota sem culpa | Depois de vários «mais tarde», sugere encolher o primeiro passo em vez de mostrar atraso | Tiago |
| Energia e tempo interior | A pessoa indica energia e «tempo» (céu limpo, nublado, tempestade, nevoeiro, vento); a app ajusta tom, duração e plano | Joana |
| Plano base e plano ideal | Em dias difíceis: duas coisas, dez minutos no máximo cada uma. O resto fica em «Pode esperar» | Joana |
| Sem atrasos | Tarefas cuja hora passou ficam «quando der»; o que sobra de ontem vem para hoje sem marca | Joana |
| Planear outro dia | Abrir uma data futura e acrescentar tarefas; «Trazer para hoje» quando fizer sentido | Joana |
| Objetivos em partes | Acordeão por baixo do calendário: partes, ritmo sugerido e botão para trazer a próxima parte para hoje | Joana |
| Regresso suave | Depois de 3 ou mais dias fora: até três coisas pequenas à vista, o resto guardado sem marcas | Sofia |
| Dia de pausa | As luzes ficam em repouso e nada passa a atraso | Sofia, Joana |
| Foco acompanhado | Temporizador com companhia simulada, segunda lâmpada no mapa, registo do que se conseguiu | Pedro |
| Convite e resumo | Mensagens prontas a copiar; a pessoa escolhe se incluem a tarefa e a hora | Pedro |
| Nota de passagem | Gera um pedido de ajuda a partir dos passos feitos e por fazer | Pedro |
| Reforços INCUP | Interesse (juntar algo de que gostas), Novidade (carta e cor da luz), Desafio (bater o tempo), Urgência (mini-prazo), Pessoas e paixão (porquê e companhia) | Marta, Tiago |
| Ritmo do dia | Barra do dia com o «agora», quanto resta do bloco, se o plano cabe, previsto contra real | Joana |
| Foquitos acesos | Contagem acumulada de tarefas feitas que nunca volta a zero | Sofia |
| Privacidade | Tudo local; exportar, importar e apagar | Todos |

## Bases de investigação

Cada funcionalidade tem na app uma nota «Porquê?» com a fonte. Resumo do que tirámos de cada uma:

| Fonte | O que diz, em resumo | O que mudou no desenho |
|---|---|---|
| [Chen, Meng e Nie (2026), *Not Just Me and My To-Do List*](https://arxiv.org/abs/2603.17258) | 22 entrevistas e 13 conceitos avaliados por 20 participantes. A gestão de tarefas com PHDA é relacional e emocional; as ferramentas habituais assumem autorregulação constante e tempo linear. Propõe apoios relacionais, tempo como ritmo e apoios afetivos, com a pessoa sempre no comando | Calendário sem séries nem atrasos, plano base e ideal, tempo interior indicado pela própria pessoa, regresso sem penalização, foco acompanhado |
| [ADHD-EU, *Adult ADHD: A Practical Guide* (2024)](https://adhdireland.ie/wp-content/uploads/2024/09/Erasmus-Shared-Practices-1.pdf) | Limites de tempo claros, pausas marcadas, lembretes, listas e notas, preparar materiais, prazos e tarefas concretas | Temporizador com fim visível, lembretes, despejo de ideias, passo «preparar o que é preciso», objetivos em partes |
| [ADDitude, *Take the First Sloppy Step*](https://www.additudemag.com/stop-adhd-procrastination/) | Começar de forma imperfeita, olhar só para o passo seguinte, prazos próprios, «body double» | Só 2 minutos, versão feia permitida, primeiro passo minúsculo, mini-prazo |
| [ADDitude, *We Don't See Time; We Feel It*](https://www.additudemag.com/does-anyone-know-what-time-it-is/) | O tempo é sentido e não visto; estimar e medir, blocos do dia, temporizadores visuais | Anel de tempo, «termina às», ritmo do dia, previsto contra real, luzes do calendário |
| [Stanford CTL, *Sustaining Motivation*](https://ctl.stanford.edu/sustaining-motivation) | INCUP: interessante, novo, desafiante, urgente, orientado para pessoas; marcadores visuais de progresso | Os cinco reforços no painel «Agora»; as luzes como registo visual |
| [Neurodivergent Insights, *Interest-Based Nervous System*](https://neurodivergentinsights.com/blog/interest-based-nervous-system) | Modelo clínico de William Dodson: o arranque vem de interesse, desafio, novidade e urgência, mais do que de importância | Reforços em vez de avisos de prioridade; nenhuma lógica de recompensa ou castigo |
| How to ADHD: [*Wall of Awful*](https://www.youtube.com/watch?v=Uo08uS904Rg) e [*ADHD and Motivation*](https://www.youtube.com/watch?v=OM0Xv0eVGtY) | Tarefas «fáceis» pesam por razões emocionais; a motivação constrói-se com urgência, novidade e interesse | Texto sem culpa, nota de adiamento, reforços |

Três ressalvas honestas sobre as fontes:

- O guia «Adult ADHD: A Practical Guide» vem do projeto Erasmus+ **ADHD-EU** (ADHD Ireland, Epioni e Universidade de Chipre). Não é uma publicação da ADHD Europe, e não fala de «body doubling» nem de regresso após ausência; essas ideias vêm de outras fontes.
- No folheto de Stanford, o P de INCUP é **«People-Oriented»**. «Paixão» aparece noutras versões (por exemplo, o PINCH citado pelo Neurodivergent Insights). A app junta as duas no mesmo reforço.
- O «sistema nervoso baseado no interesse» é um modelo clínico, não uma teoria testada em estudos. O artigo de Chen e colegas é uma pré-publicação que a página do arXiv indica como aceite na CSCW 2026. Nenhuma fonte avalia o EnFoco.

## O que funciona hoje e o que é ideia

**Funciona hoje:** tudo o que está na tabela de funcionalidades, nas duas línguas, com dados guardados no navegador.

**Simulado ou simplificado:**
- A companhia do foco acompanhado é simulada. Não há ninguém do outro lado.
- O primeiro passo vem de regras por palavras-chave, não de IA.
- Os lembretes só aparecem com a página aberta.
- A regra das luzes é simples: 10 minutos de foco ou uma tarefa feita por luz, até doze. Não distingue tipos de foco.
- Um temporizador a correr perde-se se a página for recarregada (o foco já registado fica).

**Ideias futuras (não implementadas):** recolher compromissos de e-mail e mensagens com consentimento; divisão de tarefas com IA sempre editável; salas de foco com pessoas reais; sincronização cifrada e ligação a outros calendários; ligação de progresso partilhável.

## Privacidade e ética

- Os dados ficam só em `localStorage`, na chave `enfoco.v3`. Não há conta, servidor nem análises. Dados da versão anterior (`enfoco.v2`) são trazidos uma vez.
- O único pedido de rede da app é a biblioteca Three.js (unpkg.com). Não leva dados da pessoa.
- Nada é partilhado automaticamente: as mensagens só saem se a pessoa as copiar.
- Não pedimos dados de saúde. Energia e tempo interior são notas da própria pessoa, ficam no dispositivo e podem ser apagadas em «Privacidade e dados».
- As personas (Marta, Tiago, Joana, Sofia, Pedro), as suas tarefas e o seu histórico de foco são fictícios.

## Arquitetura

- **Um ficheiro, sem compilação.** HTML, CSS e um `<script type="module">`. O Three.js 0.160.0 chega por *import map* (unpkg) e é carregado com `import()` dinâmico, por isso uma falha da CDN não parte a app.
- **Um só canvas, duas cenas.** A capa (ilha com a lâmpada) e o mapa do calendário partilham o mesmo contexto WebGL; o canvas muda de sítio conforme o ecrã.
- **Mapa.** Os blocos das datas são um `InstancedMesh`; as luzes (doze por data) são outro, com cor por instância; os fios são um único `LineSegments`. Números e dias da semana são HTML posicionado por cima do canvas, para ficarem nítidos e traduzíveis.
- **Câmara.** Ortográfica, com centro e escala próprios. Zoom com roda, dois dedos e botões; arrasto com um dedo ou rato; limites para nunca perder o tabuleiro.
- **Desempenho sem placa gráfica.** Poucos polígonos, materiais emissivos e básicos, uma luz pontual por cena, razão de píxeis limitada a 1,5, cerca de 30 imagens por segundo, e o mapa só é redesenhado quando algo muda ou há foco a pulsar. Testado apenas em Chrome com renderização por software; falta testar em equipamentos reais.
- **Modelo e alternativas, por ordem:**
  1. `./models/bulb.glb`, carregado com o `GLTFLoader`. O caminho está na constante `MODEL_PATH`, no topo do script.
  2. Se o ficheiro faltar ou falhar, uma lâmpada low poly desenhada por código (vidro em icosaedro, gargalo e casquilho em cilindros de seis lados).
  3. Sem WebGL ou sem Three.js, calendário simples em HTML e CSS, com as mesmas doze luzes à volta de cada data.
- **Modelo próprio.** Qualquer GLB serve: é centrado, pousado na base, escalado e passa a `flatShading`. O brilho aplica-se aos materiais com emissivo. Modelos comprimidos com Draco ou KTX2 não são suportados e fazem a app usar a lâmpada por código. A partir de `file://` o GLB não carrega; usa um servidor local.
- **Acessibilidade.** Alvos de toque de 44 px ou mais, foco visível, modo de movimento reduzido (sem rotação nem pulsação), tema escuro, alternativa por teclado ao mapa.
- **Estado.** Um objeto `S` gravado em `localStorage`: tarefas com data, minutos de foco por dia, objetivos, preferências. Na consola, `__enfoco.state` mostra-o (só para depuração).

## Notas para a demonstração

- Abre a página uns minutos antes para o navegador guardar o Three.js em cache. A lâmpada da capa a rodar confirma que a cena 3D carregou.
- Num portátil, o mapa fica fixo à esquerda e o dia à direita.
- Percurso sugerido (cerca de 90 segundos): capa → Começar → respiração (deixar um ciclo e saltar) → O meu calendário → aproximar → Começar (as luzes de hoje pulsam) → Cenários → Joana (dias que brilharam, plano base) → Sofia (regresso) → Pedro (nota de passagem).
- No telemóvel, arrastar em cima do mapa move o mapa; para descer na página, arrasta fora dele.
- Os dados de exemplo usam horas e datas relativas ao momento em que se abre a app.
- Para recomeçar do zero: Privacidade e dados → Apagar tudo.

## Próximos passos

1. Testar com adultos com PHDA, em conjunto com a Brainstorm, a começar pelos cinco cenários.
2. Confirmar com essas pessoas se o mapa ajuda ou distrai, e se a regra das luzes faz sentido.
3. Rever todo o texto em PT-PT com a comunidade.
4. Decidir, com esses resultados, o que cortar antes de acrescentar.
5. Só depois: salas de foco com pessoas reais e recolha de compromissos com consentimento.

---

# EnFoco (English)

**Your calendar, one light at a time.** A hackathon prototype for adults with ADHD: a low-poly calendar map where each date lights up with the focus it received, and no day is ever overdue.

- Live demo: https://bitcoindefi.github.io/foco-tdah/
- Repository: https://github.com/Bitcoindefi/foco-tdah
- Team: Leonardo Cagliero and Sofía Vázquez Furriel
- Context: Portugal Tech Week, *Hackathon for a Cause*, with Brainstorm (Portuguese ADHD association)

> EnFoco is not a medical tool. It does not diagnose, treat or replace professional support. All demo data is made up.

## How to run

1. **Open it directly.** Double-click `index.html`. It needs a network connection to fetch Three.js from unpkg.com; without one, the app falls back to the simple (2D) calendar by itself.
2. **Local server** (needed to try your own GLB model):
   ```bash
   python3 -m http.server 8000
   # open http://localhost:8000
   ```
3. **GitHub Pages.** Put `index.html` at the repository root and enable Pages on the main branch. There is no build step.

Layout:

```
index.html        the whole app (HTML, CSS and JavaScript)
README.md         this file
pitch.md          script for the 3-minute pitch (in Portuguese)
models/bulb.glb   optional: 3D bulb model
```

## Design (version 3)

- **Low poly in 2.5D.** All 3D geometry is faceted and uses `flatShading` materials. The camera is orthographic.
- **Cover.** The logo lives only here: the "EnFoco" wordmark, the tagline, the Start button and a low-poly bulb turning slowly on a small island. The header no longer carries a logo. In the menu, "Start screen" returns to the cover.
- **Calendar as a map.** The month is a board seen from above at an angle (isometric by default; the rotate button switches to a flatter view with weeks in rows). Each date is a block.
- **Lights around each date.** Every block has twelve lights, three per side. Each lit light stands for about 10 minutes of focus that day, or one finished task. While a timer is running, today's lights pulse and the next light blinks. Days with lights also warm the colour of their block, so they read from a distance.
- **Opening a day.** Tapping a date opens that day in the panel and zooms the map in. Today's tasks stand on today's block as little bulbs.
- **Zoom and pan.** Mouse wheel, two-finger pinch and + and − buttons; dragging moves the map. One button brings the whole month back into view.
- **Goals.** They sit below the calendar in a collapsible accordion list. A small pennant on the map marks each goal's date.
- **Entry order.** Cover, guided breathing (with "Skip"), menu.

## How to use

1. **Cover.** "Start" leads to the breathing screen. Language, theme and motion are switched in the top-right corner.
2. **Breathing.** Three breaths (in 4 s, hold 2 s, out 6 s). There is always a "Skip" button and an option not to show it on opening.
3. **Menu.** My calendar, Just 2 minutes, Brain dump, Focus with company, Demo scenarios, Privacy and data, Vision and limits, Breathe again, Start screen.
4. **My calendar.** The map on the left (on top, on a phone) and the open day beside it. Today has the "Now" panel, with one task, the ring timer and the steps. A future day is for planning; a past day shows what got done.
5. **Keyboard and screen readers.** The map is decorative for screen readers. The "previous day" and "next day" arrows and the date field do the same as tapping the map.

## Features and the scenario they serve

| Feature | What it does | Brainstorm scenario |
|---|---|---|
| Calendar of lights | Each date lights up with that day's focus; blank days carry no mark | Sofia, Joana |
| One task at a time | "Now" panel, visual timer, the time it ends, automatic steps above 25 min | All |
| Timer always in reach | A small bar follows the screen whenever the "Now" panel is out of view | All |
| Brain dump | Fast capture, one idea per line; "First step" suggests the tiny step and takes it into today | Marta |
| Just 2 minutes | A 120 s starter; at the end, stopping counts and continuing is optional. "Ugly version allowed" | Tiago |
| Guilt-free note | After several "later"s, suggests shrinking the first step, with no overdue label | Tiago |
| Energy and inner weather | The person reports energy and "weather" (clear sky, cloudy, storm, fog, wind); the app adjusts tone, length and plan | Joana |
| Baseline and ideal plan | On hard days: two things, ten minutes each at most. The rest goes to "Can wait" | Joana |
| Nothing overdue | Tasks whose time has passed become "whenever"; what is left from yesterday comes to today unmarked | Joana |
| Planning another day | Open a future date and add tasks; "Bring into today" when it makes sense | Joana |
| Goals in parts | Accordion below the calendar: parts, a suggested pace, and a button to bring the next part into today | Joana |
| Gentle return | After 3 or more days away: up to three small things in view, the rest put away unmarked | Sofia |
| Pause day | The lights rest and nothing becomes overdue | Sofia, Joana |
| Focus with company | Timer with simulated company, a second bulb on the map, a note of what got done | Pedro |
| Invitation and summary | Ready-to-copy messages; the person chooses whether they include the task and the time | Pedro |
| Handoff note | Builds a request for help from the steps done and still to do | Pedro |
| INCUP boosters | Interest (pair it with something you like), Novelty (a card and the light colour), Challenge (beat your time), Urgency (mini deadline), People and passion (why, and company) | Marta, Tiago |
| Rhythm of the day | Day bar with "now", how much of the block is left, whether the plan fits, estimated against actual | Joana |
| Tasks lit | A cumulative count of finished tasks that never resets | Sofia |
| Privacy | Everything local; export, import and delete | All |

## Research foundations

Every feature has a "Why?" note in the app with its source. What we took from each:

| Source | What it says, briefly | What it changed in the design |
|---|---|---|
| [Chen, Meng and Nie (2026), *Not Just Me and My To-Do List*](https://arxiv.org/abs/2603.17258) | 22 interviews and 13 concepts assessed by 20 participants. Task management with ADHD is relational and emotional; common tools assume steady self-regulation and linear time. Proposes relational supports, time as rhythm and affective supports, with the person always in charge | A calendar with no streaks and nothing overdue, baseline and ideal plans, self-reported inner weather, return without penalty, focus with company |
| [ADHD-EU, *Adult ADHD: A Practical Guide* (2024)](https://adhdireland.ie/wp-content/uploads/2024/09/Erasmus-Shared-Practices-1.pdf) | Clear time limits, scheduled breaks, reminders, lists and notes, preparing materials, deadlines and concrete tasks | Timer with a visible end, reminders, brain dump, a "get what you need ready" step, goals in parts |
| [ADDitude, *Take the First Sloppy Step*](https://www.additudemag.com/stop-adhd-procrastination/) | Start imperfectly, look only at the next step, set your own deadlines, use a body double | Just 2 minutes, ugly version allowed, tiny first step, mini deadline |
| [ADDitude, *We Don't See Time; We Feel It*](https://www.additudemag.com/does-anyone-know-what-time-it-is/) | Time is felt, not seen; estimate and measure, blocks of the day, visual timers | Time ring, "ends at", rhythm of the day, estimated against actual, the calendar lights |
| [Stanford CTL, *Sustaining Motivation*](https://ctl.stanford.edu/sustaining-motivation) | INCUP: interesting, novel, challenging, urgent, people-oriented; visual progress trackers | The five boosters in the "Now" panel; the lights as a visual record |
| [Neurodivergent Insights, *Interest-Based Nervous System*](https://neurodivergentinsights.com/blog/interest-based-nervous-system) | William Dodson's clinical model: getting started comes from interest, challenge, novelty and urgency more than from importance | Boosters instead of priority warnings; no reward or punishment logic |
| How to ADHD: [*Wall of Awful*](https://www.youtube.com/watch?v=Uo08uS904Rg) and [*ADHD and Motivation*](https://www.youtube.com/watch?v=OM0Xv0eVGtY) | "Easy" tasks weigh on people for emotional reasons; motivation is built with urgency, novelty and interest | Guilt-free copy, the delay note, boosters |

Three honest caveats about the sources:

- "Adult ADHD: A Practical Guide" comes from the Erasmus+ **ADHD-EU** project (ADHD Ireland, Epioni and the University of Cyprus). It is not an ADHD Europe publication, and it does not cover body doubling or returning after a gap; those ideas come from other sources.
- In the Stanford handout, the P of INCUP is **"People-Oriented"**. "Passion" appears in other versions (for example, the PINCH acronym cited by Neurodivergent Insights). The app puts both in the same booster.
- The "interest-based nervous system" is a clinical model, not a theory tested in studies. The paper by Chen and colleagues is a preprint that its arXiv page lists as accepted to CSCW 2026. No source evaluates EnFoco.

## What works today and what is an idea

**Works today:** everything in the feature table, in both languages, with data stored in the browser.

**Simulated or simplified:**
- The company in focus with company is simulated. Nobody is on the other side.
- The first step comes from keyword rules, not from AI.
- Reminders only appear while the page is open.
- The rule for the lights is simple: 10 minutes of focus or one finished task per light, up to twelve. It does not tell kinds of focus apart.
- A running timer is lost if the page is reloaded (focus already logged stays).

**Future ideas (not implemented):** collecting commitments from email and messages with consent; AI task breakdown that is always editable; focus rooms with real people; encrypted sync and a connection to other calendars; a shareable progress link.

## Privacy and ethics

- Data lives only in `localStorage`, under the key `enfoco.v3`. There is no account, server or analytics. Data from the previous version (`enfoco.v2`) is carried over once.
- The app's only network request is the Three.js library (unpkg.com). It carries no personal data.
- Nothing is shared automatically: messages only leave the page if the person copies them.
- We do not ask for health data. Energy and inner weather are the person's own notes, stay on the device and can be deleted under "Privacy and data".
- The personas (Marta, Tiago, Joana, Sofia, Pedro), their tasks and their focus history are fictional.

## Architecture

- **One file, no build.** HTML, CSS and one `<script type="module">`. Three.js 0.160.0 arrives through an import map (unpkg) and is loaded with a dynamic `import()`, so a CDN failure does not break the app.
- **One canvas, two scenes.** The cover (the island with the bulb) and the calendar map share the same WebGL context; the canvas moves to whichever screen needs it.
- **Map.** The date blocks are one `InstancedMesh`; the lights (twelve per date) are another, coloured per instance; the strings are a single `LineSegments`. Numbers and weekday names are HTML positioned over the canvas, so they stay sharp and translatable.
- **Camera.** Orthographic, with its own centre and scale. Zoom with the wheel, two fingers and buttons; pan with one finger or the mouse; limits keep the board in reach.
- **Performance without a graphics card.** Low polygon counts, emissive and basic materials, one point light per scene, pixel ratio capped at 1.5, about 30 frames per second, and the map is only redrawn when something changes or focus is pulsing. Tested only in Chrome with software rendering; real devices still need testing.
- **Model and fallbacks, in order:**
  1. `./models/bulb.glb`, loaded with `GLTFLoader`. The path is the `MODEL_PATH` constant at the top of the script.
  2. If the file is missing or fails, a low-poly bulb drawn in code (icosahedron glass, six-sided neck and cap).
  3. Without WebGL or without Three.js, a simple HTML and CSS calendar with the same twelve lights around each date.
- **Your own model.** Any GLB works: it is centred, stood on its base, scaled, and switched to `flatShading`. The glow is applied to materials that have an emissive channel. Draco- or KTX2-compressed models are not supported and make the app use the coded bulb. A GLB will not load from `file://`; use a local server.
- **Accessibility.** Tap targets of 44 px or more, visible focus, a reduced-motion mode (no rotation or pulsing), dark theme, a keyboard alternative to the map.
- **State.** One `S` object saved to `localStorage`: dated tasks, minutes of focus per day, goals, preferences. In the console, `__enfoco.state` shows it (for debugging only).

## Notes for the demo

- Open the page a few minutes early so the browser caches Three.js. The bulb turning on the cover confirms the 3D scene has loaded.
- On a laptop, the map stays fixed on the left and the day scrolls on the right.
- Suggested path (about 90 seconds): cover → Start → breathing (let one cycle run, then skip) → My calendar → zoom in → Start (today's lights pulse) → Scenarios → Joana (days that shone, baseline plan) → Sofia (return) → Pedro (handoff note).
- On a phone, dragging on the map moves the map; to scroll the page, drag outside it.
- Sample data uses times and dates relative to the moment the app is opened.
- To start from scratch: Privacy and data → Delete everything.

## Next steps

1. Test with adults with ADHD, together with Brainstorm, starting with the five scenarios.
2. Check with them whether the map helps or distracts, and whether the rule for the lights makes sense.
3. Review all the European Portuguese copy with the community.
4. Use those results to decide what to cut before adding anything.
5. Only then: focus rooms with real people, and consent-based collection of commitments.
