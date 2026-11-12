# EnFoco: pitch de 3 minutos

Portugal Tech Week, *Hackathon for a Cause*, com a Brainstorm.
Equipa: Leonardo Cagliero e Sofía Vázquez Furriel.

Cerca de 450 palavras faladas, mais os cliques da demonstração. As indicações entre parênteses retos são para quem está no computador. Ensaiar com cronómetro: a parte 3 depende dos cliques.

---

## 1. Utilizador e problema (0:00 a 0:35)

Conheçam o Tiago. Tem uma tarefa de cinco minutos: enviar um comprovativo à senhoria. Evita-a há três semanas. O que cresce todos os dias é a vergonha.

A Brainstorm deu-nos cinco pessoas assim. A Marta tem ideias a mais e nenhum primeiro passo. A Joana faz o plano perfeito e à quarta-feira já ruiu. A Sofia volta ao fim de doze dias e encontra uma parede de atrasos. O Pedro tem um projeto encalhado e não sabe pedir ajuda.

Os calendários e as listas mostram-lhes as falhas a vermelho.

## 2. Aprendizagem e desenho (0:35 a 1:15)

Lemos antes de desenhar. Três ideias mudaram o protótipo.

Primeira: um estudo de 2026, de Chen, Meng e Nie, ainda em pré-publicação, propõe tratar o tempo como ritmo e guardar o progresso mesmo quando há dias em branco. Por isso o nosso calendário não tem atrasos nem séries para quebrar.

Segunda: a ADDitude e o canal How to ADHD explicam que uma tarefa fácil pode pesar por razões emocionais. Por isso existe o «Só 2 minutos».

Terceira: o folheto INCUP, de Stanford, diz que o arranque vem do interesse, da novidade, do desafio, da urgência e das pessoas. Por isso cada tarefa tem cinco reforços, e há foco acompanhado.

Cada escolha tem na app uma nota «Porquê?», com a fonte.

## 3. Protótipo e utilidade (1:15 a 2:20)

[Capa aberta. Carregar em «Começar», deixar correr uma respiração, «Saltar», «O meu calendário».]

O EnFoco abre com três respirações. Depois, o calendário: um mapa low poly em que cada data é um bloco com doze luzes à volta. Cada luz acesa vale dez minutos de foco ou uma tarefa feita.

[Roda do rato para aproximar. Carregar em «Começar».]

Aproximo. Em hoje estão os foquitos, as tarefas do dia. Começo uma, e as luzes de hoje pulsam.

[Cenários → Joana.]

A Joana teve dois dias fortes e depois nada. O mapa mostra os dias que brilharam; os outros não levam marca nenhuma. Para hoje, a app propõe só duas coisas.

[Cenários → Sofia.]

A Sofia volta ao fim de doze dias: três coisas pequenas, o resto guardado.

Para o Tiago há o «Só 2 minutos», para a Marta o despejo de ideias, e para o Pedro uma nota de passagem já escrita.

Um único ficheiro, duas línguas, e os dados ficam no navegador.

## 4. Visão, limites e próximos passos (2:20 a 3:00)

Isto é um protótipo. Os dados são inventados. A companhia do foco acompanhado é simulada, e o primeiro passo vem de regras simples, não de IA. Não é uma ferramenta médica. E ainda não o testámos com uma única pessoa com PHDA.

Esse é o próximo passo: pôr estes cinco cenários à frente de pessoas da comunidade da Brainstorm e descobrir o que cortar. Só depois vêm as salas de foco com pessoas reais e a recolha de compromissos, sempre com consentimento.

Queremos que, no EnFoco, voltar nunca custe mais do que ficar.

Obrigado.

---

## Notas de palco

- **Antes de entrar:** abrir a página e confirmar que a lâmpada da capa roda (a cena 3D carregou). Pôr em português. Se a rede falhar, a app mostra o calendário simples e a demonstração continua igual.
- **Num portátil:** o mapa fica fixo à esquerda e o dia à direita. Ao carregar em «Começar», apontar para as luzes a pulsar no bloco de hoje.
- **Zoom:** roda do rato sobre o mapa, ou os botões + e − no canto do mapa. O botão do quadrado volta a mostrar o mês inteiro.
- **Se o tempo apertar:** cortar o cenário da Sofia e ficar pela frase.
- **No fim:** «Sair e repor os meus dados», na faixa do topo.

## Perguntas prováveis

- **«Isto foi validado?»** Não. As escolhas vêm de leitura de fontes públicas. A validação com pessoas com PHDA é o próximo passo, e é por isso que queremos trabalhar com a Brainstorm.
- **«Onde ficam os dados?»** Só no navegador da pessoa, em localStorage. Há botões para exportar e apagar. O único pedido de rede é a biblioteca gráfica.
- **«E um dia sem luzes?»** Fica como está, sem marca. O que não se fez passa para hoje sem estado de atraso, e a contagem de foquitos acesos nunca volta a zero.
- **«Corre num telemóvel fraco?»** Foi desenhado para isso: poucos polígonos, uma só luz por cena, 30 imagens por segundo. Só o testámos em poucos equipamentos; sem WebGL, aparece o calendário simples.
- **«A companhia é uma pessoa?»** Não, é simulada, e a app di-lo no ecrã. As mensagens de convite servem para chamar uma pessoa a sério.
- **«E a IA?»** Hoje não há nenhuma. Se vier, será para sugerir passos que a pessoa pode sempre editar ou recusar.
