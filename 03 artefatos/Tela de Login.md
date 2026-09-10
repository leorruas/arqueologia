---
title: "Tela de login"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Tela de login

Uma tela de login parece hoje apenas uma etapa antes do que realmente queremos fazer. Digitar usuário, senha ou usar biometria é um pequeno pedágio para entrar. Mas esse gesto contém uma ideia que precisou ser inventada na computação compartilhada: o mesmo computador pode oferecer espaços diferentes para pessoas diferentes, e atravessar essa fronteira exige provar quem se é.

O login transformou identidade em uma condição de acesso. A máquina deixou de ser apenas um equipamento disponível a quem estivesse diante dela e começou a reconhecer usuários como entidades distintas, com arquivos, permissões e responsabilidades próprias.

## Quando um computador passou a ter vários “donos” ao mesmo tempo

Antes dos sistemas de time-sharing, grande parte da computação institucional funcionava por processamento em lote. Programas e dados eram preparados e submetidos para execução, frequentemente por meio de operadores, e a interação direta e contínua com a máquina era limitada. O surgimento de sistemas compartilhados em tempo real criou outro problema: várias pessoas poderiam usar o mesmo computador por terminais diferentes e precisavam manter trabalhos separados.

O Compatible Time-Sharing System, CTSS, desenvolvido no MIT sob direção de Fernando Corbató, foi uma das experiências centrais dessa transição. O sistema foi demonstrado em 1961 e depois se tornou um serviço usado por uma comunidade maior de usuários.[^1] O MIT registra que, à medida que pessoas diferentes precisavam manter seus próprios arquivos privados, o CTSS introduziu contas individuais protegidas por senhas.[^2]

A atribuição histórica merece mais cuidado do que simplesmente chamar Corbató de “criador da tela de login”. O CTSS foi trabalho de uma equipe, e a própria documentação posterior mostra vários colaboradores atuando sobre arquivos, contas, LOGIN e administração. Corbató dirigiu o projeto e costuma receber crédito pela introdução de senhas em sistemas multiusuário, mas isso não equivale a inventar sozinho todas as interfaces de autenticação posteriores.[^2][^3]

A primeira edição de *The Compatible Time-Sharing System: A Programmer's Guide*, de 1963, documenta o sistema já como ambiente de uso compartilhado, e a documentação preservada do CTSS inclui o comando `LOGIN` e lógica de contas e senhas.[^3] Uma publicação do próprio MIT situa em 1963 a adoção do password no CTSS e descreve a solução como uma forma direta de proteger conjuntos privados de arquivos.[^4]

Por isso, a data de 1961 continua importante para o nascimento do CTSS, mas usar “1961” como uma data única e definitiva de invenção da tela de login confunde o sistema, a conta, a senha e a interface. A transformação aconteceu no começo da década de 1960 e foi sendo refinada conforme o time-sharing se tornou serviço real.

## A fechadura saiu da porta e entrou no sistema

A tela de login materializa uma fronteira lógica. Antes dela, “dentro” e “fora” eram diferenças que podiam ser definidas pelo acesso físico à máquina ou pelo controle operacional. Em sistemas multiusuário, a fronteira passa a existir dentro do próprio computador: duas pessoas diante de terminais ligados à mesma infraestrutura podem encontrar arquivos e permissões diferentes.

A comparação com fechaduras, cofres e palavras secretas é útil como parentesco funcional e semiótico, não como descendência histórica direta. O login aproveita uma compreensão cultural antiga: certas coisas pertencem a espaços restritos, e atravessar uma fronteira exige uma chave ou prova. A senha digital traduz essa lógica para uma sequência que o sistema consegue verificar.

Isso conecta a tela de login a [[01 conceitos/Limiares|limiares]] e [[01 conceitos/Tecnologias de Delimitacao|tecnologias de delimitação]]. A interface comunica que há algo do outro lado, mas que o acesso não é imediato. A fricção é deliberada. Em termos de [[01 conceitos/Friccao Boa vs Friccao Ruim|fricção boa vs fricção ruim]], o inconveniente não é necessariamente falha de usabilidade: parte dele existe justamente para impedir que qualquer pessoa atravesse a fronteira sem prova.

A mesma decisão amplia algumas capacidades e reduz outras. Arquivos podem ganhar privacidade e sistemas podem personalizar ambientes por usuário. Em troca, aparecem credenciais para lembrar, guardar, recuperar e proteger. Erros de digitação, esquecimento e perda de acesso tornam-se custos recorrentes de uma arquitetura baseada em identidade verificável.

## Identidade digital virou um ritual cotidiano

Com a expansão de sistemas multiusuário, redes, serviços on-line e computadores pessoais compartilhados, autenticar-se tornou um comportamento rotineiro. Nome de usuário e senha passaram a funcionar como uma espécie de chave portátil que não ocupa o bolso, mas precisa ocupar a memória ou outro sistema de armazenamento.

Isso muda também a percepção de propriedade. Um equipamento compartilhado pode conter “meus arquivos”, “minha conta”, “minhas preferências” e “meu histórico”. O espaço privado deixa de depender de uma sala ou gaveta separada e passa a ser produzido logicamente pelo sistema.

A relação de poder é dupla. A autenticação protege o usuário contra acesso de outras pessoas, mas também permite ao sistema identificar, registrar, limitar e excluir. Quem controla as credenciais e as regras de autenticação controla uma fronteira. O desenho da tela parece uma etapa de entrada, mas por trás dela existem decisões sobre quem pode existir como usuário, quais provas são aceitas e o que acontece quando alguém falha em apresentá-las.

