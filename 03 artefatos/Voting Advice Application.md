---
title: "Voting Advice Application"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - politica
  - interface
---

# Voting Advice Application

Uma pessoa pode chegar a uma eleição sabendo que se importa profundamente com algumas questões e, ainda assim, não saber como transformar isso numa escolha entre partidos ou candidatos. Programas são longos, propostas usam vocabulários diferentes, partidos enfatizam temas distintos e a própria ideia de “quem combina comigo?” exige comparar posições que raramente chegam organizadas da mesma maneira.

A **Voting Advice Application (VAA)** resolve esse problema criando uma gramática de comparação. O eleitor responde a uma série de afirmações políticas; partidos ou candidatos respondem às mesmas afirmações; um método calcula proximidade e devolve uma lista, mapa ou percentual de compatibilidade.[^1]

Essa aparente simplicidade esconde uma decisão de design decisiva: **antes de o eleitor responder, alguém já decidiu quais perguntas existirão, como serão formuladas, que respostas são possíveis e como diferenças serão transformadas em distância política**.

Por isso a VAA é um caso especialmente fértil para [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]]. Ela não entrega a mesma conclusão para todos. Entrega uma estrutura estável capaz de produzir recomendações diferentes a partir das respostas de cada pessoa. Mas o usuário costuma participar como variável dentro da gramática, e não como autor da gramática.

A pergunta arqueológica central deste estudo é:

**o que muda quando uma decisão de voto passa a ser produzida por uma estrutura de perguntas e correspondências — e o que ainda permanece decidido antes de o eleitor chegar?**

## De livreto educativo a máquina de correspondência

A literatura sobre VAAs costuma apontar o holandês StemWijzer como um dos primeiros casos desse tipo. A versão de 1989 era um livreto em papel voltado inicialmente à educação eleitoral: ele reunia citações de programas partidários e uma tabela de pontos pela qual o próprio usuário calculava afinidade. A ProDemos registra que o sistema passou por uma versão em disquete em 1991 e ganhou versão online em 1998; com a internet, seu uso cresceu de milhares para milhões de consultas.[^2]

Esse movimento importa porque a inovação não está apenas em digitalizar um questionário. A interface passa a automatizar um trabalho comparativo que antes exigia ler programas, lembrar posições, estabelecer equivalências e fazer contas.

A forma contemporânea tornou-se relativamente reconhecível:

**afirmações selecionadas → respostas do eleitor → posições de partidos/candidatos → pesos → algoritmo de correspondência → resultado**

StemWijzer, Wahl-O-Mat e smartvote pertencem a variações dessa família. Ferramentas recentes também usam o mesmo princípio em outros países. No Brasil, por exemplo, o Match Eleitoral da Folha/Datafolha em 2026 comparou respostas de eleitores e candidatos a 22 perguntas e permitiu que o eleitor atribuísse importância aos temas para ponderar a afinidade.[^3]

A popularização transforma um problema político em um problema de interface: “como escolher?” passa a poder ser respondido por “responda estas questões e compare seu perfil”.

## A neutralidade aparente depende de decisões anteriores

Uma VAA costuma parecer uma máquina que apenas mede diferenças já existentes. A literatura mostra que seu resultado depende materialmente das decisões de design incorporadas ao instrumento.

Garzia e Marschall resumem algumas dessas escolhas: selecionar e formular afirmações, determinar posições partidárias, escolher o algoritmo que calcula proximidade e decidir como o resultado será exibido.[^4] Lefevere e Walgrave mostraram que a seleção das afirmações pode alterar sistematicamente a capacidade de uma VAA aproximar eleitores e partidos.[^5]

Louwerse e Rosema foram ainda mais diretamente ao mecanismo de recomendação. Usando respostas reais de usuários do StemWijzer, compararam diferentes modelos espaciais e métricas de distância. A conclusão foi forte: para uma maioria dos usuários, outro método de cálculo produziria outro “melhor match”.[^6]

