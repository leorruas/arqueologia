---
title: "Arquivo em nuvem"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - design/software
---

# Arquivo em nuvem

Por muito tempo, levar um arquivo digital significava levar **o suporte que o continha**.

Disquete, CD, pendrive, disco externo e notebook resolvem o problema de modos diferentes, mas compartilham uma lógica material: para que o arquivo viaje, algum objeto que contém seus bits precisa viajar junto.

O arquivo em nuvem muda a experiência cotidiana dessa relação. O arquivo pode permanecer numa infraestrutura remota enquanto a pessoa muda de computador, cidade ou dispositivo. O que acompanha o usuário já não precisa ser o próprio suporte de armazenamento. Pode ser apenas **uma credencial e um caminho de rede**.

É por isso que ele ocupa um ponto central na genealogia [[04 genealogias/Portabilidade e Desancoragem|Portabilidade e desancoragem]]. A portabilidade começa a existir sem transporte direto do objeto armazenado.

## Antes da nuvem, arquivos já podiam estar longe

Armazenamento remoto e acesso a arquivos por rede são anteriores ao termo contemporâneo *cloud computing*. Computadores compartilhados, servidores, redes locais, FTP, hospedagem remota e sistemas distribuídos já permitiam que dados fossem guardados longe do terminal usado para acessá-los.

Por isso não existe um inventor único do “arquivo em nuvem”. O que aparece no fim dos anos 2000 e início dos 2010 é a consolidação de uma experiência e de um modelo de infraestrutura em que acesso remoto, elasticidade e serviços compartilhados passam a ser apresentados como uma mesma família.

O NIST publicou em 2011 uma definição que se tornaria referência: cloud computing é um modelo de acesso ubíquo, conveniente e sob demanda, via rede, a um conjunto compartilhado de recursos configuráveis, incluindo armazenamento, aplicações e serviços.[^1]

O detalhe importante para esta arqueologia é **acesso em rede**. O armazenamento deixa de precisar estar fisicamente junto do usuário para parecer disponível.

## O arquivo fica; a disponibilidade viaja

No [[03 artefatos/Bolso|bolso]], a pessoa carrega o objeto. Na [[03 artefatos/Mochila|mochila]], carrega um conjunto maior de recursos. Na [[03 artefatos/Carteira|carteira]], pode carregar credenciais que dão acesso a recursos mantidos por instituições.

O arquivo em nuvem leva essa lógica mais longe.

O documento pode permanecer num data center. O usuário carrega um telefone ou computador capaz de autenticar-se e recuperar uma representação do arquivo. A sensação de “meus arquivos estão comigo” surge justamente quando **eles já não precisam estar comigo fisicamente**.

Essa é uma forma de [[01 conceitos/Continuidade de Acesso|continuidade de acesso]] produzida por desancoragem. Em vez de aproximar o recurso do corpo, o sistema reduz a importância percebida da distância entre corpo e recurso.

Isso altera também a expectativa. Depois que um mesmo documento aparece no notebook, no telefone e em outro computador, a ausência de sincronização começa a parecer falha. A disponibilidade, antes extraordinária, vira norma.

## Sincronizar cria a ilusão de um único arquivo

A nuvem não apenas permite baixar uma cópia remota. Sistemas contemporâneos frequentemente tentam fazer versões locais e remotas parecerem manifestações de **um mesmo objeto contínuo**.

Essa decisão de design esconde uma complexidade enorme: versões, conflitos, latência, caches, permissões, uploads incompletos e estados offline precisam ser reconciliados para sustentar a sensação de continuidade.

O usuário tende a pensar “meu documento”. A infraestrutura precisa responder à pergunta muito menos simples: qual estado deste documento deve ser considerado atual?

Essa é uma conexão direta com [[03 artefatos/Botao Salvar|botão salvar]]. No modelo tradicional, salvar explicitamente transforma o estado local em persistência. Em serviços sincronizados, essa fronteira pode desaparecer e o sistema tenta preservar mudanças continuamente.

O benefício é menor [[02 variaveis/Custo Transacional|custo transacional]] para transportar e atualizar arquivos. O custo invisível é que a responsabilidade pela persistência migra para uma infraestrutura que o usuário não enxerga.

## Desancorar também significa delegar

Quando um arquivo está num pendrive, perder o dispositivo pode significar perder o arquivo; mas enquanto o objeto está sob posse física, o usuário controla diretamente onde ele se encontra.

Na nuvem, a situação se inverte. Perder um notebook não precisa destruir o documento, porque outra máquina pode recuperá-lo. Ao mesmo tempo, continuar tendo acesso passa a depender de conta, autenticação, rede, disponibilidade do provedor, contrato e políticas de retenção.

A definição do NIST inclui justamente *broad network access*, *resource pooling* e *on-demand self-service* como características do modelo.[^1] Um roadmap do próprio NIST também trata segurança, portabilidade e interoperabilidade como questões centrais para a adoção de cloud computing.[^2]

A desancoragem, portanto, amplia autonomia espacial e cria dependência institucional.

Essa tensão aproxima o arquivo em nuvem do [[03 artefatos/Cofre|cofre]]. Ambos preservam algo por meio de uma infraestrutura de acesso controlado. Mas o cofre físico torna sua fronteira visível; na nuvem, boa parte dela está distribuída entre autenticação, software, políticas e servidores que o usuário nunca vê.

