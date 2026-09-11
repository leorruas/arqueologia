---
title: "Número de protocolo"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Número de protocolo

Uma reclamação pode mudar de atendente, setor, prédio ou sistema e ainda continuar sendo a mesma reclamação. Para isso, a instituição precisa de alguma forma de reconhecer que eventos separados pertencem ao mesmo caso. O **número de protocolo** resolve esse problema atribuindo identidade persistente a uma demanda.

A pessoa conta uma história. O sistema devolve um código.

## O problema de manter o mesmo caso através de muitas mãos

Organizações que recebem grande volume de documentos e solicitações enfrentam um problema diferente daquele resolvido pela memória individual. Uma demanda pode entrar por uma pessoa, ser encaminhada a outra, ficar armazenada, retornar meses depois e precisar ser consultada por alguém que nunca conheceu o solicitante.

Nessas condições, nomes e lembranças pessoais são identificadores frágeis. Pessoas podem ter o mesmo nome, funcionários mudam de função e descrições verbais variam. Livros de registro, índices, números sequenciais e classificações oferecem uma maneira mais estável de localizar e relacionar registros.

A versão anterior da nota datava o número de protocolo nos séculos XIX e XX como se houvesse um ponto de invenção associado à burocracia moderna. A relação histórica é plausível, mas ampla demais para sustentar essa precisão sem uma genealogia documental mais profunda. Sistemas de registro numerado e indexação são muito anteriores e assumiram formas diferentes em correios, tribunais, comércio e administrações.

O artefato deve, portanto, ser entendido como uma solução distribuída de **identificação de casos**, não como invenção isolada de uma instituição ou século.

## Quando a demanda ganha uma segunda identidade

Para a pessoa, o caso possui identidade narrativa: “a encomenda que não chegou”, “o pedido que fiz”, “o processo que protocolei”. Para a organização, essa descrição é difícil de operar em escala. O número converte o caso em uma chave curta e relativamente inequívoca.

Essa conversão parece reduzir o humano a um código, mas sua função primária é separar duas coisas que frequentemente são confundidas: **a identidade da pessoa** e **a identidade da demanda**. Uma mesma pessoa pode abrir muitos processos; um mesmo processo pode envolver muitas pessoas. O número identifica o objeto administrativo que precisa atravessar o sistema.

Essa distinção dá ao artefato enorme capacidade de coordenação. Um atendente não precisa ter participado do atendimento original. Se o identificador permanece ligado aos registros corretos, ele consegue recuperar o histórico.

O número passa a funcionar como uma âncora de [[01 conceitos/Memoria Distribuida|memória institucional]].

## O mesmo código não garante a mesma história

A noção de identidade narrativa de [[autores/Paul Ricoeur|Paul Ricoeur]] é formulada para pessoas, não para processos administrativos. Ainda assim, ela ajuda por contraste a entender o que o protocolo faz e o que ele não faz.[^5]

O número estabiliza **referência**. Ele permite que muitos eventos continuem sendo tratados como pertencentes ao mesmo caso. Mas o sentido do caso pode mudar conforme novos documentos, respostas, recursos, decisões e interpretações são incorporados. O código continua igual enquanto a história cresce.

Isso torna o protocolo quase o inverso de uma narrativa. A narrativa precisa organizar acontecimentos para explicar como eles formam uma continuidade. O identificador não precisa explicar nada: basta apontar consistentemente para a entidade à qual esses acontecimentos serão anexados.

A distinção é preciosa para design de serviços. Um sistema pode ser excelente em manter o mesmo ID e péssimo em preservar **o sentido** da demanda. Se cada novo atendente vê apenas campos isolados, status e códigos, a continuidade técnica existe enquanto a continuidade narrativa se perde. O cidadão então precisa contar de novo a história que o sistema afirma já possuir.

Ricoeur ajuda também pelo trabalho sobre memória, documento e arquivo: o conjunto de registros ligados a um protocolo constitui vestígios e documentos capazes de sustentar reconstrução, mas não é automaticamente uma interpretação suficiente do que aconteceu.[^6]

Assim, **identidade persistente não é continuidade de sentido**. O protocolo resolve a primeira. O design do histórico, dos documentos e da leitura institucional precisa resolver a segunda.

## O exemplo brasileiro do NUP

A Administração Pública Federal brasileira oferece um caso contemporâneo especialmente claro de padronização. O **Número Único de Protocolo, NUP**, é atribuído a documentos avulsos ou processos quando são recebidos ou autuados por órgãos e entidades federais abrangidos pela norma.

