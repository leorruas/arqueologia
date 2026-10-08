---
title: "Normatividade percebida da hostilidade"
type: "variavel"
status: "publicado"
eixo: "hostilidade percebida como excepcional ↔ hostilidade percebida como norma"
tags:
  - design/variavel
  - arqueologia
  - politica
  - normas-sociais
  - relacoes-intergrupais
---

# Normatividade percebida da hostilidade

Uma pessoa pode não ser especialmente hostil ao outro grupo e ainda acreditar que **todo mundo ao redor é**. Essa crença muda o ambiente social em que decisões são tomadas: conciliação pode parecer ingênua, cordialidade pode parecer desvio e agressividade pode parecer apenas aquilo que “as pessoas como nós fazem”.

**Normatividade percebida da hostilidade** é uma variável deste projeto para observar quanto comportamentos hostis entre grupos são percebidos como excepcionais ou como socialmente normais. A formulação combina duas tradições consolidadas — percepção de normas sociais e meta-percepções entre grupos — e as transforma num eixo comparável para análise de artefatos de design.

**Eixo:** hostilidade percebida como excepcional ↔ hostilidade percebida como norma.

A variável precisa registrar **qual norma está sendo inferida**. Normas descritivas dizem respeito ao que parece comum: “as pessoas normalmente atacam o outro lado”. Normas prescritivas ou injuntivas dizem respeito ao que parece aprovado ou esperado: “pessoas como nós acham correto atacar o outro lado”. As duas podem divergir.

## Quando observar vira aprender o que é normal

Ambientes sociais ensinam normas por exposição. Uma pessoa observa comportamentos, reações, recompensas, silêncio, punições e frequência aparente e usa esses sinais para inferir o que outros fazem e aprovam. Em redes digitais, parte dessa amostra é organizada por sistemas de ranking, recomendação e engajamento. Isso cria um problema de design: a experiência disponível para observação pode não representar a distribuição real de atitudes e comportamentos na população.

Brady e colegas demonstraram esse problema em um estudo sobre indignação moral em redes sociais. Comparando o que autores de mensagens relatavam sentir com aquilo que observadores inferiam de suas postagens, encontraram uma superestimação sistemática da indignação moral. Experimentos subsequentes mostraram que essa superpercepção podia inflar crenças sobre indignação coletiva, normas de comunicação hostil, polarização afetiva e extremidade ideológica.[^1]

O achado é importante porque mostra uma passagem entre **sinal individual** e **conhecimento social**. Uma postagem não informa apenas o que seu autor supostamente sente. Quando várias postagens parecem expressar indignação intensa, o observador pode inferir como “as pessoas daquele grupo” normalmente sentem e se comportam.

O Twitter também mostra como feedback recebido pode virar norma aprendida. Em estudos preregistrados, Brady e colegas encontraram que pessoas que recebiam mais feedback social por expressar indignação moral tinham maior probabilidade de repetir esse tipo de expressão depois; participantes também ajustavam seu comportamento às normas expressivas observadas em suas redes. A arquitetura de reação pública, portanto, pode ensinar não só o que parece frequente, mas também o que parece socialmente recompensado.

A inferência pode ser errada mesmo quando cada conteúdo observado é autêntico. O problema não exige desinformação factual: uma amostra enviesada ou uma leitura exagerada de sinais reais já pode produzir uma norma percebida distorcida.

## Meta-percepções: imaginar como eles nos veem

Outra fonte de hostilidade normativa são as **meta-percepções** — crenças sobre como o outro grupo percebe o próprio grupo. Lees e Cikara encontraram, em sete experimentos e um survey, que participantes superestimavam consistentemente a negatividade do outro grupo em contextos competitivos. No contexto político norte-americano, maior imprecisão estava associada a maior crença de que o outro lado agia por obstrução deliberada; corrigir a imprecisão reduziu atribuições negativas em alguns experimentos.[^2]

Moore-Berg e colegas encontraram uma forma particularmente forte desse fenômeno entre partidários norte-americanos. Democratas e republicanos superestimavam aproximadamente em duas vezes o preconceito e a desumanização que acreditavam receber do outro lado, e essas meta-percepções exageradas estavam associadas a maior desejo de [[02 variaveis/Distância social|distância social]] e maior apoio a ações prejudiciais ao país em benefício do próprio grupo.[^3]