Isso revela uma propriedade importante do artefato. A recomendação parece pessoal porque depende das respostas do eleitor, mas sua forma final também depende de uma série de escolhas invisíveis ou pouco salientes feitas por quem desenhou a ferramenta.

A gramática, portanto, exerce poder antes da participação:

**ela decide quais diferenças políticas serão comparáveis e como essas diferenças poderão virar resultado.**

## O eleitor pode pesar, mas normalmente não escolhe o universo da pergunta

VAAs contemporâneas frequentemente oferecem algum grau de personalização. O StemWijzer permite marcar certas afirmações como mais importantes; essas respostas recebem peso dobrado no cálculo.[^7] Metodologias do smartvote também permitem ponderação das respostas do eleitor, com pesos diferentes para questões consideradas mais ou menos importantes.[^8]

Essa operação aumenta a participação da pessoa, mas dentro de um espaço já definido.

O eleitor pode dizer:

> isto importa mais para mim.

Mas normalmente não pode começar por:

> isto é o que eu realmente preciso descobrir para decidir meu voto.

Essa diferença é central para [[02 variaveis/Agencia Inferencial|Agência inferencial]]. Numa VAA convencional, o eleitor fornece respostas e talvez pesos, enquanto a estrutura define perguntas e produz a correspondência. Há participação substantiva, mas a gramática continua predominantemente externa.

A ferramenta pode, por exemplo, conter dez questões sobre economia e apenas uma sobre política cultural. Mesmo que o usuário dê peso máximo à questão cultural, ele continua operando dentro de uma representação do campo político previamente editada.

É aqui que a VAA revela um princípio mais amplo das [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]]:

**produzir dentro de uma gramática e poder alterar a gramática são formas diferentes de agência.**

## E se a decisão começar pela questão do eleitor?

A hipótese experimental deste projeto é inverter a ordem convencional.

Uma VAA tradicional começa com:

**perguntas da ferramenta → respostas do eleitor → recomendação**

Uma **VAA orientada por questão do eleitor** começaria com:

**questão individual → decomposição em critérios → evidências verificáveis → comparação entre candidatos → contradições e incertezas → conclusão provisória**

A questão pode ser alimentada por artefatos experimentais do projeto. A [[03 artefatos/Biografia política|Biografia política]] produz critérios a partir de experiências e mediações públicas reconstruídas; o [[03 artefatos/Mapa pessoal de valores políticos|Mapa pessoal de valores políticos]] explicita prioridades e conflitos; o [[03 artefatos/Jobs to Be Done eleitoral|Jobs to Be Done eleitoral]] transforma esse material numa formulação de progresso relativamente independente da solução. Depois da comparação, o [[03 artefatos/Teste de simetria eleitoral|Teste de simetria eleitoral]] pode funcionar como contraprova sobre critérios aplicados de modo diferente conforme a identidade do candidato.

Imagine alguém chegando com:

> Qual candidato tem uma trajetória e propostas mais coerentes com a defesa da universidade pública?

A gramática não deveria responder imediatamente com um nome.

Primeiro, precisaria transformar a pergunta em dimensões examináveis. “Defesa da universidade pública” pode significar financiamento, expansão de vagas, permanência estudantil, autonomia universitária, pesquisa, políticas de acesso ou outras dimensões. O sistema precisaria tornar essa decomposição visível e permitir que o eleitor corrija, remova ou acrescente critérios.

A sequência poderia ser:

**1. questão pessoal**  
O que exatamente você quer descobrir antes de votar?

**2. desambiguação**  
O que essa questão significa para você? Que aspectos são indispensáveis e quais são secundários?

**3. critérios editáveis**  
Que dimensões permitiriam comparar candidatos de modo verificável?

**4. pesos opcionais**  
Quais critérios importam mais para sua decisão?

