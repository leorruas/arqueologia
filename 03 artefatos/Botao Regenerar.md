---
title: "Botão regenerar"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Botão regenerar

Durante décadas, repetir um comando foi uma maneira de testar se o computador funcionava corretamente. A mesma entrada deveria produzir o mesmo resultado. Um cálculo, um filtro ou um comando que respondesse de maneira diferente sem que nada tivesse mudado pareceria defeituoso.

O **botão regenerar** normaliza outra expectativa. Diante de uma resposta produzida por IA generativa, repetir a solicitação pode ser justamente uma forma de pedir diferença. O usuário não corrige necessariamente o prompt, não fornece informação nova e não desfaz uma ação. Apenas solicita: produza outra possibilidade.

Esse pequeno botão torna operável uma mudança maior na cultura da interface. O resultado deixa de ser tratado apenas como consequência de um comando e passa a ser tratado como uma **amostra entre resultados possíveis**.

## Quando repetir deixou de significar confirmar

Interfaces determinísticas construíram uma expectativa forte de repetibilidade. Apertar novamente o mesmo botão deveria reiterar a mesma operação. Até o comando de atualizar uma página procura uma versão atual do mesmo objeto, e o [[03 artefatos/Undo|Undo]] procura retornar a um estado anterior.

Regenerar faz algo diferente. Ele preserva a intenção expressa no [[03 artefatos/Prompt Conversacional|prompt conversacional]], mas pede uma nova realização daquela intenção. Por isso, seu parente mais próximo talvez não seja o refresh nem o undo. Há afinidade funcional com sorteio, nova tentativa, variação e procedimentos criativos em que uma mesma restrição admite várias soluções.

Essa diferença só faz sentido porque modelos generativos podem produzir saídas distintas por procedimentos de amostragem. Pesquisas sobre geração neural mostraram que estratégias de decodificação alteram significativamente diversidade, fluência e qualidade mesmo quando o modelo subjacente permanece o mesmo.[^1][^2]

O botão não inventa essa variabilidade. Ele a transforma em **affordance para o usuário**.

## O erro deixa de ser o único motivo para tentar novamente

“Tentar novamente” é uma expressão antiga em interfaces, frequentemente associada a falha: conexão interrompida, operação que não terminou, página que não carregou. O próprio suporte do ChatGPT ainda apresenta regenerar como forma de repetir uma geração que falhou.[^3]

Em sistemas generativos, porém, a nova tentativa ganhou outra função. Uma resposta pode estar perfeitamente formada e ainda assim o usuário querer outra. Não porque a primeira esteja tecnicamente quebrada, mas porque existe mais de uma resposta aceitável.

Isso cria um comportamento novo: **explorar o espaço de respostas mantendo o problema relativamente estável**.

Em escrita, imagem, ideação e programação, o usuário pode comparar alternativas antes de decidir. A máquina deixa de apresentar apenas “o resultado” e passa a funcionar como produtora de versões.

## Um botão para outros futuros

Há uma diferença importante entre editar o prompt e regenerar. Editar diz: “quero mudar a condição inicial”. Regenerar diz: “mantenha aproximadamente a condição inicial e percorra novamente o espaço de possibilidades”.

Por isso, o botão introduz uma espécie de contrafactual barato na interface. O usuário pode perguntar, na prática: **o que mais poderia ter acontecido a partir daqui?**

Essa propriedade aproxima regenerar do processo de projeto. Designers raramente tratam a primeira solução compatível com o briefing como consequência inevitável do problema. Produzem alternativas, comparam, descartam e refinam. O botão comprime parte desse gesto divergente em uma operação.

Mas essa facilidade também cria um risco. Se toda resposta pode ser substituída instantaneamente, o usuário pode regenerar até encontrar não a resposta mais sustentada, mas aquela que confirma sua expectativa. A exploração de possibilidades pode virar procura por concordância.

A nova competência, portanto, não é apenas gerar alternativas. É saber **por que escolher uma delas**.

## A afinidade com temperatura

O botão regenerar torna a variabilidade visível depois da geração. [[03 artefatos/Temperatura e Criatividade|Temperatura e criatividade]] tenta governar essa variabilidade antes.

Os dois artefatos pertencem à mesma mudança histórica: sistemas computacionais passam a apresentar a não determinação do resultado como propriedade utilizável, em vez de tratá-la apenas como ruído ou defeito.

Para entender o parentesco, é importante separar duas operações. **Regenerar significa realizar uma nova amostragem.** Mantida aproximadamente a mesma solicitação, o sistema percorre novamente possibilidades de saída. **Temperatura é um dos parâmetros que podem alterar a distribuição da qual essa amostragem é feita**, tornando-a, de modo simplificado, mais concentrada ou mais dispersa entre alternativas possíveis.