Essa literatura mostra que “eles nos odeiam” pode funcionar como uma crença social própria, diferente de “eu os odeio”. A primeira pode justificar defensivamente a segunda: se a hostilidade do outro parece generalizada, responder com hostilidade pode parecer reação normal ou necessária.

Meta-percepções também não são perfeitamente estáveis. Pesquisas longitudinais mostram que seus preditores podem mudar dependendo de se observamos diferenças entre pessoas ou mudanças dentro da mesma pessoa ao longo do tempo.[^4] Por isso, a variável deve registrar contexto e período, evitando tratá-la como traço fixo.

## O feed como amostrador de sociedade

O [[05 percursos/Da Parede ao Feed|feed]] torna essa variável particularmente importante porque funciona como uma amostra contínua de comportamento social. O usuário não vê “a sociedade”; vê uma sequência selecionada de pessoas, falas e reações e precisa inferir a sociedade a partir dela.

Em um experimento de oito semanas com 2.000 participantes durante a eleição presidencial norte-americana de 2024, Brady e colegas compararam diferentes algoritmos de feed. Rankings baseados em engajamento ampliaram exposição a conteúdo intergrupal, moralizado, emocional e tóxico e aumentaram a percepção de animosidade partidária. Um algoritmo desenhado para reduzir a influência de usuários extremos diminuiu esse tipo de exposição e melhorou a precisão de normas prescritivas percebidas, mantendo prazer de uso comparável.[^5]

Esse estudo oferece uma demonstração rara de um princípio de design sistêmico: **mudar quem ganha visibilidade pode mudar aquilo que o público acredita ser socialmente normal**. O sistema não precisa alterar diretamente a opinião política do usuário para alterar seu modelo sobre o comportamento dos outros.

A variável, portanto, não mede apenas conteúdo. Ela mede uma interpretação produzida a partir da arquitetura de exposição.

## Quando aparência de consenso encontra disposição para falar

A teoria da *espiral do silêncio*, formulada por Elisabeth Noelle-Neumann em 1974, propõe uma relação entre a percepção do clima de opinião e a disposição pública de expressar posições percebidas como minoritárias.[^6] A teoria oferece um parentesco interpretativo para investigar feeds, mas não demonstra que toda exposição desigual produza silêncio ou mude posicionamentos. Perceber uma opinião como majoritária, considerá-la socialmente aceitável e sentir hostilidade dirigida ao próprio grupo são fenômenos distintos.

A hipótese do Arqueologia do Design pode ser descrita como um circuito a testar: **distribuição desigual → percepção sobre o que os outros pensam → possível mudança na disposição para falar → alterações nas mensagens disponíveis**. Cada passagem exige evidência própria. Uma pessoa pode perceber que determinada opinião aparece com frequência e continuar disposta a discordar; outra pode preferir expressar-se em contextos diferentes. A hipótese não substitui observação de comportamentos nem atribui à plataforma intenção política automática.

O experimento de Brady e colaboradores publicado na *Nature* em 2026 permite observar outra parte desse problema.[^5] Em uma experiência controlada com feeds personalizados durante a eleição norte-americana de 2024, a alteração da regra de ranking mudou exposição a conteúdo emocional e hostil, percepções de normas e animosidade percebida, mas não alterou significativamente determinados comportamentos próprios de engajamento. A distinção reforça o cuidado metodológico: **mudar a ideia de como os outros se comportam não equivale a mudar o próprio comportamento**.

O fenômeno deve continuar relacionado à [[02 variaveis/Normatividade percebida da hostilidade|normatividade percebida da hostilidade]] sem colapsar diferentes construtos em uma única escala. Uma nova variável de “consenso percebido” só deve ser criada se uma investigação posterior demonstrar utilidade operacional e fontes suficientes para diferenciá-la.

## Artefatos pequenos também ensinam normas

O [[03 artefatos/Meme|meme]], o [[03 artefatos/Clip político|clip político]] e o [[03 artefatos/Apelido político|apelido político]] podem participar da formação de normas quando sua repetição torna determinados enquadramentos fáceis de encontrar e reconhecer. Uma peça isolada oferece pouco suporte para inferir norma; sua frequência, distribuição, reação pública e contexto de circulação importam mais que o formato em si.

