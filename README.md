# EnFoco

**Um foquito de cada vez.** Protótipo de hackathon para adultos com PHDA (TDAH noutros países): o dia aparece como uma sala de lâmpadas, e só uma se acende de cada vez.

- Demonstração: https://bitcoindefi.github.io/foco-tdah/
- Repositório: https://github.com/Bitcoindefi/foco-tdah
- Equipa: Leonardo Cagliero e Sofía Vázquez Furriel
- Contexto: Portugal Tech Week, *Hackathon for a Cause*, com a Brainstorm (associação portuguesa de PHDA)

> O EnFoco não é uma ferramenta médica. Não diagnostica, não trata e não substitui acompanhamento profissional. Todos os dados de demonstração são inventados.

[English version below](#enfoco-english)

---

## Como correr

1. **Abrir diretamente.** Faz duplo clique em `index.html`. Precisa de rede para ir buscar o Three.js ao unpkg.com; sem rede, a app passa sozinha para a vista simples (2D).
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

## Como usar

1. **Respiração.** A entrada guia três respirações (inspira 4 s, sustém 2 s, expira 6 s). Há sempre um botão «Saltar» e a opção de não mostrar ao abrir.
2. **Menu.** O meu dia, Só 2 minutos, Despejar ideias, Foco acompanhado, Cenários de demonstração, Privacidade e dados, Visão e limites.
3. **O meu dia.** Cada tarefa é um foquito na cena 3D. O painel «Agora» mostra uma tarefa, o temporizador em anel e os passos. A lâmpada acende ao começar, baixa de intensidade na pausa e apaga-se quando a tarefa fica feita.

Língua (PT-PT por omissão, inglês completo), tema (automático, claro, escuro) e movimento (automático, reduzido, completo) mudam-se no cabeçalho.

## Funcionalidades e cenário que servem

| Funcionalidade | O que faz | Cenário da Brainstorm |
|---|---|---|
| Uma tarefa de cada vez | Painel «Agora», temporizador visual, hora a que termina, passos automáticos acima de 25 min | Todos |
| Despejar ideias | Captura rápida, uma ideia por linha; «Primeiro passo» sugere o passo minúsculo e leva-o para o dia | Marta |
| Só 2 minutos | Arranque de 120 s; no fim, parar conta e continuar é opcional. «Versão feia permitida» | Tiago |
| Nota sem culpa | Depois de vários «mais tarde», sugere encolher o primeiro passo em vez de mostrar atraso | Tiago |
| Energia e tempo interior | A pessoa indica energia e «tempo» (céu limpo, nublado, tempestade, nevoeiro, vento); a app ajusta tom, duração e plano | Joana |
| Plano base e plano ideal | Em dias difíceis: duas coisas, dez minutos no máximo cada uma. O resto fica em «Pode esperar» | Joana |
| Reorganização silenciosa | Tarefas cuja hora passou ficam «quando der». Não existe estado «em atraso» | Joana |
| Prazos distantes | Um prazo dividido em partes, com ritmo sugerido e botão para trazer a próxima parte para hoje | Joana |
| Regresso suave | Depois de 3 ou mais dias fora: até três coisas pequenas à vista, o resto guardado sem marcas | Sofia |
| Dia de pausa | As luzes ficam em repouso e nada passa a atraso | Sofia, Joana |
| Foco acompanhado | Temporizador com companhia simulada, segunda lâmpada na cena, registo do que se conseguiu | Pedro |
| Convite e resumo | Mensagens prontas a copiar; a pessoa escolhe se incluem a tarefa e a hora | Pedro |
| Nota de passagem | Gera um pedido de ajuda a partir dos passos feitos e por fazer | Pedro |
| Reforços INCUP | Interesse (juntar algo de que gostas), Novidade (carta e cor da luz), Desafio (bater o tempo), Urgência (mini-prazo), Pessoas e paixão (porquê e companhia) | Marta, Tiago |
| Ritmo do dia | Barra do dia com o «agora», quanto resta do bloco, se o plano cabe, previsto contra real | Joana |
| Luzes acesas | Contagem acumulada que nunca volta a zero (em vez de uma série que se parte) | Sofia |
| Privacidade | Tudo local; exportar, importar e apagar | Todos |

## Bases de investigação

Cada funcionalidade tem na app uma nota «Porquê?» com a fonte. Resumo do que tirámos de cada uma:

| Fonte | O que diz, em resumo | O que mudou no desenho |
|---|---|---|
| [Chen, Meng e Nie (2026), *Not Just Me and My To-Do List*](https://arxiv.org/abs/2603.17258) | 22 entrevistas e 13 conceitos avaliados por 20 participantes. A gestão de tarefas com PHDA é relacional e emocional; as ferramentas habituais assumem autorregulação constante e tempo linear. Propõe apoios relacionais, tempo como ritmo e apoios afetivos, com a pessoa sempre no comando | Plano base e ideal, tempo interior indicado pela própria pessoa, regresso sem penalização, foco acompanhado, nada inferido às escondidas |
| [ADHD-EU, *Adult ADHD: A Practical Guide* (2024)](https://adhdireland.ie/wp-content/uploads/2024/09/Erasmus-Shared-Practices-1.pdf) | Limites de tempo claros, pausas marcadas, lembretes, listas e notas, preparar materiais, prazos e tarefas concretas | Temporizador com fim visível, lembretes, despejo de ideias, passo «preparar o que é preciso», prazos em partes |
| [ADDitude, *Take the First Sloppy Step*](https://www.additudemag.com/stop-adhd-procrastination/) | Começar de forma imperfeita, olhar só para o passo seguinte, prazos próprios, «body double» | Só 2 minutos, versão feia permitida, primeiro passo minúsculo, mini-prazo |
| [ADDitude, *We Don't See Time; We Feel It*](https://www.additudemag.com/does-anyone-know-what-time-it-is/) | O tempo é sentido e não visto; estimar e medir, blocos do dia, temporizadores visuais | Anel de tempo, «termina às», ritmo do dia, previsto contra real |
| [Stanford CTL, *Sustaining Motivation*](https://ctl.stanford.edu/sustaining-motivation) | INCUP: interessante, novo, desafiante, urgente, orientado para pessoas | Os cinco reforços no painel «Agora» |
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
- O dia é um só: não há calendário de vários dias. Um temporizador a correr perde-se se a página for recarregada.

**Ideias futuras (não implementadas):** recolher compromissos de e-mail e mensagens com consentimento; divisão de tarefas com IA sempre editável; salas de foco com pessoas reais; sincronização cifrada e ligação ao calendário; ligação de progresso partilhável.

## Privacidade e ética

- Os dados ficam só em `localStorage`, na chave `enfoco.v2`. Não há conta, servidor nem análises.
- O único pedido de rede da app é a biblioteca Three.js (unpkg.com). Não leva dados da pessoa.
- Nada é partilhado automaticamente: as mensagens só saem se a pessoa as copiar.
- Não pedimos dados de saúde. Energia e tempo interior são notas da própria pessoa, ficam no dispositivo e podem ser apagadas em «Privacidade e dados».
- As personas (Marta, Tiago, Joana, Sofia, Pedro) e os seus dados são fictícios.

## Arquitetura

- **Um ficheiro, sem compilação.** HTML, CSS e um `<script type="module">`. O Three.js 0.160.0 chega por *import map* (unpkg) e é carregado com `import()` dinâmico, por isso uma falha da CDN não parte a app.
- **Cena.** Câmara ortográfica na diagonal (1,1,1), vista isométrica. As lâmpadas dispõem-se em ziguezague e a câmara ajusta-se ao número de tarefas. O brilho é emissivo: forte em foco (com pulsação lenta, desligada com movimento reduzido), médio em pausa, quase nulo quando feito.
- **Modelo e alternativas, por ordem:**
  1. `./models/bulb.glb`, carregado com o `GLTFLoader`. O caminho está na constante `MODEL_PATH`, no topo do script.
  2. Se o ficheiro faltar ou falhar, lâmpadas desenhadas por código (`LatheGeometry` para o vidro, cilindro e anéis para o casquilho).
  3. Sem WebGL ou sem Three.js, vista simples em HTML e CSS com os mesmos estados.
- **Modelo próprio.** Qualquer GLB serve: é centrado, pousado na base e escalado à altura da lâmpada. O brilho aplica-se aos materiais com emissivo. Modelos comprimidos com Draco ou KTX2 não são suportados e fazem a app usar as lâmpadas por código. A partir de `file://` o GLB não carrega; usa um servidor local.
- **Acessibilidade.** A cena é decorativa para leitores de ecrã; a lista de tarefas ao lado é o equivalente acessível, com botões e etiquetas. Alvos de toque de 44 px ou mais, foco visível, modo de movimento reduzido, tema escuro.
- **Estado.** Um objeto `S` gravado em `localStorage`. Na consola, `__enfoco.state` mostra-o (só para depuração).

## Notas para a demonstração

- Abre a página uns minutos antes para o navegador guardar o Three.js em cache.
- Num portátil, a sala fica fixa à esquerda e o dia à direita.
- Percurso sugerido (cerca de 90 segundos): respiração (deixar um ciclo e saltar) → O meu dia → Começar (a lâmpada acende) → Pausa → Cenários → Tiago (Só 2 minutos) → Sofia (regresso) → Pedro (nota de passagem).
- Os dados de exemplo usam horas relativas ao momento em que se abre a app. Perto da meia-noite, algumas tarefas aparecem sem hora.
- Para recomeçar do zero: Privacidade e dados → Apagar tudo.

## Próximos passos

1. Testar com adultos com PHDA, em conjunto com a Brainstorm, a começar pelos cinco cenários.
2. Rever todo o texto em PT-PT com a comunidade.
3. Decidir, com esses resultados, o que cortar antes de acrescentar.
4. Só depois: salas de foco com pessoas reais e recolha de compromissos com consentimento.

---

# EnFoco (English)

**One little light at a time.** A hackathon prototype for adults with ADHD: the day is a room of light bulbs, and only one is lit at a time.

- Live demo: https://bitcoindefi.github.io/foco-tdah/
- Repository: https://github.com/Bitcoindefi/foco-tdah
- Team: Leonardo Cagliero and Sofía Vázquez Furriel
- Context: Portugal Tech Week, *Hackathon for a Cause*, with Brainstorm (Portuguese ADHD association)

> EnFoco is not a medical tool. It does not diagnose, treat or replace professional support. All demo data is made up.

## How to run

1. **Open it directly.** Double-click `index.html`. It needs a network connection to fetch Three.js from unpkg.com; without one, the app falls back to the simple (2D) view by itself.
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

## How to use

1. **Breathing.** The entry screen guides three breaths (in 4 s, hold 2 s, out 6 s). There is always a "Skip" button and an option not to show it on opening.
2. **Menu.** My day, Just 2 minutes, Brain dump, Focus with company, Demo scenarios, Privacy and data, Vision and limits.
3. **My day.** Each task is a bulb in the 3D scene. The "Now" panel shows one task, the ring timer and the steps. The bulb lights up when you start, dims on pause and goes dark when the task is done.

Language (European Portuguese by default, full English), theme (automatic, light, dark) and motion (automatic, reduced, full) are switched in the header.

## Features and the scenario they serve

| Feature | What it does | Brainstorm scenario |
|---|---|---|
| One task at a time | "Now" panel, visual timer, the time it ends, automatic steps above 25 min | All |
| Brain dump | Fast capture, one idea per line; "First step" suggests the tiny step and takes it into the day | Marta |
| Just 2 minutes | A 120 s starter; at the end, stopping counts and continuing is optional. "Ugly version allowed" | Tiago |
| Guilt-free note | After several "later"s, suggests shrinking the first step, with no overdue label | Tiago |
| Energy and inner weather | The person reports energy and "weather" (clear sky, cloudy, storm, fog, wind); the app adjusts tone, length and plan | Joana |
| Baseline and ideal plan | On hard days: two things, ten minutes each at most. The rest goes to "Can wait" | Joana |
| Silent rearranging | Tasks whose time has passed become "whenever". There is no "overdue" state | Joana |
| Distant deadlines | A deadline split into parts, a suggested pace, and a button to bring the next part into today | Joana |
| Gentle return | After 3 or more days away: up to three small things in view, the rest put away unmarked | Sofia |
| Pause day | The lights rest and nothing becomes overdue | Sofia, Joana |
| Focus with company | Timer with simulated company, a second bulb in the scene, a note of what got done | Pedro |
| Invitation and summary | Ready-to-copy messages; the person chooses whether they include the task and the time | Pedro |
| Handoff note | Builds a request for help from the steps done and still to do | Pedro |
| INCUP boosters | Interest (pair it with something you like), Novelty (a card and the light colour), Challenge (beat your time), Urgency (mini deadline), People and passion (why, and company) | Marta, Tiago |
| Rhythm of the day | Day bar with "now", how much of the block is left, whether the plan fits, estimated against actual | Joana |
| Lights turned on | A cumulative count that never resets (in place of a streak that breaks) | Sofia |
| Privacy | Everything local; export, import and delete | All |

## Research foundations

Every feature has a "Why?" note in the app with its source. What we took from each:

| Source | What it says, briefly | What it changed in the design |
|---|---|---|
| [Chen, Meng and Nie (2026), *Not Just Me and My To-Do List*](https://arxiv.org/abs/2603.17258) | 22 interviews and 13 concepts assessed by 20 participants. Task management with ADHD is relational and emotional; common tools assume steady self-regulation and linear time. Proposes relational supports, time as rhythm and affective supports, with the person always in charge | Baseline and ideal plans, self-reported inner weather, return without penalty, focus with company, nothing inferred behind the person's back |
| [ADHD-EU, *Adult ADHD: A Practical Guide* (2024)](https://adhdireland.ie/wp-content/uploads/2024/09/Erasmus-Shared-Practices-1.pdf) | Clear time limits, scheduled breaks, reminders, lists and notes, preparing materials, deadlines and concrete tasks | Timer with a visible end, reminders, brain dump, a "get what you need ready" step, deadlines in parts |
| [ADDitude, *Take the First Sloppy Step*](https://www.additudemag.com/stop-adhd-procrastination/) | Start imperfectly, look only at the next step, set your own deadlines, use a body double | Just 2 minutes, ugly version allowed, tiny first step, mini deadline |
| [ADDitude, *We Don't See Time; We Feel It*](https://www.additudemag.com/does-anyone-know-what-time-it-is/) | Time is felt, not seen; estimate and measure, blocks of the day, visual timers | Time ring, "ends at", rhythm of the day, estimated against actual |
| [Stanford CTL, *Sustaining Motivation*](https://ctl.stanford.edu/sustaining-motivation) | INCUP: interesting, novel, challenging, urgent, people-oriented | The five boosters in the "Now" panel |
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
- There is a single day, not a multi-day calendar. A running timer is lost if the page is reloaded.

**Future ideas (not implemented):** collecting commitments from email and messages with consent; AI task breakdown that is always editable; focus rooms with real people; encrypted sync and a calendar connection; a shareable progress link.

## Privacy and ethics

- Data lives only in `localStorage`, under the key `enfoco.v2`. There is no account, server or analytics.
- The app's only network request is the Three.js library (unpkg.com). It carries no personal data.
- Nothing is shared automatically: messages only leave the page if the person copies them.
- We do not ask for health data. Energy and inner weather are the person's own notes, stay on the device and can be deleted under "Privacy and data".
- The personas (Marta, Tiago, Joana, Sofia, Pedro) and their data are fictional.

## Architecture

- **One file, no build.** HTML, CSS and one `<script type="module">`. Three.js 0.160.0 arrives through an import map (unpkg) and is loaded with a dynamic `import()`, so a CDN failure does not break the app.
- **Scene.** Orthographic camera on the (1,1,1) diagonal, an isometric view. Bulbs are laid out in a zig-zag and the camera fits itself to the number of tasks. The glow is emissive: strong in focus (with a slow pulse, turned off under reduced motion), medium on pause, almost none when done.
- **Model and fallbacks, in order:**
  1. `./models/bulb.glb`, loaded with `GLTFLoader`. The path is the `MODEL_PATH` constant at the top of the script.
  2. If the file is missing or fails, bulbs drawn in code (`LatheGeometry` for the glass, a cylinder and rings for the cap).
  3. Without WebGL or without Three.js, a simple HTML and CSS view with the same states.
- **Your own model.** Any GLB works: it is centred, stood on its base and scaled to bulb height. The glow is applied to materials that have an emissive channel. Draco- or KTX2-compressed models are not supported and make the app use the coded bulbs. A GLB will not load from `file://`; use a local server.
- **Accessibility.** The scene is decorative for screen readers; the task list beside it is the accessible equivalent, with labelled buttons. Tap targets of 44 px or more, visible focus, a reduced-motion mode, dark theme.
- **State.** One `S` object saved to `localStorage`. In the console, `__enfoco.state` shows it (for debugging only).

## Notes for the demo

- Open the page a few minutes early so the browser caches Three.js.
- On a laptop, the room stays fixed on the left and the day scrolls on the right.
- Suggested path (about 90 seconds): breathing (let one cycle run, then skip) → My day → Start (the bulb lights up) → Pause → Scenarios → Tiago (Just 2 minutes) → Sofia (return) → Pedro (handoff note).
- Sample data uses times relative to the moment the app is opened. Close to midnight, some tasks show no time.
- To start from scratch: Privacy and data → Delete everything.

## Next steps

1. Test with adults with ADHD, together with Brainstorm, starting with the five scenarios.
2. Review all the European Portuguese copy with the community.
3. Use those results to decide what to cut before adding anything.
4. Only then: focus rooms with real people, and consent-based collection of commitments.