**5. evidências**  
Que dados, propostas, histórico de votações, ações anteriores ou documentos sustentam a posição atribuída a cada candidato?

**6. comparação**  
Onde há convergência, divergência, ausência de informação e contradição?

**7. contraprova**  
Que evidência poderia mudar a classificação produzida?

**8. conclusão provisória**  
Diante dos critérios escolhidos por você, qual candidato parece mais próximo — e onde a incerteza permanece?

Nesse modelo, a gramática começa pela intenção do eleitor e produz a estrutura de comparação depois. A interface continua exercendo poder, porque precisa sugerir maneiras de decompor a pergunta, selecionar fontes e representar evidências. A diferença é que essas operações ficam mais visíveis e editáveis.

A hipótese do projeto é que essa inversão poderia aumentar [[02 variaveis/Agencia Inferencial|Agência inferencial]] e, em perguntas ligadas à própria trajetória, [[02 variaveis/Legibilidade da Mediacao Politica|Legibilidade da mediação política]]. Isso não implica melhor decisão automaticamente. Uma questão pessoal pode ser estreita, enviesada ou baseada numa premissa falsa. A gramática precisa ser capaz de contrariar a própria pergunta quando a evidência exigir.

## A gramática precisa conseguir dizer “sua pergunta está incompleta”

Uma ferramenta orientada pelo eleitor corre um risco oposto ao da VAA convencional.

Na VAA tradicional, a instituição pode escolher demais. Na versão orientada por questão, a pessoa pode escolher pouco demais.

Alguém pode perguntar:

> Quem vai reduzir meus impostos?

e excluir de saída efeitos distributivos, serviços financiados por esses impostos, viabilidade fiscal ou competências reais do cargo.

Uma gramática produtiva responsável não deveria simplesmente otimizar a pergunta inicial. Ela precisaria tratá-la como hipótese de investigação.

Isso aproxima a VAA orientada por questão da ideia de **gramática verificável** preservada em [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]]. A estrutura deveria ser capaz de perguntar:

- essa questão depende de uma premissa factual?
- o cargo disputado tem poder para decidir isso?
- quais critérios relevantes estão ausentes?
- quais fontes discordam?
- que evidência poderia inverter a conclusão?
- quais dimensões você deliberadamente decidiu não considerar?

A produtividade da gramática estaria em transformar uma vontade inicialmente vaga em um processo comparativo explícito e revisável.

## A recomendação pode esconder ou revelar sua própria fabricação

A tela final de uma VAA também é uma decisão de design. Um percentual como “87% de compatibilidade” pode parecer uma propriedade natural da relação entre eleitor e candidato, embora seja resultado de escolhas sobre perguntas, pesos, escalas e cálculo.

Uma interface mais auditável poderia mostrar a genealogia do resultado:

**sua pergunta → critérios escolhidos → pesos → evidências → posições atribuídas → método de comparação → resultado**

Essa cadeia torna a recomendação menos mágica e mais contestável.

É aqui que a VAA se torna parente de [[01 conceitos/Investigação|Investigação]]. O objetivo deixa de ser apenas produzir uma resposta rápida e passa a incluir a capacidade de reconstruir por que aquela resposta apareceu.

Isso também conecta o artefato à [[02 variaveis/Reversibilidade representacional|Reversibilidade representacional]]. Uma boa ferramenta deveria permitir que informação nova alterasse a representação de um candidato sem exigir começar toda a decisão do zero.

A pergunta final deixa então de ser “qual candidato combina comigo?” e se torna mais exigente:

