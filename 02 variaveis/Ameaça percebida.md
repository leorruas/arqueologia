---
title: "Ameaça percebida"
type: "variavel"
status: "publicado"
eixo: "baixa ↔ alta ameaça percebida"
tags:
  - design/variavel
  - arqueologia
  - politica
  - relacoes-intergrupais
---

# Ameaça percebida

Duas pessoas podem discordar intensamente e ainda perceber a outra apenas como adversária. A relação muda quando uma delas passa a acreditar que o outro grupo ameaça sua segurança, seus recursos, seus valores, sua identidade ou a continuidade de seu modo de vida.

**Ameaça percebida** mede quanto uma pessoa ou grupo é interpretado como capaz de produzir dano relevante ao indivíduo ou ao grupo de pertencimento. A variável possui base consolidada na literatura de relações intergrupais. Seu uso neste vault acrescenta uma pergunta de design: **que decisões de representação, seleção, enquadramento, repetição e interação aumentam ou reduzem a percepção de ameaça?**

**Eixo:** baixa ameaça percebida ↔ alta ameaça percebida.

O eixo só é útil quando o objeto da ameaça é explicitado. “Alta ameaça” pode significar risco percebido à segurança física, ao poder político, aos recursos econômicos, aos valores, à identidade, à reputação ou ao modo de vida. Esses domínios não devem ser fundidos numa medida única sem justificativa.

## A ameaça pode ser material, simbólica, individual ou coletiva

A teoria de ameaça intergrupal distingue duas dimensões principais.[^1] A primeira separa **ameaças realistas**, ligadas a danos tangíveis como perda de recursos, poder, território, segurança ou bem-estar, de **ameaças simbólicas**, ligadas a valores, crenças, normas, identidade, moralidade e visão de mundo. A segunda pergunta quem é percebido como ameaçado: o indivíduo ou o grupo ao qual ele pertence.

Essa estrutura permite quatro combinações. Uma pessoa pode temer perda econômica própria, interpretar uma mudança política como ameaça ao poder de seu grupo, sentir que seus valores estão sendo deslegitimados ou perceber que sua identidade pessoal está sendo atacada. As respostas emocionais e comportamentais podem variar conforme o tipo de ameaça; por isso, o campo deve ser registrado sempre que a variável for usada.

O termo “realista” na literatura não significa que a ameaça esteja objetivamente comprovada. Ele descreve o **tipo de dano percebido**. A própria teoria enfatiza que ameaças incorretamente percebidas podem produzir consequências reais.[^1] Essa distinção é central para o design: um artefato pode alterar percepção de risco sem alterar o risco objetivo.

Experimentos anteriores já mostraram que manipular informação sobre ameaças realistas e simbólicas pode alterar atitudes intergrupais. Stephan e colegas, por exemplo, encontraram atitudes mais negativas diante de grupos de imigrantes quando eram apresentados como fonte de ameaça realista, simbólica ou de ambas as formas.[^2] Isso não significa que qualquer mensagem de ameaça produza automaticamente hostilidade; mostra que a percepção de dano potencial é uma dimensão causalmente relevante em determinados contextos.

## Quando discordância vira perigo

Dentro de [[01 conceitos/Design da aversão|Design da aversão]], a ameaça percebida ajuda a distinguir camadas que antes podiam aparecer misturadas. Rejeitar um grupo por antipatia, manter distância social e percebê-lo como perigoso são estados diferentes. A percepção de ameaça pode tornar a aversão mais resistente porque a aproximação deixa de parecer apenas desagradável e passa a parecer arriscada.

Essa relação aparece em evidência recente para América Latina. Gomez, Olivas Osuna e Ramiro analisaram dados originais de Argentina e Brasil e encontraram associação significativa entre percepções de ameaça e [[02 variaveis/Distância social|distância social]] em relação a apoiadores do campo político adversário nos dois países.[^3] O estudo examinou múltiplos domínios, incluindo ameaças atribuídas ao campo rival, a outros grupos sociais e a valores simbólicos como igualdade e nação. Os padrões variaram entre campos políticos e entre os dois países, o que reforça a necessidade de especificar **qual ameaça, percebida por quem e contra qual objeto**.

