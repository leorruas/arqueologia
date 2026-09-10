---
title: "Banco de dados"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - design/software
---

# Banco de dados

Num guarda-roupa, saber onde uma coisa está ajuda a encontrá-la. Num banco de dados, o objetivo moderno é quase o contrário: **conseguir encontrar sem precisar saber onde, fisicamente, aquilo está**.

Essa mudança altera profundamente a arqueologia de guardar. Recipientes físicos resolvem armazenamento criando lugares. Bancos de dados transformam registros em estruturas que podem ser consultadas por propriedades, relações e perguntas.

Guardar deixa de significar apenas atribuir um lugar. Passa a significar **tornar recuperável por uma linguagem de consulta**.

## Antes da consulta, havia caminhos

Bancos de dados não foram inventados em 1970 por Edgar F. Codd. Sistemas computadorizados para armazenar e recuperar grandes conjuntos de dados já existiam nos anos 1960 e utilizavam estruturas hierárquicas e em rede.

O problema era que recuperar informação frequentemente exigia conhecer bastante da organização interna dos dados e escrever procedimentos que percorressem caminhos específicos. O próprio artigo de Codd descreve os sistemas existentes como arquivos estruturados em árvores ou modelos de rede e critica a dependência entre uso e representação interna.[^1]

Isso lembra uma organização física: para buscar, é preciso conhecer o caminho.

No [[03 artefatos/Guarda-roupa|guarda-roupa]], a localização é uma vantagem porque a escala é pequena e a estrutura é visível. Em um sistema com milhões de registros e aplicações diferentes, amarrar toda consulta ao lugar e ao caminho internos transforma organização em dependência.

## Codd separa a pergunta da localização

Em 1970, Edgar F. Codd publica na *Communications of the ACM* “A Relational Model of Data for Large Shared Data Banks”. A abertura do artigo formula o problema de maneira quase arqueológica: usuários futuros deveriam ser protegidos da necessidade de saber como os dados estavam organizados internamente na máquina.[^1]

Sua contribuição não é “inventar o banco de dados”. É propor o **modelo relacional**, no qual dados podem ser apresentados como relações e manipulados por operações que não exigem navegar diretamente por sua representação física.

A IBM resume a transformação dizendo que Codd imaginou uma arquitetura em que usuários poderiam acessar informação sem conhecer o “blueprint físico” do banco, relacionando tabelas por características comuns e recuperando resultados por consultas.[^2]

Essa separação cria uma forma poderosa de [[01 conceitos/Redução de Inferências|redução de inferências]]. O usuário ou programa não precisa reconstruir onde cada registro está armazenado para poder formular o que deseja recuperar.

O dado ganha uma espécie de endereço lógico.

## Guardar passa a exigir schema

Essa liberdade não elimina estrutura. Ela desloca a estrutura.

Um banco de dados precisa decidir quais entidades existem, quais campos pertencem a elas, que relações podem ser registradas, quais valores são permitidos e como consistência será mantida.

O schema funciona como arquitetura invisível do armazenável.

Isso cria uma relação de poder importante. Se um formulário e um banco permitem apenas duas categorias para uma situação que possui cinco, as outras três não ficam apenas difíceis de encontrar. **Elas podem nunca chegar a existir como dado estruturado.**

O banco de dados reduz [[02 variaveis/Custo de Busca|custo de busca]] e [[02 variaveis/Custo Transacional|custo transacional]] para certas perguntas, mas torna outras perguntas impossíveis quando a informação necessária não foi registrada.

Por isso, guardar dados é também projetar o futuro das perguntas. Uma coluna criada hoje pode viabilizar uma análise daqui a dez anos; uma dimensão ignorada hoje pode ser irrecuperável amanhã.

## A memória institucional deixa de depender de uma pessoa saber onde está

O banco de dados também muda a [[01 conceitos/Memoria Distribuida|memória distribuída]]. Num arquivo pequeno, uma pessoa experiente pode saber em que pasta procurar. Em grandes sistemas, a continuidade depende de regras, índices, consultas, metadados e software.

A instituição passa a “lembrar” não porque alguém memorizou o acervo, mas porque existe uma infraestrutura capaz de resolver perguntas sobre registros persistentes.

Isso o aproxima do [[03 artefatos/Número de Protocolo|número de protocolo]]. O protocolo dá identidade estável a um caso; o banco de dados permite relacionar essa identidade a estados, pessoas, datas e eventos sem exigir que tudo permaneça numa única ficha física.

Também prepara parte do terreno para a [[03 artefatos/LLM Wiki|LLM Wiki]]. O parentesco não é técnico direto, mas ambos dependem de uma ideia compartilhada: memória externa ganha valor quando aquilo que foi preservado pode ser reorganizado para responder a perguntas futuras.