**qual estrutura de comparação estou usando para decidir — e eu consigo enxergar, modificar e contestar essa estrutura enquanto ela produz minha escolha?**

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Voting Advice Application |
| **Período** | Desde 1989 em versões em papel; expansão digital a partir do fim dos anos 1990 |
| **Autoria** | Desenvolvimento distribuído; StemWijzer/ProDemos é um antecedente central da forma moderna |
| **Produto ou contexto** | StemWijzer, Wahl-O-Mat, smartvote, VoteMatch e outros sistemas de aconselhamento eleitoral |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]], [[00 tipos de design/Design de Servicos|Design de serviços]] |
| **Empresas ou instituições relacionadas** | ProDemos e outras organizações eleitorais, jornalísticas, acadêmicas e cívicas que operam VAAs |
| **Problema original** | Reduzir o esforço necessário para comparar posições do eleitor com partidos ou candidatos |
| **Mundo antes** | Leitura direta de programas, materiais partidários, imprensa, debates, recomendações sociais e comparação manual |
| **Invenção** | Primeiros testes estruturados de afinidade eleitoral em papel; StemWijzer de 1989 é um caso documentado central |
| **Refinamento** | Digitalização, ponderação por importância, visualizações, perfis multidimensionais, candidatos individuais e questionários adaptativos |
| **Popularização** | Crescimento de VAAs online em sistemas multipartidários europeus e posterior difusão internacional |
| **Padronização** | Questionário comum + posições de partidos/candidatos + método de correspondência + resultado personalizado |
| **Hipótese de design** | Uma escolha eleitoral complexa pode ser parcialmente reorganizada como comparação estruturada entre posições declaradas |
| **Promessa** | Tornar diferenças políticas comparáveis e reduzir custo de descobrir quem está mais próximo das posições do eleitor |
| **Comportamento aproveitado** | Capacidade de responder a questões específicas com mais facilidade do que comparar programas políticos inteiros |
| **Comportamento produzido** | Construir perfil político por respostas estruturadas, atribuir pesos e interpretar proximidade como apoio à decisão |
| **Relação de poder** | Quem define perguntas, formulações, posições e algoritmo define parte do espaço em que a preferência do eleitor poderá aparecer |
| **Consequências inesperadas** | Aparência de objetividade matemática, dependência do conjunto de questões, sensibilidade ao algoritmo e possível compressão de conflitos políticos complexos em percentuais Registros adicionais preservados da ficha anterior: promessa: Tornar diferenças políticas comparáveis e reduzir custo de descobrir quem está mais próximo das posições do eleitor; futuro prometido: Eleitor capaz de navegar uma eleição complexa com apoio comparativo personalizado; futuro produzido: Recomendação política passa a poder ser mediada por instrumentos cujo enquadramento e algoritmo também se tornam parte da escolha; quando a promessa virou expectativa: Processo gradual com a popularização das VAAs online; varia por país e sistema eleitoral; futuro tornado mais provavel: Ferramentas eleitorais cada vez mais personalizadas, conversacionais e algorítmicas; descendentes possiveis: Questionários adaptativos e hipótese de VAA orientada por questão individual; vínculos históricos específicos ainda precisam ser demonstrados; novo problema produzido pelo sucesso: Quanto mais fácil aceitar uma recomendação, mais importante se torna tornar visíveis as escolhas que produziram essa recomendação |
| **Destino ou transformação posterior** | VAAs baseadas em candidatos, questionários adaptativos e propostas recentes de sistemas apoiados por IA |
| **Futuro prometido** | Eleitor capaz de navegar uma eleição complexa com apoio comparativo personalizado |
| **Futuro produzido** | Recomendação política passa a poder ser mediada por instrumentos cujo enquadramento e algoritmo também se tornam parte da escolha |
| **Quando a promessa virou expectativa** | Processo gradual com a popularização das VAAs online; varia por país e sistema eleitoral |
| **Futuro tornado mais provável** | Ferramentas eleitorais cada vez mais personalizadas, conversacionais e algorítmicas |
| **Descendentes possíveis** | Questionários adaptativos e hipótese de VAA orientada por questão individual; vínculos históricos específicos ainda precisam ser demonstrados |
| **Novo problema produzido pelo sucesso** | Quanto mais fácil aceitar uma recomendação, mais importante se torna tornar visíveis as escolhas que produziram essa recomendação |
| **Conceitos relacionados** | [[01 conceitos/Design do Voto|Design do voto]], [[01 conceitos/Investigação|Investigação]] |
| **Variáveis relacionadas** | [[02 variaveis/Agencia Inferencial|Agência inferencial]], [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Atrito Decisorio|Atrito decisório]], [[02 variaveis/Legibilidade da Mediacao Politica|Legibilidade da mediação política]], [[02 variaveis/Reversibilidade representacional|Reversibilidade representacional]] |
| **Genealogia** | [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]] |
| **Percurso(s)** | Ainda não integrado a percurso específico |
| **Parentes** | [[03 artefatos/Biografia política|Biografia política]], [[03 artefatos/Mapa pessoal de valores políticos|Mapa pessoal de valores políticos]], [[03 artefatos/Jobs to Be Done eleitoral|Jobs to Be Done eleitoral]], [[03 artefatos/Teste de simetria eleitoral|Teste de simetria eleitoral]], [[03 artefatos/Pergunta|Pergunta]], [[03 artefatos/Pesquisa Quantitativa|Pesquisa quantitativa]], [[03 artefatos/Prompt Conversacional|Prompt conversacional]] como hipótese para variantes conversacionais |
| **Leituras-chave** | Louwerse & Rosema (2014); Garzia & Marschall (2014/2016); Lefevere & Walgrave (2014) |
| **Princípio de design revelado** | Personalizar uma conclusão não significa personalizar a gramática que a produz |
| **Questão em aberto** | O que acontece quando o eleitor deixa de apenas responder ao questionário e passa a participar da definição da própria estrutura de comparação? |