Essa estrutura foi refinada em single sign-on, autenticação de múltiplos fatores e biometria. [[03 artefatos/Slide to Unlock|Slide to Unlock]] é um parente de limiar porque marca a passagem entre bloqueado e disponível, embora não prove identidade da mesma forma. Crachás e chaves físicas também pertencem à mesma família funcional de acesso condicionado.

O custo invisível cresceu junto com a quantidade de sistemas. O hábito de memorizar senhas se tornou difícil de sustentar, criando gerenciadores de senhas, recuperação de conta e autenticação biométrica. Uma solução criada para separar usuários produziu, em escala, outro problema de design: como administrar dezenas de chaves para dezenas de fronteiras.

A pergunta que fica não é se vamos eliminar a tela de login. Talvez ela já esteja desaparecendo visualmente em muitos contextos. A questão é o que acontece quando a fronteira continua existindo, mas sua verificação migra para o rosto, o dedo, um dispositivo próximo ou uma identidade federada. O limiar pode ficar mais invisível sem ficar menos poderoso.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Tela de login |
| **Período** | Início dos anos 1960; CTSS demonstrado em 1961 e documentação de contas, senhas e LOGIN consolidada nos anos seguintes |
| **Autoria** | Desenvolvimento distribuído pela equipe do CTSS no MIT sob direção de Fernando Corbató; Corbató é frequentemente associado à introdução de senhas em sistemas multiusuário |
| **Produto ou contexto** | Compatible Time-Sharing System, MIT |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Separar usuários, arquivos e recursos em um computador compartilhado e permitir acesso individualizado |
| **Mundo antes** | Computação em lote e acesso mais concentrado em operadores ou uso sequencial; pouca necessidade de uma identidade interativa persistente por terminal |
| **Invenção** | Contas e senhas no CTSS transformaram identidade individual em requisito lógico de acesso a um sistema compartilhado |
| **Refinamento** | Comando LOGIN, administração de contas, permissões e interfaces posteriores tornaram autenticação uma etapa reconhecível da interação |
| **Popularização** | Sistemas multiusuário, redes, serviços on-line e computadores pessoais compartilhados |
| **Padronização** | Usuário + senha tornou-se uma convenção dominante de autenticação, depois complementada por SSO, múltiplos fatores e biometria |
| **Hipótese de design** | Um sistema compartilhado pode produzir espaços privados se conseguir distinguir identidades e condicionar acesso a uma prova |
| **Comportamento aproveitado** | Compreensão cultural de chaves, fechaduras, segredos e fronteiras de pertencimento |
| **Comportamento produzido** | Memorizar, guardar, digitar e recuperar credenciais para acessar espaços digitais personalizados |
| **Relação de poder** | Protege privacidade, mas também permite identificar, monitorar, limitar ou excluir usuários conforme regras definidas pelo sistema |
| **Consequências inesperadas** | Esquecimento de credenciais, recuperação de conta, ataques a senhas e multiplicação de chaves digitais |
| **Destino ou transformação posterior** | Coexiste com SSO, autenticação multifator, Touch ID, Face ID e outras formas em que a fronteira permanece, mas o ritual fica menos visível |
| **Conceitos relacionados** | [[01 conceitos/Limiares|Limiares]], [[01 conceitos/Tecnologias de Delimitacao|Tecnologias de delimitação]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]] |
| **Variáveis relacionadas** | [[02 variaveis/Friccao|Fricção]], [[02 variaveis/Custo do Erro|Custo do erro]], [[02 variaveis/Previsibilidade Visual|Previsibilidade visual]] |
| **Genealogia** | [[04 genealogias/Limiares e Delimitacao|Limiares e delimitação]] |
| **Percurso(s)** | [[05 percursos/Como Projetamos Fronteiras|Como Projetamos Fronteiras]] |
| **Parentes** | [[03 artefatos/Slide to Unlock|Slide to Unlock]], crachá, chave, biometria e mecanismos de autenticação |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Uma fronteira lógica se torna utilizável quando o sistema torna perceptível que existe um “fora”, um “dentro” e uma condição de passagem |
| **Questão em aberto** | O que muda na percepção de poder e privacidade quando autenticação permanece obrigatória, mas deixa de aparecer como uma tela ou gesto consciente? |

## Referências

[^1]: Computer History Museum. “1961: Compatible Time-Sharing System (CTSS) is Demonstrated”. https://www.computerhistory.org/timeline/1961/

[^2]: MIT News. “Professor Emeritus Fernando Corbató, MIT computing pioneer, dies at 93”. 15 jul. 2019. O texto registra contas individuais e senhas no CTSS para manter arquivos privados. https://news.mit.edu/2019/mit-professor-emeritus-fernando-corby-corbato-computing-pioneer-dies-0715

[^3]: Jerome H. Saltzer. “CTSS Documents”. Acervo de documentação do sistema, incluindo *The Compatible Time-Sharing System: A Programmer's Guide* de 1963, código e documentação do comando LOGIN. https://people.csail.mit.edu/saltzer/CTSS/CTSS-Documents/

[^4]: MIT Open Learning. “Twenty-five ways in which MIT has transformed computing”. A cronologia situa em 1963 o uso de passwords no CTSS e reproduz a explicação de Corbató sobre arquivos privados em terminais compartilhados. https://openlearning.mit.edu/news/twenty-five-ways-which-mit-has-transformed-computing
