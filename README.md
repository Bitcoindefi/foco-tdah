# EnFoco

**Uma tarefa. Uma luz acesa.** Protótipo de hackathon para adultos com PHDA (TDAH noutros países). Faz uma coisa: ajuda a pessoa a fazer uma tarefa, e mantém a luz acesa enquanto ela a faz.

- Demonstração: https://bitcoindefi.github.io/foco-tdah/
- Repositório: https://github.com/Bitcoindefi/foco-tdah
- Equipa: Leonardo Cagliero e Sofía Vázquez Furriel
- Contexto: Portugal Tech Week, *Hackathon for a Cause*, com a Brainstorm (associação portuguesa de PHDA)

> O EnFoco não é uma ferramenta médica. Não diagnostica, não trata e não substitui acompanhamento profissional. A lista e o histórico de exemplo são dados inventados.

[English version below](#enfoco-english)

---

## O ciclo

1. **Uma tarefa para agora.** Escreve-a, ou pega numa das três primeiras da lista.
2. **Primeiro passo minúsculo.** A app sugere-o a partir do texto da tarefa; podes reescrevê-lo. Escolhes 2, 10 ou 25 minutos e carregas em «Acender e começar».
3. **A luz acesa.** Uma lâmpada grande acende e fica acesa enquanto trabalhas, com um temporizador simples. Se o separador ficar escondido 15 segundos, ou a página 4 minutos sem um toque, a lâmpada baixa e pede um toque para voltar. Não há contagem de falhas.
4. **Feito.** A luz voa para a data de hoje no calendário, e a tarefa seguinte fica a um toque.

Do teclado: escrever, Enter, Enter. Da lista: dois toques.

À volta do ciclo há só mais três coisas: a capa, uma respiração opcional de 36 segundos e uma página «Sobre e privacidade». As tarefas e os objetivos guardados vivem num único menu que abre e fecha, por baixo.

## Como correr

1. **Abrir diretamente.** Faz duplo clique em `index.html`. Precisa de rede para o Three.js (unpkg.com) e para as fontes (Google Fonts). Sem rede, a app usa a vista simples e as fontes do sistema.
2. **Servidor local**, se preferires:
   ```bash
   python3 -m http.server 8000
   # abre http://localhost:8000
   ```
3. **GitHub Pages.** Põe `index.html` na raiz do repositório e ativa o Pages. Não há passo de compilação.

```
index.html   a app inteira (HTML, CSS e JavaScript)
README.md    este ficheiro
pitch.md     guião do pitch de 3 minutos
```

## O que saiu na versão 4, e porquê

A versão 3 tinha cerca de vinte funcionalidades e não sabíamos dizer quais eram usadas. Ficou o que serve diretamente «começar e ficar na tarefa».

| Saiu | Porquê |
|---|---|
| Cenários com personas | Eram para o palco, não para quem usa |
| Reforços INCUP, cartas, cores | Decisões a mais antes de começar |
| Foco acompanhado, convites, nota de passagem | Um segundo produto dentro do primeiro |
| Registo de energia e tempo interior, plano base e ideal | Pediam uma resposta antes de cada tarefa |
| Ritmo do dia, previsto contra real | Informação que ninguém pediu |
| Planear dias futuros, objetivos em partes | O calendário passou a ser só registo |
| Notas «Porquê?» dentro da app | A justificação fica aqui, no README |
| Páginas de privacidade e de visão | Fundidas numa só, pequena |
| Carregamento de `./models/bulb.glb` | Todos os modelos são agora desenhados por código |

Podem voltar se os testes com pessoas o pedirem.

As notas «Porquê?» voltaram para dentro da app, em cada funcionalidade que ainda existe, com ligações às fontes. O resumo abaixo mantém-se.

## Porquê este desenho

Justificação curta, com as leituras que a sustentam.

| Decisão | Leitura |
|---|---|
| Uma tarefa de cada vez, com um primeiro passo pequeno e imperfeito | [ADDitude, *Take the First Sloppy Step*](https://www.additudemag.com/stop-adhd-procrastination/): começar de forma imperfeita e olhar só para o passo seguinte |
| Um só temporizador, grande, com sessões curtas (2, 10, 25 min) | [ADDitude, *We Don't See Time; We Feel It*](https://www.additudemag.com/does-anyone-know-what-time-it-is/) e [ADHD-EU, *Adult ADHD: A Practical Guide* (2024)](https://adhdireland.ie/wp-content/uploads/2024/09/Erasmus-Shared-Practices-1.pdf): tornar o tempo visível, limites claros; [Stanford CTL, *Sustaining Motivation*](https://ctl.stanford.edu/sustaining-motivation): períodos curtos cronometrados |
| O aviso de distração é uma luz que baixa, sem culpa nem registo | [Chen, Meng e Nie (2026)](https://arxiv.org/abs/2603.17258): as pessoas entrevistadas rejeitam vigilância e descrevem vergonha quando um plano falha; [How to ADHD, *Wall of Awful*](https://www.youtube.com/watch?v=Uo08uS904Rg): a barreira é emocional, não é preguiça |
| O calendário guarda luzes e não tem séries nem atrasos | Chen, Meng e Nie (2026): marcas de progresso que sobrevivem aos dias em branco; Stanford CTL: marcadores visuais de progresso |
| O arranque vem de interesse e urgência, não de importância | [Neurodivergent Insights, *Interest-Based Nervous System*](https://neurodivergentinsights.com/blog/interest-based-nervous-system) e [How to ADHD, *ADHD and Motivation*](https://www.youtube.com/watch?v=OM0Xv0eVGtY): por isso o ecrã oferece uma ação imediata e um prazo curto |

Ressalvas: o guia «Adult ADHD: A Practical Guide» é do projeto Erasmus+ ADHD-EU (ADHD Ireland, Epioni, Universidade de Chipre), não da ADHD Europe. O «sistema nervoso baseado no interesse» é um modelo clínico, não uma teoria testada em estudos. O artigo de Chen e colegas é uma pré-publicação. Nenhuma fonte avalia o EnFoco, e ainda não o testámos com pessoas com PHDA.

## Desenho visual

- **Cor.** A noite da cena low poly e uma única luz quente. O âmbar fica reservado para o que está aceso: a ação principal, o temporizador, o dia de hoje.
- **Tipografia.** Bricolage Grotesque para títulos e números, Atkinson Hyperlegible para leitura, numa escala de 1,25 a partir de 17 px.
- **Espaço.** Grelha de 4 px: 4, 8, 12, 16, 24, 32, 48, 64.
- **Campos e botões.** Campos desenhados de raiz, com anel de foco âmbar; o botão dentro do campo só acende quando há texto. Três níveis de botão: um principal por ecrã, contorno, e texto.
- **Ícones.** Uma só família em SVG, traço de 1,75 px. Sem emojis.
- **Movimento.** Pouco e com função: a lâmpada a acender, a luz a voar, a entrada de cada passo. Tudo desliga com movimento reduzido.
- **Tema.** Noite por omissão; em «Sobre» há tema claro e o do sistema. A cena 3D é sempre noturna.

## Modelos 3D, todos em código

Não há ficheiros de modelos. Tudo é construído com geometria do Three.js e materiais com `flatShading`:

- **Lâmpada:** vidro facetado de oito lados feito em torno (`LatheGeometry`), filamento num núcleo com dois suportes, casquilho com roscas de dois raios. Apagada, o vidro é frio e transparente; acesa, aquece e o filamento brilha.
- **Datas:** cada bloco é um plinto quadrado com topo chanfrado (um torno de quatro lados), desenhado como `InstancedMesh`. À volta de cada um, doze luzes, três por lado, noutro `InstancedMesh`.
- **Cenário:** pinheiros de dois andares, pedras, lanternas nos cantos do tabuleiro, a ilha da capa e o terreno facetado.

`MODEL_OVERRIDE`, no topo do script, está vazio. Se lhe deres o caminho de um `.glb`, esse modelo substitui a lâmpada; se falhar, fica a lâmpada em código. A app funciona por inteiro sem ele.

## Arquitetura

- **Um ficheiro, sem compilação.** HTML, CSS e um `<script type="module">`. O Three.js 0.160.0 chega por *import map* e é carregado com `import()` dinâmico, por isso uma falha da CDN não parte a app.
- **Um canvas, duas cenas.** A lâmpada na ilha (capa e sessão de foco) e o mapa do calendário partilham o mesmo contexto WebGL.
- **Mapa.** Câmara ortográfica em vista isométrica. Aproximar com roda, dois dedos ou botões; arrastar move. Tocar numa data mostra o foco e as tarefas feitas nesse dia.
- **Regra das luzes.** Uma luz por cada 10 minutos de foco começados, e uma por tarefa feita, até doze por dia.
- **Sem WebGL ou sem Three.js.** O mesmo ciclo corre com um calendário em HTML e CSS e uma lâmpada em SVG.
- **Desempenho.** Poucos polígonos, uma luz pontual por cena, razão de píxeis limitada a 1,5, cerca de 30 imagens por segundo, animações baseadas em tempo. Testado apenas em Chrome com renderização por software; falta testar em equipamentos reais.
- **Acessibilidade.** Alvos de toque de 44 px ou mais, foco visível, movimento reduzido, tudo utilizável por teclado. As cenas são decorativas para leitores de ecrã; o estado é dito em texto.
- **Estado.** Um objeto em `localStorage` (chave `enfoco.v4`): tarefas, objetivos, segundos de foco por dia, preferências. Dados da versão 3 são trazidos uma vez.

## Privacidade e limites

- Tudo fica no navegador. Não há conta, servidor nem análises.
- Pedidos de rede: a biblioteca Three.js (unpkg.com) e duas fontes (Google Fonts). Nenhum leva dados da pessoa.
- A música lofi de foco é gerada neste dispositivo com a Web Audio API. Não há ficheiro de áudio, amostras de terceiros nem pedido de rede (ver créditos abaixo).
- O assistente de voz usa as APIs de voz deste navegador (reconhecimento, quando existe, e leitura). O EnFoco não tem chave nem servidor de voz; o navegador pode usar o serviço de voz do próprio fabricante. No Firefox o reconhecimento costuma falhar: fica a leitura e um campo para escrever o comando.
- O aviso de distração só sabe se o separador está à vista e se houve um toque. Não sabe se a pessoa está a trabalhar fora do ecrã, e por isso o tempo da sessão conta sempre.
- O primeiro passo vem de regras por palavras-chave, não de IA.
- Um temporizador a correr perde-se se a página for recarregada (o foco já registado fica).
- Em «Sobre e privacidade»: exportar, apagar tudo, tema, movimento e respiração.

## Notas para a demonstração

- Abre a página uns minutos antes. A lâmpada da capa acesa e a rodar confirma que a cena 3D carregou.
- Escolhe «2 min» para a sessão caber no pitch.
- Música lofi: o botão de notas no topo (desligada por omissão). Volume ao lado. A preferência fica em localStorage.
- Assistente de voz: o botão de microfone. Comandos: «o que faço», «anotar …», «começa 2, 10 ou 25 minutos», «toca música» / «para a música». Se o microfone não estiver disponível, escreve o comando ou usa «Ouvir a recomendada de hoje».
- Para mostrar o aviso: muda de separador, conta até vinte, volta.
- Para recomeçar do zero: Sobre → Apagar tudo. Para voltar ao exemplo, apaga a chave `enfoco` nas ferramentas do navegador e recarrega.

## Créditos de áudio

A música lofi de foco é um ciclo original gerado em tempo real nesta página, com a Web Audio API (bateria suave, baixo, acordes de sétima e um pouco de «vinil»). Não se usa nenhum ficheiro, amostra ou biblioteca de terceiros. O código é do EnFoco e podes redistribuí-lo com o resto da app.

## Próximos passos

1. Testar o ciclo com adultos com PHDA, em conjunto com a Brainstorm.
2. Medir duas coisas: começaram? ficaram?
3. Ajustar os limiares do aviso (15 s e 4 min são palpites nossos).
4. Só então decidir o que volta.

---

# EnFoco (English)

**One task. One light on.** A hackathon prototype for adults with ADHD. It does one thing: it helps a person get a task done, and keeps the light on while they do it.

- Live demo: https://bitcoindefi.github.io/foco-tdah/
- Repository: https://github.com/Bitcoindefi/foco-tdah
- Team: Leonardo Cagliero and Sofía Vázquez Furriel
- Context: Portugal Tech Week, *Hackathon for a Cause*, with Brainstorm (Portuguese ADHD association)

> EnFoco is not a medical tool. It does not diagnose, treat or replace professional support. The sample list and history are made-up data.

## The loop

1. **One task for now.** Write it, or pick one of the first three on the list.
2. **A tiny first step.** The app suggests it from the task's wording; you can rewrite it. Choose 2, 10 or 25 minutes and press "Light up and start".
3. **The light on.** A big bulb lights up and stays lit while you work, with a simple timer. If the tab is hidden for 15 seconds, or the page goes 4 minutes without a touch, the bulb dims and asks for one tap to come back. Nothing counts failures.
4. **Done.** The light flies to today's date on the calendar, and the next task is one tap away.

From the keyboard: type, Enter, Enter. From the list: two taps.

Around the loop there are only three more things: the cover, an optional 36-second breathing screen, and an "About and privacy" page. Saved tasks and goals live in a single collapsible menu below.

## How to run

1. **Open it directly.** Double-click `index.html`. It needs a network for Three.js (unpkg.com) and the fonts (Google Fonts). Without one, the app uses the simple view and system fonts.
2. **Local server**, if you prefer:
   ```bash
   python3 -m http.server 8000
   # open http://localhost:8000
   ```
3. **GitHub Pages.** Put `index.html` at the repository root and enable Pages. There is no build step.

```
index.html   the whole app (HTML, CSS and JavaScript)
README.md    this file
pitch.md     script for the 3-minute pitch (in Portuguese)
```

## What left in version 4, and why

Version 3 had about twenty features and we could not say which ones were used. What stayed is what directly serves "start, and stay with the task".

| Removed | Why |
|---|---|
| Persona scenarios | They were for the stage, not for the person using it |
| INCUP boosters, cards, colours | Too many decisions before starting |
| Focus with company, invitations, handoff note | A second product inside the first |
| Energy and inner-weather check-ins, baseline and ideal plans | They asked for an answer before every task |
| Rhythm of the day, estimated against actual | Information nobody asked for |
| Planning future days, goals in parts | The calendar is now only a record |
| "Why?" notes inside the app | The justification lives here, in the README |
| Privacy page and vision page | Merged into one small page |
| Loading `./models/bulb.glb` | Every model is now drawn in code |

They can come back if testing with people asks for them.

The “Why?” notes are back inside the app, on each feature that remains, with links to the sources. The short table below still stands.

## Why this design

A short justification, with the reading behind it.

| Decision | Reading |
|---|---|
| One task at a time, with a small, imperfect first step | [ADDitude, *Take the First Sloppy Step*](https://www.additudemag.com/stop-adhd-procrastination/): start imperfectly and look only at the next step |
| A single large timer, with short sessions (2, 10, 25 min) | [ADDitude, *We Don't See Time; We Feel It*](https://www.additudemag.com/does-anyone-know-what-time-it-is/) and [ADHD-EU, *Adult ADHD: A Practical Guide* (2024)](https://adhdireland.ie/wp-content/uploads/2024/09/Erasmus-Shared-Practices-1.pdf): make time visible, set clear limits; [Stanford CTL, *Sustaining Motivation*](https://ctl.stanford.edu/sustaining-motivation): short timed sprints |
| The drift nudge is a light that dims, with no blame and no record | [Chen, Meng and Nie (2026)](https://arxiv.org/abs/2603.17258): the people interviewed reject surveillance and describe shame when a plan breaks; [How to ADHD, *Wall of Awful*](https://www.youtube.com/watch?v=Uo08uS904Rg): the barrier is emotional, not laziness |
| The calendar keeps lights and has no streaks and nothing overdue | Chen, Meng and Nie (2026): progress markers that survive blank days; Stanford CTL: visual progress trackers |
| Getting started comes from interest and urgency, not importance | [Neurodivergent Insights, *Interest-Based Nervous System*](https://neurodivergentinsights.com/blog/interest-based-nervous-system) and [How to ADHD, *ADHD and Motivation*](https://www.youtube.com/watch?v=OM0Xv0eVGtY): so the screen offers one immediate action and a short deadline |

Caveats: "Adult ADHD: A Practical Guide" comes from the Erasmus+ ADHD-EU project (ADHD Ireland, Epioni, University of Cyprus), not from ADHD Europe. The "interest-based nervous system" is a clinical model, not a theory tested in studies. The paper by Chen and colleagues is a preprint. No source evaluates EnFoco, and we have not yet tested it with people with ADHD.

## Visual design

- **Colour.** The night of the low-poly scene and one warm light. Amber is reserved for whatever is lit: the main action, the timer, today.
- **Type.** Bricolage Grotesque for headings and numbers, Atkinson Hyperlegible for reading, on a 1.25 scale from a 17 px base.
- **Space.** A 4 px grid: 4, 8, 12, 16, 24, 32, 48, 64.
- **Fields and buttons.** Fields drawn from scratch, with an amber focus ring; the button inside a field only lights up once there is text. Three button levels: one primary per screen, outline, and text.
- **Icons.** One SVG family, 1.75 px strokes. No emoji.
- **Motion.** Little, and with a job: the bulb lighting, the light flying, each step arriving. All of it turns off under reduced motion.
- **Theme.** Night by default; "About" offers a light theme and the system's. The 3D scene is always night.

## 3D models, all in code

There are no model files. Everything is built from Three.js geometry and `flatShading` materials:

- **Bulb:** eight-sided faceted glass turned on a lathe (`LatheGeometry`), a filament core on two posts, a screw base with threads of two radii. Off, the glass is cool and see-through; on, it warms up and the filament glows.
- **Dates:** each block is a square plinth with a chamfered top (a four-sided lathe), drawn as an `InstancedMesh`. Around each one, twelve lights, three per side, in another `InstancedMesh`.
- **Scenery:** two-tier pines, rocks, lanterns at the corners of the board, the cover island and the faceted ground.

`MODEL_OVERRIDE`, at the top of the script, is empty. Give it the path of a `.glb` and that model replaces the bulb; if it fails, the coded bulb stays. The app works fully without it.

## Architecture

- **One file, no build.** HTML, CSS and one `<script type="module">`. Three.js 0.160.0 arrives through an import map and is loaded with a dynamic `import()`, so a CDN failure does not break the app.
- **One canvas, two scenes.** The bulb on its island (cover and focus session) and the calendar map share the same WebGL context.
- **Map.** Orthographic camera in an isometric view. Zoom with the wheel, two fingers or buttons; drag to move. Tapping a date shows that day's focus and finished tasks.
- **Rule for the lights.** One light for every 10 minutes of focus started, and one per finished task, up to twelve a day.
- **Without WebGL or Three.js.** The same loop runs with an HTML and CSS calendar and an SVG bulb.
- **Performance.** Low polygon counts, one point light per scene, pixel ratio capped at 1.5, about 30 frames per second, time-based animation. Tested only in Chrome with software rendering; real devices still need testing.
- **Accessibility.** Tap targets of 44 px or more, visible focus, reduced motion, everything usable from the keyboard. The scenes are decorative for screen readers; state is given in text.
- **State.** One object in `localStorage` (key `enfoco.v4`): tasks, goals, seconds of focus per day, preferences. Version 3 data is carried over once.

## Privacy and limits

- Everything stays in the browser. There is no account, server or analytics.
- Network requests: the Three.js library (unpkg.com) and two fonts (Google Fonts). Neither carries personal data.
- The lofi focus music is generated on this device with the Web Audio API. There is no audio file, no third-party sample and no network request (see credits below).
- The voice assistant uses this browser's speech APIs (recognition, where it exists, and read-aloud). EnFoco has no voice key or server; the browser may use its vendor's built-in speech service. In Firefox, recognition is often missing: read-aloud and a typed command field remain.
- The drift nudge only knows whether the tab is in view and whether there was a touch. It cannot tell if the person is working away from the screen, so session time always counts.
- The first step comes from keyword rules, not from AI.
- A running timer is lost if the page is reloaded (focus already logged stays).
- Under "About and privacy": export, delete everything, theme, motion and breathing.

## Notes for the demo

- Open the page a few minutes early. The cover bulb lit and turning confirms the 3D scene has loaded.
- Choose "2 min" so the session fits in the pitch.
- Lofi music: the notes button in the top bar (off by default). Volume next to it. The preference is stored in localStorage.
- Voice assistant: the microphone button. Commands: “what should I do”, “add …”, “start 2, 10 or 25 minutes”, “play music” / “stop music”. If the microphone is unavailable, type the command or use “Hear today's recommended task”.
- To show the nudge: switch tabs, count to twenty, come back.
- To start from scratch: About → Delete everything. To get the sample back, remove the `enfoco` key in the browser's developer tools and reload.

## Audio credits

The lofi focus music is an original loop generated in real time on this page, with the Web Audio API (a soft beat, bass, seventh chords and a little vinyl crackle). No file, sample or third-party library is used. The code is part of EnFoco and may be redistributed with the rest of the app.

## Next steps

1. Test the loop with adults with ADHD, together with Brainstorm.
2. Measure two things: did they start? did they stay?
3. Tune the nudge thresholds (15 s and 4 min are our guesses).
4. Only then decide what comes back.