O Ministério da Gestão explica que a padronização do NUP favorece tanto a comunicação entre instituições quanto a consulta pelos usuários. Na forma atual, o número possui grupos que identificam a unidade protocolizadora, um registro sequencial, o ano e dígitos verificadores.

A estrutura mostra algo importante: o identificador não serve apenas para distinguir um caso de outro. Ele pode carregar metadados sobre origem e período, além de mecanismos para detectar erros de digitação.

Nesse estágio, o protocolo deixa de ser apenas número sequencial local e se torna **linguagem interoperável entre sistemas**.

## O que o número permite cobrar

Quando uma instituição fornece um protocolo ao usuário, ela cria uma referência compartilhada. A pessoa pode voltar depois e dizer “estou falando do caso X”. Isso reduz [[02 variaveis/Custo Transacional|Custo Transacional]] de reconstruir a situação em cada contato.

Há também uma mudança de poder. Uma conversa sem registro pode ser negada, esquecida ou reinterpretada. Um protocolo não prova que o problema foi resolvido, mas oferece evidência de que determinada demanda entrou em algum regime institucional de registro.

É por isso que “anote o número do protocolo” se tornou um comportamento cotidiano em serviços. O usuário aprende a guardar o identificador como instrumento de cobrança futura.

Essa propriedade conecta o artefato a [[03 artefatos/Carimbo|Carimbo]]. O carimbo pode registrar que algo foi recebido ou alterar seu status; o protocolo permite reencontrar o objeto posteriormente. Um marca um acontecimento. O outro estabiliza a identidade do que está acontecendo.

## Registrar não é resolver

A mesma propriedade que fortalece rastreabilidade pode criar uma ilusão. Receber um número produz uma sensação de formalização e progresso, mesmo que nenhuma ação substantiva tenha acontecido depois.

A versão anterior já identificava esse custo invisível, e ele merece ser preservado: **a geração de um identificador pode ser confundida com atendimento**. Um sistema excelente em registrar demandas pode continuar péssimo em resolvê-las.

Essa distinção é essencial em design de serviços. Rastreabilidade reduz incerteza sobre onde o caso está e o que ocorreu. Ela não elimina a necessidade de capacidade, decisão, responsabilização ou prazo.

O protocolo pode inclusive tornar a ineficiência mais legível. Quando o usuário possui um código e histórico, atrasos que antes se perderiam em conversas tornam-se comparáveis e documentáveis.

## Desumanização ou despersonalização útil?

Chamar alguém pelo número pode ser desumanizante. Identificar o **caso** por número não precisa ser. A diferença depende do que o sistema substitui.

Se o protocolo serve para recuperar rapidamente contexto e evitar que a pessoa conte sua história várias vezes, o identificador pode tornar o atendimento mais humano. Se ele vira desculpa para ignorar contexto e tratar situações diferentes como unidades equivalentes, pode produzir o efeito oposto.

O problema, então, não está na abstração em si. Sistemas em escala precisam abstrair. A pergunta de design é **o que pode ser abstraído sem apagar aquilo que ainda precisa ser compreendido qualitativamente**.

Essa tensão também aparece em [[03 artefatos/Login|Login]]. Um login identifica ou autentica uma pessoa para um sistema; um protocolo identifica uma ocorrência ou processo. Ambos mostram que sistemas digitais e burocráticos dependem de transformar entidades complexas em chaves operáveis.

## Do livro de protocolo ao identificador invisível

Em registros físicos, números eram escritos em livros, capas, fichas e recibos. No software, a lógica se expandiu para IDs de transação, números de pedido, códigos de rastreamento, tickets de suporte e identificadores internos de bancos de dados.

UUIDs e hashes pertencem a histórias técnicas diferentes e não devem ser tratados simplesmente como descendentes diretos do protocolo administrativo. O parentesco é funcional: permitir que sistemas se refiram a uma entidade de forma consistente sem carregar toda a sua descrição a cada operação.

Quando essa infraestrutura funciona bem, o identificador pode desaparecer da interface. Aplicativos recuperam pedidos automaticamente, links carregam IDs internamente e usuários não precisam memorizar códigos extensos. O princípio permanece mesmo quando o número deixa de ser mostrado.

É outro caso em que uma ideia de design se torna tão importante que pode sumir da experiência visível.

## Referências