Assim, regenerar não é um botão de “mais criatividade”. Ele apenas pede outra realização. A nova resposta pode ser melhor, pior, mais convencional, mais surpreendente ou apenas diferente. Do mesmo modo, aumentar a temperatura não injeta criatividade no sistema: altera condições probabilísticas de seleção.

Essa distinção é central porque **variabilidade não é sinônimo de criatividade**. Criatividade envolve critérios de novidade e valor, além de contexto, intenção e julgamento. Uma saída estatisticamente menos provável pode ser inventiva, mas também pode ser incoerente, inadequada ou simplesmente rara. O design corre o risco de esconder essa diferença quando traduz controles probabilísticos por palavras psicológicas como “criativo”.

Os dois artefatos podem então ser entendidos como controles sobre dimensões diferentes do mesmo fenômeno:

**Regenerar controla a repetição da amostragem. Temperatura influencia a distribuição da amostragem.**

O primeiro pergunta: “quer percorrer novamente este espaço?”. O segundo ajuda a determinar: “com que grau de concentração ou dispersão esse percurso será feito?”. Para a arqueologia completa dessa tradução estatística em categoria humana, ver [[03 artefatos/Temperatura e Criatividade|Temperatura e criatividade]].

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Botão regenerar |
| **Período** | Popularizado nas interfaces de IA generativa no início da década de 2020 |
| **Autoria** | Atribuição difusa; a operação deriva de práticas anteriores de nova tentativa, mas ganha hipótese própria em interfaces generativas |
| **Produto ou contexto** | Chatbots e outras interfaces de geração probabilística |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]], design de IA |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Permitir solicitar outra saída sem reconstruir a solicitação |
| **Mundo antes** | Repetição de comandos era associada principalmente a reiterar uma operação ou recuperar-se de falha |
| **Invenção** | Não há primeira ocorrência estabelecida neste estudo |
| **Refinamento** | Integração da regeneração ao fluxo conversacional e à comparação de respostas alternativas |
| **Popularização** | Interfaces públicas de IA generativa a partir de 2022 |
| **Padronização** | Ações como regenerar, tentar novamente e produzir variações tornam-se controles recorrentes em sistemas generativos |
| **Hipótese de design** | Quando uma mesma intenção admite múltiplas saídas válidas, repetir a geração pode ser uma ação produtiva |
| **Comportamento aproveitado** | Pedir outra tentativa, comparar alternativas e explorar soluções |
| **Comportamento produzido** | Tratar respostas computacionais como versões possíveis e iterar sem alterar necessariamente a solicitação |
| **Relação de poder** | Dá ao usuário poder de rejeitar uma saída sem justificar a rejeição, mas mantém opaco o espaço de alternativas e os mecanismos que produzem cada versão |
| **Consequências inesperadas** | Answer shopping, procura por confirmação, proliferação de versões e necessidade de critérios para escolher entre respostas plausíveis |
| **Destino ou transformação posterior** | Pode evoluir para interfaces explícitas de variação, branching e comparação entre alternativas |
| **Conceitos relacionados** | probabilidade, amostragem, divergência, exploração, validação, reversibilidade |
| **Variáveis relacionadas** | previsibilidade, diversidade de saída, custo de iteração |
| **Genealogia** | Nova tentativa; sorteio; variação; processos divergentes de projeto |
| **Percurso(s)** | Ainda não integrado a um percurso editorial. |
| **Parentes** | [[03 artefatos/Temperatura e Criatividade|Temperatura e criatividade]], [[03 artefatos/Undo|Undo]], refresh, nova tentativa |
| **Leituras-chave** | Holtzman et al. (2020); Zhang et al. (2020) |
| **Princípio de design revelado** | Em sistemas probabilísticos, variabilidade pode deixar de ser falha e tornar-se matéria de interação |
| **Questão em aberto** | Como permitir exploração de alternativas sem incentivar o usuário a regenerar até encontrar apenas aquilo que desejava ouvir? |

## Referências

[^1]: Holtzman, Ari et al. “The Curious Case of Neural Text Degeneration”. *ICLR*, 2020. O trabalho mostra que estratégias de decodificação alteram a qualidade e a diversidade da geração e propõe nucleus sampling.

[^2]: Zhang, Hugh et al. “Trading Off Diversity and Quality in Natural Language Generation”. 2020. O estudo trata a decodificação como problema de equilíbrio entre qualidade e diversidade.

[^3]: OpenAI Help Center. “Troubleshooting ChatGPT Error Messages”. Documentação de suporte que registra o uso de Regenerate/Try again para repetir uma geração após falha.