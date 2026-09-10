---
title: "Login"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Login

Login e tela de login parecem a mesma coisa porque, durante décadas, entramos em sistemas olhando para campos de usuário e senha. Mas são artefatos diferentes.

A [[03 artefatos/Tela de Login|Tela de login]] é a interface visível do ritual. O login é a operação institucional por trás dela: **provar uma identidade suficiente para que um sistema passe a tratar ações, arquivos e permissões como pertencentes a determinado usuário**.

Essa distinção importa porque o login pode continuar existindo mesmo quando a tela desaparece. Biometria, chaves físicas, single sign-on e sessões persistentes podem tornar a autenticação quase invisível, sem eliminar a necessidade de estabelecer quem está agindo.

## Quando compartilhar computador exigiu separar pessoas

Nos primeiros contextos de computação, o acesso era fortemente condicionado pela própria escassez da máquina. Processamento em lote, cartões perfurados e operadores criavam uma separação física e organizacional entre usuários.

O time-sharing muda esse cenário. Várias pessoas passam a interagir com um mesmo computador de forma mais direta. O Compatible Time-Sharing System, CTSS, desenvolvido no MIT sob direção de Fernando Corbató, foi demonstrado em 1961 e entrou em operação cotidiana no Project MAC em 1963.[^1]

Compartilhar a infraestrutura cria um novo problema de design: se muitas pessoas usam a mesma máquina, **como o sistema sabe qual espaço, quais arquivos e quais ações pertencem a quem?**

CTSS introduz contas e passwords nesse contexto e é amplamente descrito pelo MIT como um dos primeiros sistemas computacionais a usar senhas para usuários.[^2] A importância histórica não está em imaginar uma única cena em que Corbató “inventou o login”, mas em perceber que a computação multiusuário transforma identidade em requisito operacional do software.

## Entrar é criar um contexto

Fazer login não significa apenas abrir uma porta. Depois da autenticação, o sistema muda de comportamento. Ele recupera arquivos, preferências, permissões, histórico e responsabilidades associadas àquela identidade.

Isso faz do login uma tecnologia de delimitação. O mesmo hardware ou serviço passa a conter múltiplos mundos parcialmente separados.

A metáfora da chave é útil, mas incompleta. Uma chave física normalmente responde apenas “pode entrar?”. O login pode responder também “quem entrou?”, “o que pode fazer?”, “o que deve ver?” e “a quem esta ação será atribuída?”.

É por isso que ele se conecta a [[01 conceitos/Tecnologias de Delimitacao|Tecnologias de delimitação]] e à genealogia [[04 genealogias/Limiares e Delimitacao|Limiares e delimitação]].

## Identidade virou trabalho cotidiano

À medida que contas se espalharam pela internet, o que era uma solução para ambientes computacionais compartilhados virou ritual repetido em serviços de todo tipo.

O usuário passou a memorizar nomes, senhas, códigos, perguntas de recuperação e fatores adicionais. A identidade digital deixou de ser apenas um mecanismo interno do sistema e virou tarefa de manutenção pessoal.

A antiga nota chamava isso de “fadiga de senhas”. A formulação continua válida como descrição do custo criado quando muitos sistemas delegam ao usuário a responsabilidade de produzir e lembrar segredos diferentes.

Gerenciadores de senhas, autenticação em dois fatores, passkeys, biometria e single sign-on podem ser lidos como tentativas de reduzir esse custo sem abandonar a necessidade de autenticar e autorizar.

## O limiar pode desaparecer da vista

Há uma trajetória semelhante à do [[03 artefatos/Botao Salvar|Botão salvar]]. Primeiro, uma responsabilidade técnica torna-se ação explícita. Depois, novas camadas de infraestrutura tentam absorver parte dela.

Touch ID, Face ID, chaves de segurança e sessões persistentes diminuem a necessidade de digitar credenciais conscientemente. O usuário pode “entrar” sem perceber claramente o momento do login.

Isso reduz fricção, mas também pode esconder uma decisão importante: **qual identidade está sendo usada e quais permissões ela carrega?**

Quanto mais invisível a autenticação, maior a necessidade de o sistema tornar legível o estado resultante. Entrar sem esforço é conveniente; agir sob a conta errada pode ser caro.

O login revela, assim, uma hipótese duradoura do design de sistemas: recursos compartilhados só conseguem oferecer privacidade e responsabilidade quando conseguem associar ações a identidades operacionais.

A pergunta contemporânea não é se o login vai desaparecer. É quanto de seu ritual pode desaparecer sem que o usuário perca a capacidade de entender quem o sistema pensa que ele é.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Login |
| **Período** | Consolidação em sistemas multiusuário no início dos anos 1960 |
| **Autoria** | Distribuída; CTSS e a equipe liderada por Fernando Corbató são referências centrais na história inicial de contas e passwords |
| **Problema original** | Separar identidade, arquivos, permissões e responsabilidade entre usuários de uma infraestrutura compartilhada |
| **Invenção** | Não há um único inventor ou instante isolável do login moderno |
| **Refinamento** | Contas, passwords, sessões, permissões, autenticação multifator e identidades federadas |
| **Popularização** | Sistemas multiusuário, redes e serviços web |
| **Padronização** | Fluxos de autenticação, SSO, OAuth, biometria e passkeys |
| **Comportamento aproveitado** | Provar identidade por segredo, posse ou característica pessoal para atravessar um limite |
| **Comportamento produzido** | Entrar e sair de identidades digitais e administrar credenciais como parte da vida cotidiana |
| **Hipótese de design** | Um sistema compartilhado precisa estabelecer quem age antes de decidir o que essa pessoa pode acessar ou modificar |
| **Relação de poder** | Protege privacidade e individualiza responsabilidade, mas dá ao sistema poder de admitir, excluir e registrar ações por identidade |
| **Custo invisível** | Fadiga de senhas, perda de acesso, roubo de credenciais e dependência de provedores de identidade |
| **Conceitos relacionados** | [[01 conceitos/Limiares|Limiares]], [[01 conceitos/Tecnologias de Delimitacao|Tecnologias de delimitação]] |
| **Genealogia** | [[04 genealogias/Limiares e Delimitacao|Limiares e delimitação]] |
| **Parentes** | [[03 artefatos/Tela de Login|Tela de login]], [[03 artefatos/Crachá|Crachá]], chave, passaporte, biometria |
| **Questão em aberto** | Quanto do ritual de autenticação pode desaparecer sem tornar identidade e permissão opacas demais para o usuário? |

## Referências

[^1]: Computer History Museum. *Compatible Time-Sharing System (CTSS) is Demonstrated*; MIT CSAIL, *Early Days, Project MAC, CTSS, and Multics*. As fontes registram a demonstração em 1961 e a entrada em operação cotidiana no Project MAC em 1963.

[^2]: MIT News / CSAIL. *Professor Emeritus Fernando Corbató, MIT computing pioneer, dies at 93*. O MIT descreve o CTSS como amplamente reconhecido entre os primeiros sistemas computacionais a usar passwords para usuários.