## Guardar sem saber onde

O [[03 artefatos/Banco de dados|banco de dados]] já havia separado recuperação de localização física para quem consulta registros. O arquivo em nuvem leva uma operação semelhante para a experiência cotidiana de documentos pessoais: o usuário pode saber **qual arquivo quer** sem saber em qual máquina, disco ou região física ele está armazenado.

Isso não significa que localização tenha deixado de existir. Ela apenas saiu da interface principal.

É uma das operações recorrentes de [[01 conceitos/Redução de Inferências|redução de inferências]]: detalhes que antes precisavam fazer parte do modelo mental do usuário são absorvidos pela infraestrutura.

O resultado é uma forma peculiar de posse. Dizemos “meu arquivo” mesmo quando a capacidade de alcançá-lo depende de sistemas que pertencem a terceiros.

Por isso, a pergunta arqueológica que a nuvem produz é menos tecnológica do que política: **quando um objeto pode estar disponível em toda parte sem estar fisicamente conosco, o que significa realmente possuir aquilo que guardamos?**

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Arquivo em nuvem |
| **Período** | Antecedentes em armazenamento remoto e redes; modelo contemporâneo de cloud computing consolidado no fim dos anos 2000 e início dos 2010 |
| **Autoria** | Distribuída; não há inventor único do arquivo em nuvem |
| **Produto ou contexto** | Armazenamento remoto, sincronização de documentos, cloud computing e serviços digitais |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Manter arquivos acessíveis entre lugares e dispositivos sem transportar fisicamente o mesmo suporte de armazenamento |
| **Mundo antes** | Discos locais, disquetes, CDs, pendrives, anexos, servidores e outras formas de transferência ou acesso remoto |
| **Invenção** | Não há momento singular; armazenamento remoto e redes precedem o modelo contemporâneo de cloud computing |
| **Refinamento** | Sincronização automática, versionamento, compartilhamento, acesso por múltiplos dispositivos, estados offline e colaboração |
| **Popularização** | Expansão de banda larga, smartphones e serviços de armazenamento/sincronização para consumidores e organizações |
| **Padronização** | Cloud computing foi conceitualmente estabilizado por definições como NIST SP 800-145 e por padrões de segurança, portabilidade e interoperabilidade, embora implementações permaneçam diversas |
| **Hipótese de design** | Se persistência e identidade do arquivo forem administradas remotamente, acesso pode acompanhar a pessoa sem que o suporte físico precise acompanhá-la |
| **Comportamento aproveitado** | Guardar documentos, alternar dispositivos e recuperar arquivos conhecidos |
| **Comportamento produzido** | Esperar sincronização automática, acesso multidispositivo e disponibilidade quase independente de lugar |
| **Relação de poder** | Provedores administram parte da infraestrutura que determina persistência, autenticação, disponibilidade e possibilidade de revogação; usuários ganham mobilidade ao delegar controle físico |
| **Consequências inesperadas** | Dependência de conta, rede e provedor; conflitos de versão; falsa sensação de posse absoluta; aumento da expectativa de disponibilidade permanente |
| **Destino ou transformação posterior** | Tornou-se infraestrutura cotidiana e se fundiu a suítes colaborativas, sistemas operacionais e aplicativos móveis |
| **Conceitos relacionados** | [[01 conceitos/Continuidade de Acesso|Continuidade de acesso]], [[01 conceitos/Redução de Inferências|Redução de inferências]], [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Tecnologia de Acesso|Tecnologia de acesso]] |
| **Variáveis relacionadas** | [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Expectativa de Disponibilidade|Expectativa de disponibilidade]], [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Custo de Busca|Custo de busca]] |
| **Genealogia** | [[04 genealogias/Portabilidade e Desancoragem|Portabilidade e desancoragem]]; [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]] |
| **Percurso(s)** | [[05 percursos/Como o Design Aprendeu a Guardar|Como o Design Aprendeu a Guardar]] |
| **Parentes** | [[03 artefatos/Bolso|Bolso]], [[03 artefatos/Carteira|Carteira]], [[03 artefatos/Banco de dados|Banco de dados]], [[03 artefatos/Botao Salvar|Botão salvar]], [[03 artefatos/Cofre|Cofre]] |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Uma capacidade pode tornar-se portátil não porque o recurso viaja, mas porque a infraestrutura torna sua localização física irrelevante para a interação cotidiana |
| **Questão em aberto** | O que significa posse quando aquilo que chamamos de “meu arquivo” depende continuamente de credenciais, contratos e infraestrutura administrada por terceiros? |

## Referências

[^1]: Mell, Peter; Grance, Timothy. *The NIST Definition of Cloud Computing*. NIST Special Publication 800-145, 2011. Define cloud computing como acesso ubíquo, conveniente e sob demanda, via rede, a recursos compartilhados incluindo armazenamento. https://doi.org/10.6028/NIST.SP.800-145

[^2]: Hogan, Michael D.; Liu, Fang; Sokol, Annie W.; Jin, Tong. *NIST Cloud Computing Standards Roadmap*. NIST SP 500-291, 2011. Mapeia questões de segurança, portabilidade, interoperabilidade e padrões para cloud computing. https://www.nist.gov/publications/nist-sp-500-291-nist-cloud-computing-standards-roadmap