O achado é particularmente útil para este projeto porque impede tratar “polarização” como uma variável única. Uma intervenção pode reduzir antipatia sem reduzir ameaça percebida; pode reduzir ameaça simbólica sem alterar medo de perda material; pode aumentar confiança numa interação específica sem alterar a avaliação de risco associada ao grupo inteiro.

## Artefatos podem funcionar como detectores, amplificadores ou redutores de ameaça

Um artefato político não precisa dizer literalmente “isso é uma ameaça” para participar dessa percepção. Seleção de exemplos, repetição de episódios, associação visual, enquadramento causal e escolha de linguagem podem tornar certos danos mais imagináveis, salientes ou próximos.

O [[03 artefatos/Clip político|clip político]] pode selecionar um fragmento em que uma fala ou ação pareça evidenciar risco e fazê-lo circular como resumo de uma pessoa ou grupo. O [[03 artefatos/Apelido político|apelido político]] pode condensar uma interpretação ameaçadora num identificador repetível. O [[03 artefatos/Meme|meme]] pode tornar uma associação entre grupo e perigo fácil de reconhecer, modificar e retransmitir. Esses artefatos não aumentam ameaça percebida por natureza; a variável exige observar que conteúdo foi selecionado e como a relação causal foi construída.

A operação inversa também é possível. O [[03 artefatos/Tango|Tango]] cria uma situação cooperativa em que a pessoa inicialmente categorizada como adversária precisa agir como parceira. A literatura de contato mostra que condições de interação podem alterar percepções e respostas emocionais entre grupos, embora os efeitos dependam do contexto e nem sempre persistam.[^4] Nesse sentido, uma experiência concreta pode produzir evidência incompatível com uma expectativa de ameaça, mas não há garantia de generalização para o grupo inteiro.

A arquitetura de exposição adiciona outra camada. Quando sistemas de recomendação ou curadoria tornam episódios hostis desproporcionalmente visíveis, o usuário pode inferir que comportamentos extremos são mais comuns do que realmente são. Nesse caso, o design atua sobre a **disponibilidade de evidência de ameaça**. A relação causal entre exposição, frequência percebida e ameaça precisa ser demonstrada em cada sistema, mas a variável ajuda a formular a pergunta.

## Como observar sem confundir percepção com risco objetivo

Uma medida de ameaça percebida deve explicitar o domínio. Perguntas podem avaliar quanto um grupo parece ameaçar segurança física, renda, recursos, poder político, direitos, valores, identidade, tradições ou modo de vida. Também é preciso separar ameaça ao próprio respondente de ameaça percebida ao grupo de pertencimento.

Em pesquisa qualitativa, sinais recorrentes incluem linguagem de perda e perigo: “vão tirar”, “querem destruir”, “não estaremos seguros”, “isso ameaça nossos valores”, “vamos perder nosso lugar”, “esse grupo quer acabar com…”. A análise precisa registrar se a pessoa descreve uma consequência concreta, uma ameaça simbólica ou uma formulação vaga de medo.

Também vale observar **credibilidade**, **magnitude** e **proximidade temporal** da ameaça percebida. Um risco interpretado como remoto pode produzir respostas diferentes de um dano imaginado como imediato. A teoria de ameaça intergrupal trata esses fatores como relevantes para a intensidade da percepção.[^1]

O eixo não mede se o perigo existe de fato. Uma ameaça pode ser percebida como alta e estar empiricamente superestimada; pode ser percebida como baixa apesar de risco documentado. Avaliar precisão exige outra investigação e fontes próprias.

## Ameaça reduzida não significa concordância

Diminuir ameaça percebida pode tornar interação e revisão menos custosas sem eliminar desacordo. Uma pessoa pode continuar considerando as propostas de outro grupo equivocadas, injustas ou indesejáveis e deixar de interpretá-las como ameaça existencial.

Essa distinção é importante para [[02 variaveis/Reversibilidade representacional|Reversibilidade representacional]]. Quando toda informação sobre o outro é processada como evidência de perigo, contraprovas podem ter pouca capacidade de revisão. Reduzir ameaça pode criar condições para que nova informação seja considerada; essa relação é uma hipótese comparativa do projeto e não deve ser tratada como sequência causal universal.