A diferença é decisiva. O banco relacional procura operações formalmente estruturadas sobre dados. A LLM Wiki aceita uma camada de síntese probabilística e interpretativa. **Um organiza registros; o outro também pode reorganizar significados.**

## A pergunta passa a fazer parte do armazenamento

Talvez essa seja a transformação mais profunda.

Num baú, guardar e buscar parecem momentos separados. Primeiro colocamos. Depois procuramos.

Num banco de dados, a forma de guardar é projetada já imaginando consultas. Índices, relações, chaves e schemas existem porque o futuro usuário precisará recuperar combinações ainda desconhecidas no momento do registro.

Assim, o banco de dados transforma armazenamento numa infraestrutura para perguntas.

Isso explica sua importância no percurso [[05 percursos/Como o Design Aprendeu a Guardar|Como o design aprendeu a guardar]]. O design não precisou construir um recipiente maior. Precisou separar **existência lógica de localização física**.

A pergunta arqueológica que sobra é: **quando aquilo que não cabe no schema tende a desaparecer das consultas futuras, quem está realmente desenhando a memória — quem registra os dados ou quem decidiu antecipadamente quais dados poderiam existir?**

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Banco de dados |
| **Período** | Sistemas de dados computadorizados se consolidam nos anos 1960; modelo relacional formulado em 1970 e amplamente adotado nas décadas seguintes |
| **Autoria** | Distribuída; Edgar F. Codd é autor do modelo relacional, não inventor único de bancos de dados |
| **Produto ou contexto** | Computação empresarial, sistemas administrativos, ciência, comércio, serviços digitais e infraestrutura de software |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Armazenar grandes conjuntos de registros e recuperá-los de modo confiável sem depender de memória humana ou navegação manual por arquivos |
| **Mundo antes** | Arquivos físicos, fichários, sistemas computadorizados baseados em arquivos e bancos hierárquicos ou em rede |
| **Invenção** | Não há uma invenção singular do banco de dados; sistemas anteriores precedem o modelo relacional |
| **Refinamento** | Codd propõe em 1970 o modelo relacional; posteriormente surgem linguagens declarativas, índices, transações, novos modelos de dados e bancos distribuídos |
| **Popularização** | Adoção empresarial de sistemas gerenciadores de banco de dados e expansão da computação transacional nas décadas de 1970 em diante |
| **Padronização** | Bancos relacionais e linguagens de consulta tornaram-se infraestrutura dominante em muitos sistemas, coexistindo com modelos documentais, grafos, chave-valor e outros |
| **Hipótese de design** | Dados se tornam mais reutilizáveis quando usuários podem formular o que querem recuperar sem conhecer necessariamente sua organização física interna |
| **Comportamento aproveitado** | Registrar, classificar, relacionar e consultar informação |
| **Comportamento produzido** | Formular consultas, tratar registros como entidades relacionáveis e esperar recuperação quase instantânea de grandes acervos |
| **Relação de poder** | Quem define schema, permissões e consultas define parte do que poderá existir como dado, quem poderá vê-lo e quais perguntas serão possíveis |
| **Consequências inesperadas** | Categorias rígidas podem apagar exceções; concentração de dados amplia vigilância, risco de vazamento e dependência de infraestrutura |
| **Destino ou transformação posterior** | Tornou-se infraestrutura invisível de praticamente todos os serviços digitais e se diversificou em múltiplos modelos de armazenamento |
| **Conceitos relacionados** | [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Redução de Inferências|Redução de inferências]], [[01 conceitos/Compressao do Esforco|Compressão do esforço]], [[01 conceitos/Justificabilidade|Justificabilidade]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Previsibilidade Visual|Previsibilidade visual]] |
| **Genealogia** | [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]] |
| **Percurso(s)** | [[05 percursos/Como o Design Aprendeu a Guardar|Como o Design Aprendeu a Guardar]] |
| **Parentes** | [[03 artefatos/Guarda-roupa|Guarda-roupa]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Número de Protocolo|Número de protocolo]], [[03 artefatos/LLM Wiki|LLM Wiki]] |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Armazenamento escala quando recuperação deixa de depender de conhecer a localização física e passa a depender de relações e consultas |
| **Questão em aberto** | O que desaparece da memória coletiva quando schemas transformam certas dimensões da realidade em dados e deixam outras fora daquilo que pode ser consultado? |

## Referências

[^1]: Codd, E. F. “A Relational Model of Data for Large Shared Data Banks”. *Communications of the ACM*, 13(6), 1970. O artigo critica a dependência entre usuários e representação interna e propõe um modelo baseado em relações. Registro da IBM Research: https://research.ibm.com/publications/a-relational-model-of-data-for-large-shared-data-banks

[^2]: IBM. “Edgar F. Codd”. A história institucional distingue o modelo relacional dos bancos anteriores e descreve sua proposta de permitir acesso sem conhecimento do blueprint físico dos dados. https://www.ibm.com/history/edgar-codd