Um apelido repetido por milhares de pessoas pode sinalizar que ridicularizar determinado ator é comportamento aceito naquele grupo. Um clip hostil com alto engajamento pode parecer evidência de que “é assim que o outro lado fala”. Um meme pode funcionar como ritual de pertencimento quando compartilhar a peça comunica também que certo tipo de hostilidade é compreensível ou legítimo dentro da comunidade.

O [[03 artefatos/Tango|Tango]] permite formular a operação inversa como hipótese: colocar adversários numa tarefa cooperativa pode mostrar, em pequena escala, que interação funcional entre grupos é uma possibilidade social. Esse efeito deve ser distinguido da mudança individual de afeto. Uma experiência pode alterar “o que acho possível ou normal entre grupos” sem alterar imediatamente “quanto gosto do outro grupo”.

Essa distinção dá precisão à operação de **modelagem de norma** já proposta em [[01 conceitos/Design da aversão|Design da aversão]]. Um dispositivo pode reduzir aversão atuando menos sobre argumentos e mais sobre expectativas de comportamento: mostrar adversários discordando sem se desumanizar, cooperando sem converter-se ou reconhecendo limites sem abandonar suas identidades.

## Como observar

A variável pode ser medida perguntando o que o participante acredita que outras pessoas **fazem** e **aprovam**. Exemplos: “quanto membros do seu grupo costumam insultar o outro lado?”, “quanto eles aprovam esse comportamento?”, “quanto membros do outro grupo odeiam pessoas como você?”, “quão comum é uma conversa respeitosa entre os dois grupos?”.

Sempre que possível, a percepção deve ser comparada a um referente observável: atitudes médias medidas na população, comportamento agregado, distribuição real de conteúdo ou respostas declaradas pelos próprios grupos. Essa comparação permite separar normatividade percebida de **acurácia normativa**.

O erro pode ocorrer em duas direções. Hostilidade pode ser superestimada, fazendo conflito parecer mais comum do que é; também pode ser subestimada, normalizando um ambiente como seguro quando comportamentos hostis são de fato frequentes. A variável não presume que a correção sempre será “menos hostilidade”.

Também é importante distinguir percepção de norma de adesão à norma. Uma pessoa pode acreditar que “todo mundo faz” e desaprovar; pode acreditar que “todo mundo aprova” e evitar o comportamento; pode seguir a norma apenas porque teme custo social. O eixo mede o **modelo social percebido**, não a conduta individual.

## Relações com as outras variáveis

[[02 variaveis/Distância social|Distância social]] mede até onde uma pessoa aceita proximidade com membros do outro grupo. Normatividade percebida da hostilidade mede o ambiente que parece cercar essa decisão. Se convivência intergrupal parece rara ou socialmente punida, proximidade pode ter custo reputacional mesmo sem forte antipatia pessoal.

[[02 variaveis/Ameaça percebida|Ameaça percebida]] pode ser alimentada por normas percebidas: acreditar que o outro grupo normalmente deseja dano ao próprio grupo torna a ameaça mais plausível. A relação também pode operar no sentido inverso, porque grupos percebidos como ameaçadores podem ter suas expressões interpretadas como mais hostis.

[[02 variaveis/Reversibilidade representacional|Reversibilidade representacional]] entra quando uma norma percebida se torna evidência autoestabilizadora. Se “todo mundo sabe que eles nos odeiam”, cada novo episódio hostil pode confirmar o modelo enquanto interações neutras são tratadas como irrelevantes. A arquitetura de exposição pode aumentar ou reduzir essa assimetria de evidência.

[[02 variaveis/Prototipicidade percebida|Prototipicidade percebida]] define quanto um caso parece representar o grupo. Um episódio hostil cometido por alguém percebido como altamente prototípico tem mais potencial para alimentar crenças sobre o comportamento coletivo do que o mesmo episódio atribuído a uma exceção.

