---
title: "Justificativa de valor público"
type: "artefato"
status: "publicado"
estado: "proposta conceitual"
tags:
  - design/artefato
  - arqueologia
---

# Justificativa de valor público

No serviço público, uma demanda pode parecer institucional simplesmente porque foi formulada dentro de uma instituição.

“Precisamos de um novo sistema”, “este setor precisa de uma funcionalidade própria”, “vamos contratar uma solução para automatizar este fluxo”. A linguagem administrativa tende a transformar desejos localizados em necessidades aparentemente objetivas. O custo, porém, é coletivo: orçamento, manutenção, tempo de servidores, integração técnica e complexidade futura continuam existindo mesmo quando o benefício permanece restrito a uma conveniência particular.

A **Justificativa de valor público** é uma proposta de artefato de governança concebida neste projeto em 2026 para criar fricção exatamente nesse ponto. Sua pergunta central é simples: **antes de mobilizar recursos públicos, conseguimos explicar de forma clara, examinável e posteriormente verificável qual valor público esperamos produzir?**

Ela ainda deve ser entendida como proposta conceitual. O vault não possui evidência de institucionalização formal ou implantação do artefato no IFMG, e por isso o estudo não deve apresentá-lo como prática já adotada pela instituição.

## Da proposta de valor à obrigação de justificar

A origem imediata da ideia está no [[03 artefatos/Value Proposition Ad Lib|Value Proposition Ad Lib]]. O Ad Lib comprime público, necessidade e transformação numa frase estruturada, obrigando uma proposta a revelar relações que poderiam permanecer implícitas.

A adaptação para o serviço público muda, porém, o critério de legitimidade. Uma empresa pode avaliar uma proposta pela combinação entre benefício ao cliente e sustentabilidade do negócio. Uma instituição pública precisa lidar também com interesse público, legalidade, distribuição de custos, transparência e possibilidade de controle.

A expressão “valor público” possui uma tradição própria na administração pública. Em *Creating Public Value*, de 1995, Mark H. Moore propõe pensar a gestão pública em torno daquilo que é valioso produzir para a sociedade, da legitimidade e apoio necessários para agir e da capacidade operacional para realizar essa produção.[^1]

A Justificativa de valor público não é uma aplicação oficial do modelo de Moore. Ela aproxima essa tradição de uma ferramenta de formulação do design: tenta transformar uma justificativa abstrata em um artefato pequeno o suficiente para entrar no fluxo administrativo.

Também existe um parentesco com o dever jurídico de motivação. A Lei nº 9.784/1999 determina que determinados atos administrativos federais sejam motivados com indicação de fatos e fundamentos jurídicos e exige, nesses casos, motivação explícita, clara e congruente.[^2] Isso não significa que a lei imponha esta ferramenta ou que todo projeto público deva legalmente preencher sua estrutura. O parentesco está na ideia de que decisões públicas importantes não deveriam depender apenas de vontade não explicitada.

## Cinco perguntas antes de transformar desejo em infraestrutura

A versão proposta neste projeto organiza a justificativa em cinco camadas.

A primeira é **origem**: de onde veio a demanda e quem a formulou? Isso impede que “a instituição precisa” esconda o ator concreto que identificou a necessidade.

A segunda é **problema**: que situação observável justifica intervenção, para quem e com que evidência? Aqui a ferramenta herda a preocupação do [[03 artefatos/Problema de Design|problema de design]] e da [[03 artefatos/Pergunta de Pesquisa|pergunta de pesquisa]]: separar situação de solução presumida.

A terceira é **alternativas**: que outras formas de responder ao problema foram consideradas, inclusive não fazer nada, alterar processo, reutilizar infraestrutura existente ou mudar comunicação? Uma solução só parece inevitável quando alternativas permanecem invisíveis.

A quarta é **custos e interesse público**: quem recebe o benefício e quem absorve custo, manutenção, risco ou complexidade? Essa camada tenta impedir que conveniência localizada seja financiada como se fosse valor universal.

A quinta é **verificação**: que sinais posteriores mostrariam que a intervenção produziu aquilo que prometeu, e em que condições ela deveria ser revista ou interrompida?