## Referências

[^1]: Garzia, Diego; Marschall, Stefan. “The design, purpose, and effects of voting advice applications.” *Electoral Studies*, 36, 2014, pp. 227–229. https://doi.org/10.1016/j.electstud.2014.08.002

[^2]: ProDemos. “Over StemWijzer.” Registra a criação do StemWijzer em 1989 como livreto, versão em disquete em 1991 e expansão online posterior. https://source.stemwijzer.nl/over-stemwijzer/

[^3]: Folha de S.Paulo / Datafolha. “Entenda a metodologia e como são utilizados os dados do Match Eleitoral.” 30 set. 2026. O sistema usa 22 questões e ponderação pela importância atribuída pelo eleitor. https://www1.folha.uol.com.br/poder/2026/09/entenda-a-metodologia-e-como-sao-utilizados-os-dados-do-match-eleitoral.shtml

[^4]: Garzia, Diego; Marschall, Stefan. “Research on Voting Advice Applications: State of the Art and Future Directions.” *Policy & Internet*, 8(4), 2016, pp. 376–390. https://doi.org/10.1002/poi3.140

[^5]: Lefevere, Jonas; Walgrave, Stefaan. “A perfect match? The impact of statement selection on voting advice applications' ability to match voters and parties.” *Electoral Studies*, 36, 2014, pp. 252–262. https://doi.org/10.1016/j.electstud.2014.04.002

[^6]: Louwerse, Tom; Rosema, Martin. “The design effects of voting advice applications: Comparing methods of calculating matches.” *Acta Politica*, 49(3), 2014, pp. 286–312. https://doi.org/10.1057/ap.2013.30

[^7]: StemWijzer. “Veelgestelde vragen.” A metodologia atual permite atribuir peso extra a afirmações consideradas importantes pelo usuário. https://source.stemwijzer.nl/faq/

[^8]: smartvote. *Positional matching methodology*. A metodologia permite pesos de 2, 1 ou 0,5 para respostas consideradas mais, normalmente ou menos importantes pelo eleitor. https://aus-candidate-test.smartvote.ch/assets/pdf/Positional_matching_methodology.pdf