1. Ministério da Gestão e da Inovação em Serviços Públicos. “Número Único de Protocolo (NUP)”. Definição, finalidade e composição do padrão utilizado na Administração Pública Federal brasileira.
2. Portaria Interministerial MJSP/ME nº 11, de 25 de novembro de 2019, e Instrução Normativa Interministerial nº 13, de 27 de fevereiro de 2020, com alterações posteriores.
3. Literatura de arquivologia, diplomática e história administrativa sobre registros, índices e protocolos documentais.
4. Literatura de arquitetura da informação e bancos de dados sobre identificadores persistentes, como referência comparativa e não como origem histórica do protocolo administrativo.
5. [[autores/Paul Ricoeur|Paul Ricoeur]]. *Soi-même comme un autre* / *Oneself as Another*. A noção de identidade narrativa é usada apenas por contraste para separar continuidade narrativa humana de persistência referencial de um caso.
6. [[autores/Paul Ricoeur|Paul Ricoeur]]. *La mémoire, l'histoire, l'oubli* / *Memory, History, Forgetting*. Referência para distinguir traço, documento, arquivo e reconstrução do passado.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Número de protocolo |
| **Período** | Origem distribuída em tradições de registro e numeração; formas modernas padronizadas em burocracias físicas e digitais |
| **Autoria** | Sem inventor individual conhecido; desenvolvido e refinado por sistemas administrativos, postais, jurídicos e comerciais |
| **Produto ou contexto** | Livros de protocolo, repartições, correios, tribunais, SACs, tickets de suporte e sistemas eletrônicos de processos Categoria: Design de serviços / arquitetura da informação / identificação sistêmica |
| **Tipo(s) de design** | Relação disciplinar ainda não classificada. |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Preservar a identidade de uma demanda enquanto ela atravessa tempo, pessoas e setores diferentes |
| **Mundo antes** | Registros e índices já existiam em muitas formas; sem identificador estável, recuperar um caso podia depender mais de nomes, descrições, localização física e conhecimento dos envolvidos |
| **Invenção** | Distribuída, sem data ou autor únicos suficientemente documentados |
| **Refinamento** | Numeração sequencial, códigos estruturados, dígitos verificadores e integração com bancos de dados |
| **Popularização** | Serviços de massa, burocracias estatais, comércio, logística e atendimento ao consumidor |
| **Padronização** | Sistemas como o NUP brasileiro demonstram a transformação do protocolo em padrão interoperável entre órgãos |
| **Hipótese de design** | O protocolo permite que uma demanda continue sendo reconhecida como a mesma mesmo quando pessoas e contextos mudam; a persistência da referência reduz o custo de coordenar seu histórico |
| **Comportamento aproveitado** | Uso de índices e rótulos para reencontrar informação |
| **Comportamento produzido** | Solicitar, guardar e informar números de protocolo como parte normal da relação com serviços |
| **Relação de poder** | Dá à organização capacidade de classificar e rastrear casos, mas também oferece ao usuário uma referência persistente para cobrar o que foi registrado |
| **Consequências inesperadas** | O número pode virar símbolo de burocratização, ser confundido com resolução ou preservar continuidade técnica enquanto contexto e sentido se perdem entre setores Registros adicionais preservados da ficha anterior: autores relacionados: [[autores/Paul Ricoeur|Paul Ricoeur]] como lente para distinguir referência persistente, narrativa, documento e interpretação |
| **Destino ou transformação posterior** | Permanece visível em serviços formais, mas sua lógica também foi incorporada a identificadores digitais que usuários muitas vezes nunca veem |
| **Conceitos relacionados** | [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Redução de Inferências|Redução de inferências]], [[01 conceitos/Justificabilidade|Justificabilidade]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Previsibilidade Visual|Previsibilidade visual]] |
| **Genealogia** | [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]], [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]]. Família de ideias: artefatos de identificação e rastreabilidade |
| **Percurso(s)** | [[05 percursos/Como o Design Aprendeu a Guardar|Como o Design Aprendeu a Guardar]] |
| **Parentes** | [[03 artefatos/Carimbo|Carimbo]], [[03 artefatos/Login|Login]], número de pedido, código de rastreamento, ticket de suporte |
| **Leituras-chave** | [[00 índices/Livros Indicados|Memory, History, Forgetting]]; [[00 índices/Livros Indicados|Oneself as Another]] como contraste conceitual |
| **Princípio de design revelado** | Uma referência persistente pode manter uma entidade coordenável através de muitas interações sem preservar automaticamente sua história ou seu sentido |
| **Questão em aberto** | Como fazer o histórico institucional preservar não apenas a identidade técnica de um caso, mas contexto suficiente para que a pessoa não precise reconstruir sua narrativa a cada novo contato? |
