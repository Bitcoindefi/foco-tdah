# EnFoco: pitch de 3 minutos

Portugal Tech Week, *Hackathon for a Cause*, com a Brainstorm.
Equipa: Leonardo Cagliero e Sofía Vázquez Furriel.

Cerca de 410 palavras faladas, mais os cliques da demonstração. As indicações entre parênteses retos são para quem está no computador. Ensaiar com cronómetro: a parte 3 depende dos cliques.

---

## 1. Utilizador e problema (0:00 a 0:35)

Conheçam o Tiago. Tem uma tarefa de cinco minutos: responder à senhoria. Evita-a há três semanas. O que cresce todos os dias é a vergonha.

A Brainstorm deu-nos cinco pessoas assim: ideias a mais e nenhum primeiro passo, planos que ruem à quarta-feira, listas que se transformam numa parede de atrasos.

O problema destas pessoas é começar uma tarefa e ficar nela. Mais uma lista não as ajuda.

## 2. Aprendizagem e desenho (0:35 a 1:20)

A versão anterior tinha cerca de vinte funcionalidades. Perguntámo-nos qual delas alguém usaria de facto, e não soubemos responder. Por isso cortámos.

Ficou uma função: ajudar a fazer uma tarefa, com a luz acesa enquanto se faz.

O que guardámos veio do que lemos. A ADDitude recomenda começar por um passo pequeno e imperfeito: por isso a app propõe sempre o primeiro passo. O guia europeu ADHD-EU e a ADDitude pedem tempo à vista: por isso há um só temporizador, grande. E um estudo de 2026, de Chen, Meng e Nie, ainda em pré-publicação, mostra que as pessoas rejeitam vigilância e culpa: por isso o aviso de distração é só uma luz que baixa, e um toque para voltar.

## 3. Protótipo e utilidade (1:20 a 2:25)

[Capa aberta. «Começar». Saltar a respiração.]

O EnFoco faz uma pergunta: o que vais fazer agora?

[Escrever «Responder à senhoria». Enter.]

Escrevo a tarefa. A app devolve um primeiro passo minúsculo: abrir a mensagem e escrever só a primeira frase.

[«Acender e começar».]

Um toque, e a lâmpada acende. Fica acesa enquanto eu trabalho.

[Mudar de separador durante uns vinte segundos e voltar.]

Se me distraio, a luz baixa. Não há aviso vermelho nem contagem de falhas. Um toque, e volta a acender.

[«Estou aqui». Depois, «Feito».]

Quando acabo, a luz voa para o dia de hoje no calendário. Cada data guarda as luzes do foco que teve, e um dia em branco não apaga os outros.

[Apontar para o botão «Começar: …».]

E a app já me oferece a tarefa seguinte, a um toque.

Um ficheiro, duas línguas, e os dados ficam no navegador. Todos os modelos 3D são desenhados por código.

## 4. Visão, limites e próximos passos (2:25 a 3:00)

Isto é um protótipo. A lista e o histórico que viram são dados inventados. O primeiro passo vem de regras simples, não de IA. O aviso só sabe se o separador está à vista: não sabe o que a pessoa faz fora dele. Não é uma ferramenta médica. E ainda não o testámos com uma única pessoa com PHDA.

Esse é o próximo passo: pôr este ciclo à frente de pessoas da comunidade da Brainstorm e medir uma coisa só. Começaram? Ficaram?

Queremos que, no EnFoco, a luz acesa seja o único objetivo do ecrã.

Obrigado.

---

## Notas de palco

- **Antes de entrar:** abrir a página e confirmar que a lâmpada da capa está acesa e a rodar (a cena 3D carregou). Pôr em português. Se a rede falhar, a app mostra a vista simples e o ciclo funciona na mesma.
- **Respiração:** existe e é opcional. No palco, saltar.
- **O aviso de distração:** baixa a luz ao fim de 15 segundos com o separador escondido, ou 4 minutos sem tocar na página. Para o mostrar, mudar de separador, contar até vinte e voltar.
- **Tempo:** escolher «2 min» antes de acender, para a sessão caber no pitch.
- **Se o tempo apertar:** cortar a mudança de separador e dizer só a frase.

## Perguntas prováveis

- **«Isto foi validado?»** Não. As escolhas vêm de leitura de fontes públicas. A validação com pessoas com PHDA é o próximo passo, e é por isso que queremos trabalhar com a Brainstorm.
- **«O que cortaram?»** Personas de demonstração, reforços de motivação, foco acompanhado, registo de energia e humor, ritmo do dia. Nenhuma servia diretamente o ciclo «começar e ficar». Podem voltar se os testes o pedirem.
- **«A app vigia a pessoa?»** Não. Só sabe se o separador está à vista e se houve um toque. Não regista nada disso, e o tempo conta na mesma.
- **«Onde ficam os dados?»** Só no navegador, em localStorage. Há botões para exportar e apagar. Os únicos pedidos de rede são a biblioteca gráfica e duas fontes.
- **«E a IA?»** Hoje não há nenhuma. Se vier, será para sugerir o primeiro passo, que a pessoa pode sempre reescrever.
- **«Corre num telemóvel fraco?»** Foi desenhado para isso: poucos polígonos, uma luz por cena, 30 imagens por segundo. Só o testámos em poucos equipamentos; sem WebGL, aparece a vista simples.
