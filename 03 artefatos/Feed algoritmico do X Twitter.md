---
title: "Feed algorítmico do X/Twitter"
type: "artefato"
status: "rascunho"
tags:
  - design/artefato
  - arqueologia
---

# Feed algorítmico do X/Twitter

Durante boa parte da história inicial do Twitter, abrir a timeline significava perguntar **o que aconteceu mais recentemente?**. As publicações das contas seguidas eram organizadas em ordem cronológica inversa, e essa ordem combinava especialmente bem com a promessa cultural do serviço: acompanhar acontecimentos enquanto eles ainda estavam acontecendo.

Em 2016, o Twitter introduziu uma camada nova nessa relação com o tempo. Depois de períodos de ausência, algumas publicações consideradas mais importantes para cada pessoa passaram a aparecer primeiro. A empresa justificou a mudança dizendo que usuários seguiam centenas ou milhares de contas e podiam perder Tweets relevantes no fluxo contínuo.[^1]

A pequena alteração muda a hipótese do artefato. A cronologia assume que **recência é o melhor critério geral para organizar o presente**. O ranking assume que sinais de comportamento conseguem prever quais partes desse presente merecem chegar primeiro a cada pessoa.

## Quando o presente ganhou prioridade variável

O recurso lançado em fevereiro de 2016 ainda preservava boa parte da gramática cronológica. Os Tweets previstos como mais interessantes apareciam no topo, ainda recentes, enquanto o restante seguia abaixo em ordem cronológica inversa. A função podia ser desativada.[^1] O Twitter afirmou também ter observado mais Tweets e Retweets entre usuários que experimentavam a nova timeline, ligando explicitamente a mudança de ordenação a comportamento posterior.

No ano seguinte, a equipe de engenharia descreveu a arquitetura com mais precisão. Antes do ranking, reunia os Tweets das contas seguidas e os ordenava pelo tempo. Com o novo sistema, cada candidato recebia uma pontuação de relevância que tentava prever quanto aquele Tweet seria interessante ou envolvente para uma pessoa específica.[^2] Entre as features descritas estavam [[02 variaveis/Recência|recência]], quantidade total de interações, características do autor, histórico de interação entre usuário e autor e padrões anteriores de consumo.

Isso aproxima o Twitter do [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], introduzido no mesmo ano, mas o conflito de design é diferente. O Instagram precisava organizar abundância num fluxo visual de contas seguidas. O Twitter carregava uma identidade especialmente ligada à simultaneidade e ao acontecimento público. Inserir relevância no topo significa admitir que, mesmo numa plataforma construída em torno do “agora”, **o que acabou de acontecer pode perder prioridade para aquilo que o sistema considera mais importante para você**.

## O For You transforma timeline em descoberta

O X atual explicita duas arquiteturas lado a lado. A aba **Following** mostra publicações apenas das contas seguidas em ordem cronológica inversa. A aba **For You** reúne candidatos tanto da rede do usuário quanto de contas que ele não segue e os ranqueia com uma rede neural continuamente treinada a partir de interações como likes, reposts e replies.[^3]

O repositório aberto pelo Twitter em 2023 ajuda a ver que esse resultado não vem de uma única fórmula. O Home Mixer descreve geração de candidatos, hidratação de milhares de features, scoring por modelos de machine learning, além de filtros e heurísticas como diversidade de autores, equilíbrio entre conteúdo da rede e fora dela, fadiga de feedback, deduplicação e filtros de visibilidade.[^4]

Arqueologicamente, a transformação pode ser lida em três movimentos. Primeiro, o sistema reorganiza **quando** algo aparece. Depois, passa a prever **quanto aquilo importa para você**. Por fim, amplia o universo de candidatos e passa a decidir também **quem pode entrar no seu presente mesmo sem você ter escolhido seguir essa pessoa**.

Esse terceiro movimento altera o significado do gesto de seguir. Na timeline cronológica, seguir define quase todo o universo de candidatos. No For You, seguir continua sendo um sinal forte, mas deixa de delimitar sozinho aquilo que pode aparecer. A timeline passa a combinar relação social escolhida com descoberta algorítmica.