A sequência importa porque transforma a justificativa em memória da decisão. Meses depois, torna-se possível comparar promessa e resultado em vez de reconstruir retrospectivamente por que o projeto existia.

## Governança como serviço de reflexão

A Lei nº 14.129/2021 ajuda a mostrar por que essa proposta faz sentido no contexto do governo digital. Entre seus princípios e diretrizes estão transparência na execução dos serviços públicos, monitoramento da qualidade, participação social no controle, prestação de contas sobre recursos públicos, linguagem clara, simplificação de procedimentos, atuação integrada e uso de dados e evidências para melhorar serviços.[^3]

A Justificativa de valor público tenta condensar parte desse espírito numa decisão concreta de projeto.

Ela funciona como aquilo que este vault chama de [[01 conceitos/Servico de Reflexao|serviço de reflexão]]: um ponto do processo desenhado para fazer a própria organização examinar a coerência de sua intenção antes de avançar.

Por isso a participação conjunta de áreas como TI, Comunicação e área demandante é uma hipótese importante do artefato. TI consegue tornar visíveis custo técnico, interoperabilidade, manutenção e redundância. Comunicação pode examinar clareza, acesso, experiência e relação com públicos. A área de negócio traz conhecimento do problema operacional.

Mas isso não significa que a proposta deva criar uma “comissão de verdade” com poder absoluto para decidir o que conta como valor público. Esse seria um risco de governança tão relevante quanto a arbitrariedade que o artefato tenta reduzir.

A ferramenta deveria aumentar **contestabilidade**, não apenas transferir discricionariedade de uma chefia para outro grupo técnico.

## A barreira que também pode virar burocracia

Toda exigência de justificativa produz custo.

Se cada mudança pequena exigir um documento extenso, a ferramenta pode entrar em conflito com o próprio princípio de simplificação administrativa. A Lei de Governo Digital chega a prever a eliminação de formalidades cujo custo econômico ou social seja superior ao risco envolvido.[^3]

Essa tensão precisa permanecer no centro do design.

A Justificativa de valor público só faz sentido quando o custo da reflexão é proporcional ao custo e à irreversibilidade da decisão. Uma pequena alteração editorial não deveria receber a mesma carga que a aquisição de um novo sistema, a criação de uma base de dados ou uma mudança que afetará milhares de usuários.

Existe ainda o risco de preenchimento performativo. Equipes podem aprender a escrever frases como “otimizar recursos”, “melhorar a experiência” e “promover eficiência” sem produzir qualquer evidência nova. A forma documental começa a funcionar como selo de legitimidade em vez de instrumento de investigação.

O [[03 artefatos/Carimbo|carimbo]] é um parente irônico aqui: uma justificativa criada para impedir aprovação automática pode, depois de institucionalizada, transformar-se exatamente no novo carimbo necessário para o processo continuar.

Por isso a camada de verificação é decisiva. Se a justificativa nunca for retomada depois da implantação, ela recompensa escrita persuasiva, não aprendizagem.

## Tornar decisões legíveis no tempo

O ganho mais interessante da proposta talvez não seja impedir projetos ruins imediatamente. É criar **memória epistemológica**.

Uma decisão administrativa costuma deixar rastros de quem autorizou, quando ocorreu e quanto custou. Nem sempre preserva com a mesma clareza aquilo que se acreditava sobre o problema e por que determinada alternativa parecia produzir valor.

A justificativa tenta registrar esse estado de conhecimento.

Isso a aproxima do [[03 artefatos/Número de Protocolo|número de protocolo]], que estabiliza a identidade de uma demanda, e da [[03 artefatos/Assinatura|assinatura]], que liga pessoas a atos. A Justificativa acrescentaria outra camada: tornar legível a **razão operacional e pública** apresentada para o ato.

Seu descendente mais importante talvez seja o próprio mecanismo de revisão. Se critérios registrados no início forem comparados com uso, custo e benefício posteriores, a organização ganha condições de interromper sistemas que deixaram de produzir valor ou de reconhecer quando hipóteses iniciais estavam erradas.

A hipótese deste projeto é que a legitimidade de decisões de design no setor público aumenta quando suas premissas podem ser compreendidas, contestadas e revisitadas por pessoas que não participaram da decisão original.