[[02 variaveis/Prototipicidade percebida|Prototipicidade percebida]] acrescenta outra tensão. Um indivíduo percebido como altamente prototípico pode fazer um comportamento ameaçador parecer diagnóstico do grupo inteiro. Um membro pouco prototípico pode produzir o efeito contrário: “ele não representa os outros”. As duas variáveis precisam permanecer separadas porque representatividade e perigo são julgamentos distintos.

[[02 variaveis/Normatividade percebida da hostilidade|Normatividade percebida da hostilidade]] acrescenta uma crença sobre o ambiente social: se parece normal que o outro grupo aja com hostilidade, o dano potencial pode parecer mais plausível ou frequente. A associação deve ser testada em cada contexto; perceber uma norma hostil não equivale por si só a perceber ameaça.

A pergunta que a variável acrescenta ao estudo de um artefato é: **que dano este artefato torna imaginável, para quem, e com que grau de credibilidade?**

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Ameaça percebida |
| **Eixo** | Baixa ↔ alta ameaça percebida |
| **Definição operacional** | Grau em que uma pessoa ou grupo é percebido como capaz de produzir dano relevante ao indivíduo ou ao grupo de pertencimento |
| **Como observar** | Avaliações de ameaça a segurança, recursos, poder, direitos, valores, identidade ou modo de vida; distinção entre ameaça individual e coletiva; linguagem de perigo, perda, destruição ou substituição |
| **O que não mede sozinho** | Risco objetivo, antipatia, polarização afetiva, distância social, confiança, intenção de voto ou extremismo |
| **Trade-offs principais** | Sinais de ameaça podem orientar atenção para riscos reais; amplificação ou generalização excessiva pode transformar casos episódicos em percepção persistente de perigo |
| **Artefatos-chave** | [[03 artefatos/Clip político|Clip político]], [[03 artefatos/Apelido político|Apelido político]], [[03 artefatos/Meme|Meme]], [[03 artefatos/Tango|Tango]] |
| **Conceitos relacionados** | [[01 conceitos/Design da aversão|Design da aversão]], [[01 conceitos/Polarização afetiva|Polarização afetiva]], [[01 conceitos/Identidade política negativa|Identidade política negativa]], [[01 conceitos/Partidarismo negativo|Partidarismo negativo]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] pela hipótese de exposição e saliência; fechamento e reabertura de representações permanece em investigação |

## Referências

[^1]: Stephan, Walter G.; Ybarra, Oscar; Rios Morrison, Kimberly. “Intergroup Threat Theory.” In: Nelson, Todd D. (ed.). *Handbook of Prejudice, Stereotyping, and Discrimination*. 2009. [Texto disponibilizado pelos autores no ResearchGate](https://www.researchgate.net/publication/285515618_Intergroup_threat_theory). A teoria distingue ameaças realistas e simbólicas e níveis individual e grupal.

[^2]: Stephan, Walter G.; Renfro, C. Lausanne; Esses, Victoria M.; Stephan, Cookie White; Martin, Tim. “The effects of feeling threatened on attitudes toward immigrants.” *International Journal of Intercultural Relations*, 29(1), 2005, pp. 1–19. [Acessar artigo no ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0147176705000325). DOI: `10.1016/j.ijintrel.2005.04.011`.

[^3]: Gomez, Raul; Olivas Osuna, Jose Javier; Ramiro, Luis. “Threat perception and partisan animosity: Evidence from Argentina and Brazil.” *European Journal of Political Research*, publicado online em 30 jul. 2026. [Acessar artigo em acesso aberto na Cambridge Core](https://www.cambridge.org/core/journals/european-journal-of-political-research/article/threat-perception-and-partisan-animosity-evidence-from-argentina-and-brazil/0E9662355F9809E51515064F130713B7). DOI: `10.1017/S1475676526101583`.

[^4]: Tausch, Nicole; Birtel, Michèle D.; Górska, Paulina; Bode, Sidney; Rocha, Carolina. “A post-Brexit intergroup contact intervention reduces affective polarization between Leavers and Remainers short-term.” *Communications Psychology*, 2, 95, 2024. [Acessar artigo em acesso aberto](https://www.nature.com/articles/s44271-024-00146-w). DOI: `10.1038/s44271-024-00146-w`.

> “Ameaça percebida” e a distinção entre ameaça realista e simbólica vêm da literatura de relações intergrupais. O uso como variável transversal para comparar decisões de design é uma adaptação operacional deste projeto.