A pergunta que a variável acrescenta ao projeto é: **o que este artefato faz parecer normal entre os grupos?**

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Normatividade percebida da hostilidade |
| **Eixo** | Hostilidade percebida como excepcional ↔ hostilidade percebida como norma |
| **Definição operacional** | Grau em que comportamentos, sentimentos ou formas de comunicação hostis entre grupos são percebidos como frequentes, esperados ou socialmente aprovados |
| **Como observar** | Estimativas de frequência e aprovação de hostilidade, meta-percepções de animosidade, comparação entre normas percebidas e medidas reais, inferências sobre “como pessoas como nós/eles normalmente agem” |
| **Subdimensões** | Norma descritiva: o que parece comum; norma prescritiva/injuntiva: o que parece aprovado ou esperado |
| **O que não mede sozinho** | Hostilidade pessoal, [[02 variaveis/Ameaça percebida|ameaça percebida]], [[02 variaveis/Distância social|distância social]], comportamento efetivo, ideologia ou precisão factual geral |
| **Trade-offs principais** | Tornar normas visíveis pode melhorar coordenação; amostras enviesadas podem fazer comportamentos extremos parecerem representativos. Corrigir norma percebida não garante mudança duradoura de atitude ou comportamento |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]], Feed algorítmico, [[03 artefatos/Meme|Meme]], [[03 artefatos/Clip político|Clip político]], [[03 artefatos/Apelido político|Apelido político]], [[03 artefatos/Tango|Tango]] como contraste |
| **Conceitos relacionados** | [[01 conceitos/Design da aversão|Design da aversão]], [[01 conceitos/Polarização afetiva|Polarização afetiva]], [[01 conceitos/Identidade política negativa|Identidade política negativa]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]]; [[05 percursos/Da Parede ao Feed|Da parede ao feed]] como percurso sistêmico relacionado |

## Referências

[^1]: Brady, William J.; McLoughlin, Killian L.; Torres, Mark P.; Luo, Kara F.; Gendron, Maria; Crockett, M. J. “Overperception of moral outrage in online social networks inflates beliefs about intergroup hostility.” *Nature Human Behaviour*, 7, 2023, pp. 917–927. [Acessar artigo na Nature](https://www.nature.com/articles/s41562-023-01582-0). DOI: `10.1038/s41562-023-01582-0`.

[^2]: Lees, Jeffrey; Cikara, Mina. “Inaccurate group meta-perceptions drive negative out-group attributions in competitive contexts.” *Nature Human Behaviour*, 4, 2020, pp. 279–286. [Acessar artigo na Nature](https://www.nature.com/articles/s41562-019-0766-4). DOI: `10.1038/s41562-019-0766-4`.

[^3]: Moore-Berg, Samantha L.; Ankori-Karlinsky, Lee-Or; Hameiri, Boaz; Bruneau, Emile. “Exaggerated meta-perceptions predict intergroup hostility between American political partisans.” *Proceedings of the National Academy of Sciences*, 117(26), 2020, pp. 14864–14872. [Acessar artigo em acesso aberto (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7334646/). DOI: `10.1073/pnas.2001263117`.

[^4]: Lees, Jeffrey; Cikara, Mina; Druckman, James N. “Why partisans feel hated: Distinct static and dynamic relationships with animosity meta-perceptions.” *PNAS Nexus*, 3(10), 2024, pgae324. [Acessar artigo em acesso aberto (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11475464/). DOI: `10.1093/pnasnexus/pgae324`.

[^5]: Brady, William J.; Doyle, Meriel; Elnakouri, Abdo; et al. “Redesigning algorithms to intervene on social norm misperceptions during a national election.” *Nature*, 655, 2026, pp. 942–956. [Acessar artigo na Nature](https://www.nature.com/articles/s41586-026-10536-1). DOI: `10.1038/s41586-026-10536-1`.

> “Normatividade percebida da hostilidade” é uma adaptação operacional deste projeto. A literatura fornece construtos consolidados de normas sociais, meta-percepções, animosidade percebida e superpercepção de indignação; o eixo os aproxima para comparar como artefatos e sistemas fazem hostilidade parecer excepcional ou normal.

[^6]: Noelle-Neumann, Elisabeth. “The Spiral of Silence: A Theory of Public Opinion”. *Journal of Communication*, 24(2), 1974, pp. 43–51. https://doi.org/10.1111/j.1460-2466.1974.tb00367.x
