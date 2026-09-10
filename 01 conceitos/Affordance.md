---
title: "Affordance"
type: "conceito"
status: "publicado"
origem: "literatura"
grau: "consolidado"
tags:
  - design/conceito
  - arqueologia
---

# Affordance

Uma maçaneta pode permitir ser puxada mesmo quando sua forma faz parecer que deve ser empurrada. Essa diferença entre **o que uma coisa permite fazer** e **o que ela faz parecer possível fazer** é justamente onde o conceito de affordance se torna útil — e onde ele costuma ser confundido no design.

James J. Gibson introduziu o termo na psicologia ecológica para descrever relações de possibilidade de ação entre um organismo e seu ambiente. Uma superfície pode oferecer apoio para um corpo e não para outro; um vão pode permitir passagem para determinado animal e ser estreito demais para outro. A affordance, portanto, não é simplesmente uma propriedade visual do objeto. É uma relação entre capacidades do agente e características do ambiente.[^1]

Donald Norman levou o termo para o design no fim dos anos 1980, enfatizando aquilo que as pessoas percebem poder fazer. Mais tarde, o próprio Norman reconheceu que essa adaptação ajudou a produzir confusão e passou a defender uma distinção mais clara entre **affordance** e **signifier**: affordance é a possibilidade de ação; signifier é a pista perceptível que ajuda alguém a descobrir essa possibilidade.[^2]

## Um gesto possível não é necessariamente um gesto descobrível

Essa distinção muda a leitura de vários artefatos do vault.

Em [[03 artefatos/Pinch to Zoom|Pinch to Zoom]], a tela capacitiva possibilita toques e movimentos dos dedos. Mas nada na superfície de vidro, sozinha, comunica inevitavelmente que afastar dois dedos ampliará uma imagem. O gesto depende também de convenção, demonstração e aprendizagem. Chamá-lo simplesmente de “affordance natural” apaga essa camada cultural.

O mesmo vale para [[03 artefatos/Slide to Unlock|Slide to Unlock]]. A interface foi desenhada com uma guia e um controle visual que indicavam direção. Aquilo que ajuda a descobrir a ação é, em termos de Norman, sobretudo um **signifier**.

Já o [[03 artefatos/Post-it|Post-it]] oferece relações físicas mais próximas do sentido gibsoniano: pode ser segurado, dobrado, escrito e aderido a determinadas superfícies. Sua borda ou a experiência anterior com o objeto podem ajudar a perceber essas possibilidades, mas a possibilidade física e a pista perceptível continuam sendo coisas distintas.

## Por que a confusão importa

Quando designers dizem que “um botão tem affordance porque parece clicável”, frequentemente estão descrevendo sinalização perceptiva ou convenção visual. Em interfaces digitais, um retângulo na tela não possui, por si, uma nova capacidade física de clique diferente dos pixels ao redor. O que muda é a interpretação do usuário.

Norman chama atenção justamente para isso: em telas, convenções e signifiers costumam ser mais importantes para o designer do que affordances físicas propriamente ditas.[^2]

A distinção ajuda a evitar uma explicação circular. Se alguém entendeu o botão, não podemos concluir automaticamente que “a affordance estava boa”. Talvez a pessoa tenha reconhecido uma convenção aprendida. Talvez tenha lido o rótulo. Talvez tenha visto outra pessoa usar. Talvez o sistema tenha fornecido feedback suficiente para permitir tentativa e erro.

## Affordance não significa intuitivo

Outro erro comum é usar affordance como sinônimo de “intuitividade”. Uma possibilidade de ação pode existir e não ser percebida; pode ser percebida de forma errada; pode inclusive ser perigosa.

Isso faz do conceito uma lente mais interessante do que um selo de qualidade. Ele permite perguntar: **que ações esta configuração torna possíveis para este corpo, neste contexto?** E, separadamente: **como o sistema torna essas possibilidades perceptíveis?**

No projeto, essa distinção se conecta a [[02 variaveis/Atrito Decisorio|Atrito decisório]] e [[02 variaveis/Custo Transacional|Custo transacional]]. Descobrir uma ação e executá-la têm custos diferentes. Um bom signifier pode reduzir o primeiro sem alterar a affordance física; uma mudança material pode alterar a segunda mesmo sem comunicar isso bem.

É esse cuidado que impede “affordance” de virar apenas uma palavra sofisticada para dizer que alguma coisa parece fácil de usar.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Affordance |
| **Origem** | Literatura |
| **Grau de consolidação** | Consolidado, com diferenças importantes entre psicologia ecológica e uso em design |
| **Formulação associada a** | James J. Gibson; adaptação e revisão no design por Donald Norman |
| **Área principal** | Psicologia ecológica / IHC / design de interação |
| **Distinção central** | Possibilidade de ação não é a mesma coisa que pista perceptível sobre essa ação |
| **O que ajuda a explicar** | Relação entre capacidades do agente, propriedades do ambiente e ações possíveis |
| **O que não explica sozinho** | Descobribilidade, convenções aprendidas, feedback ou facilidade de uso |
| **Artefatos-chave** | [[03 artefatos/Pinch to Zoom|Pinch to Zoom]], [[03 artefatos/Slide to Unlock|Slide to Unlock]], [[03 artefatos/Post-it|Post-it]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Atrito Decisorio|Atrito decisório]] |

## Referências

[^1]: Gibson, James J. *The Ecological Approach to Visual Perception*. 1979. Formula affordances como relações de possibilidades de ação entre ambiente e organismo.

[^2]: Norman, Donald A. “Affordances and Design” e “Signifiers, Not Affordances”. 2008. Norman revisa o uso do conceito no design e diferencia affordances, perceived affordances e signifiers.