Nesse sentido, justificabilidade não é sinônimo de produzir mais documentos. É projetar decisões para que continuem explicáveis depois que seus autores saírem da sala.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Justificativa de valor público |
| **Período** | Proposta concebida em 2026 no contexto deste projeto |
| **Autoria** | Leo Ruas, como formulação desenvolvida no projeto Arqueologia do Design |
| **Produto ou contexto** | Não explicitado na ficha anterior. |
| **Problema original** | Demandas localizadas podem mobilizar recursos coletivos sem explicitar adequadamente problema, alternativas, benefício público, custos e critérios de continuidade |
| **Mundo antes** | Não explicitado na ficha anterior. |
| **Invenção** | Adaptação proposta a partir do Value Proposition Ad Lib para governança de decisões públicas |
| **Refinamento** | Estrutura em cinco camadas: origem, problema, alternativas, custos/interesse público e verificação |
| **Popularização** | Ainda não aplicável; artefato em formulação |
| **Padronização** | Ainda não aplicável |
| **Hipótese de design** | Uma justificativa curta, estruturada e verificável pode tornar decisões públicas mais legíveis e contestáveis antes de recursos serem comprometidos |
| **Comportamento aproveitado** | Necessidade institucional e jurídica de justificar decisões, além da capacidade de revisar argumentos quando premissas ficam explícitas |
| **Comportamento produzido** | Investigar a demanda antes da solução, comparar alternativas e registrar condições de avaliação posterior |
| **Relação de poder** | Reduz a força de demandas sustentadas apenas por autoridade, mas pode criar nova concentração de poder se a avaliação ficar monopolizada por uma instância técnica |
| **Consequências inesperadas** | Custo invisível: Nova carga burocrática, preenchimento performativo e paralisia quando exigências são desproporcionais ao risco da decisão Registros adicionais preservados da ficha anterior: estado: Proposta conceitual; não há no vault evidência de institucionalização formal no IFMG |
| **Destino ou transformação posterior** | Não explicitado na ficha anterior. |
| **Conceitos relacionados** | [[01 conceitos/Formulacao|Formulação]], [[01 conceitos/Justificabilidade|Justificabilidade]], [[01 conceitos/Intencao|Intenção]], [[01 conceitos/Justica Procedimental|Justiça procedimental]], [[01 conceitos/Servico de Reflexao|Serviço de reflexão]] |
| **Variáveis relacionadas** | Não explicitado na ficha anterior. |
| **Genealogia** | Família de ideias: Artefatos de justificabilidade, governança e legibilidade decisória |
| **Parentes** | [[03 artefatos/Value Proposition Ad Lib|Value Proposition Ad Lib]], [[03 artefatos/Problema de Design|Problema de design]], [[03 artefatos/Projeto Piloto|Projeto piloto]], [[03 artefatos/Número de Protocolo|Número de protocolo]], [[03 artefatos/Carimbo|Carimbo]] |
| **Princípio de design revelado** | Não explicitado na ficha anterior. |
| **Questão em aberto** | Como tornar a justificativa proporcional ao risco e ao custo da decisão para que ela produza reflexão sem virar mais um rito administrativo? |

## Referências

[^1]: Moore, Mark H. *Creating Public Value: Strategic Management in Government*. Harvard University Press, 1995. Referência para a tradição de gestão pública orientada à produção de valor público, legitimidade e capacidade operacional.

[^2]: Brasil. Lei nº 9.784, de 29 de janeiro de 1999, art. 50. Regula o processo administrativo federal e exige motivação com indicação de fatos e fundamentos jurídicos nas hipóteses previstas em lei, de forma explícita, clara e congruente.

[^3]: Brasil. Lei nº 14.129, de 29 de março de 2021, especialmente arts. 1º e 3º. Estabelece princípios e diretrizes de Governo Digital relacionados a simplificação, transparência, monitoramento de qualidade, participação social, prestação de contas, linguagem clara, integração e uso de tecnologia e evidências.

[^4]: Osterwalder, Alexander; Pigneur, Yves; Bernarda, Greg; Smith, Alan. *Value Proposition Design*. Wiley, 2014. Referência para o Value Proposition Ad Lib que inspira a estrutura de formulação adaptada neste projeto.