Ainda vamos decompor os sinais e pesos atuais em chunks separados. Por enquanto, a hipótese de design central está suficientemente clara: **um fluxo em tempo real pode se tornar mais útil quando o sistema seleciona e ordena aquilo que merece representar o presente de cada pessoa**. A tensão aberta é igualmente clara: quanto mais o sistema seleciona o presente, mais a experiência do “que está acontecendo agora” depende de uma política invisível de relevância.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Feed algorítmico do X/Twitter |
| **Período** | Ranking introduzido em 2016; evolução posterior para a arquitetura For You / Following |
| **Autoria** | Atribuição distribuída entre equipes de produto, engenharia, dados e machine learning do Twitter e posteriormente X |
| **Produto ou contexto** | Home Timeline do Twitter; atualmente abas For You e Following do X |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]], [[00 tipos de design/Design de IA|Design de IA]] |
| **Empresas ou instituições relacionadas** | Twitter / X Corp. |
| **Problema original** | Reduzir a chance de perder publicações relevantes num fluxo cronológico de grande volume |
| **Mundo antes** | Timeline de contas seguidas organizada principalmente em ordem cronológica inversa |
| **Invenção** | O Twitter não inventou ranking algorítmico; introduziu sua camada de “best Tweets first” em 2016 |
| **Refinamento** | Modelos de relevância, deep learning, candidatos fora da rede e atual separação entre For You e Following |
| **Popularização** | Incorporação do ranking à experiência principal de Home Timeline e posterior For You |
| **Padronização** | Coexistência entre feed personalizado como superfície principal de descoberta e Following como alternativa cronológica |
| **Hipótese de design** | Sinais de comportamento e relações conseguem prever melhor que a recência isolada quais partes do fluxo merecem prioridade individual |
| **Promessa** | Interpretação do projeto: permitir acompanhar “o que importa” sem exigir presença contínua no fluxo cronológico |
| **Comportamento aproveitado** | Seguir contas, curtir, repostar, responder, clicar, visitar perfis e repetir padrões de interação |
| **Comportamento produzido** | Esperar que o sistema selecione conteúdo relevante inclusive de contas não seguidas e alternar entre curadoria personalizada e cronologia |
| **Relação de poder** | A plataforma ganha capacidade de definir quais acontecimentos, autores e temas entram primeiro no campo perceptivo de cada pessoa |
| **Consequências inesperadas** | Ainda não explicitado. |
| **Destino ou transformação posterior** | A timeline ranqueada evoluiu para uma superfície de descoberta que mistura rede seguida e conteúdo recomendado |
| **Futuro prometido** | Um fluxo em que abundância e ausência temporária não impedissem o usuário de encontrar os acontecimentos considerados mais relevantes |
| **Futuro produzido** | Um presente personalizado no qual relevância prevista participa da definição do que parece estar acontecendo agora |
| **Quando a promessa virou expectativa** | Ainda não explicitado. |
| **Futuro tornado mais provável** | Plataformas em tempo real nas quais a percepção do presente é mediada por ranking personalizado |
| **Descendentes possíveis** | Ainda não explicitado. |
| **Novo problema produzido pelo sucesso** | Distinguir aquilo que está acontecendo amplamente daquilo que o sistema tornou especialmente visível para uma pessoa |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Tendência em plataformas|Tendência em plataformas]], [[01 conceitos/Feedback negativo em recomendação|Feedback negativo em recomendação]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Variáveis relacionadas** | [[02 variaveis/Recência|Recência]], [[02 variaveis/Popularidade|Popularidade]], [[02 variaveis/Afinidade inferida|Afinidade inferida]], [[02 variaveis/Propagação|Propagação]], [[02 variaveis/Momentum de atenção|Momentum de atenção]] |
| **Genealogia** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |
| **Percurso(s)** | [[05 percursos/Da Parede ao Feed|Da parede ao feed]] |
| **Parentes** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]], [[03 artefatos/Botao Like|Botão Like]] |
| **Leituras-chave** | Documentação oficial do Twitter/X sobre timeline ranking e repositório aberto do sistema de recomendação |
| **Princípio de design revelado** | Quando o volume excede a capacidade de acompanhar o fluxo, ordenar o presente exige escolher uma teoria operacional de relevância |
| **Questão em aberto** | O que muda socialmente quando cada pessoa recebe uma versão diferente do que parece estar acontecendo agora? |

## Referências

[^1]: Twitter. “Never miss important Tweets from people you follow” e “An improved timeline for consumers and brands”. 10 fev. 2016. https://blog.x.com/en_us/a/2016/never-miss-important-tweets-from-people-you-follow ; https://blog.x.com/en_us/a/2016/an-improved-timeline-for-consumers-and-brands

[^2]: Twitter Engineering. “Using Deep Learning at Scale in Twitter’s Timelines”. 9 maio 2017. https://blog.x.com/engineering/en_us/topics/insights/2017/using-deep-learning-at-scale-in-twitters-timelines

[^3]: X Help Center. “For You Home Timeline Recommendations”. Consultado em 6 out. 2026. https://help.x.com/en/resources/recommender-systems/for-you-home-timeline-recommendations

[^4]: X / Twitter. “X's Recommendation Algorithm” e “Home Mixer”. Repositório público. https://github.com/twitter/the-algorithm ; https://github.com/twitter/the-algorithm/blob/main/home-mixer/README.md
