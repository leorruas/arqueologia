---
title: "Afinidade inferida"
type: "variavel"
status: "rascunho"
eixo: "baixa ↔ alta afinidade estimada pelo sistema"
tags:
  - design/variavel
  - arqueologia
---

# Afinidade inferida

Duas pessoas podem seguir a mesma conta e receber posições diferentes para a próxima publicação dela. **Afinidade inferida** compara quanto um sistema estima que existe uma relação de interesse, proximidade ou relevância entre um usuário e um autor, item, tema ou conjunto de conteúdos.

**Eixo:** baixa ↔ alta afinidade estimada pelo sistema.

O qualificativo “inferida” é essencial. Sistemas de recomendação aprendem preferências a partir de feedback explícito e implícito, mas interação observada não equivale a preferência declarada. Hu, Koren e Volinsky mostram por que feedback implícito precisa ser tratado em termos de confiança e incerteza: consumir ou clicar produz evidência, enquanto não interagir continua ambíguo.[^1]

## Relação vivida e relação modelada podem divergir

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]], histórico de interação entre pessoas, atividade anterior e características do conteúdo podem participar das previsões de ranking. O sistema constrói uma representação operacional suficiente para ordenar candidatos; essa representação não precisa coincidir com a maneira como o usuário descreveria seus próprios vínculos.

No X/Twitter, essa relação aparece em sinais como contas seguidas, Topics seguidos, posts curtidos pela pessoa, posts curtidos por sua rede e contas seguidas pela rede. A afinidade operacional pode ser construída tanto por vínculo direto quanto por proximidade social e padrões compartilhados.

No [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]], seguir cria uma evidência relacional explícita, mas não é a única fonte de afinidade. Curtir, compartilhar, comentar, assistir ou pesquisar conteúdos semelhantes também podem ajudar o sistema a inferir proximidade com temas e criadores. Sons e hashtags ajudam a descrever o objeto; a afinidade aparece quando esses descritores são relacionados ao histórico de uma pessoa.

A variável permite observar esse descompasso. Uma pessoa pode visitar repetidamente um perfil por conflito, trabalho ou curiosidade e produzir rastros que o sistema interprete como afinidade. Da mesma forma, uma relação importante pode gerar pouco comportamento mensurável.

Por isso, afinidade inferida não deve ser usada como sinônimo de amizade, preferência consciente ou identidade. Ela mede a força de uma relação **modelada para uma decisão computacional**.

## Como observar

Em sistemas públicos, raramente conhecemos o valor interno da afinidade. Podemos inferir sua presença a partir de documentação, experiências controladas, padrões de exposição e mudanças após interações. Em sistemas experimentais, ela pode aparecer como similaridade de embeddings, probabilidade de interação, peso de histórico ou outro score relacional.

Quanto mais esse valor influencia ranking, mais uma hipótese passada do sistema participa da exposição futura. Surge um circuito: a afinidade inferida aumenta exposição; maior exposição cria mais oportunidades de interação; essas interações podem fortalecer a própria afinidade inferida.

A distinção também interessa a quem observa alcance fora de sua rede. A exposição a *não seguidores* mede ausência de um vínculo explícito com o autor, mas não mede distância temática, social ou política em relação aos seguidores. Um modelo pode identificar alta afinidade com uma publicação entre pessoas que nunca encontraram aquele perfil. Em diálogo com [[02 variaveis/Propagação|propagação]] e com [[05 percursos/Do artefato ao sinal em feeds algoritmicos|Do artefato ao sinal em feeds algorítmicos]], isso abre a hipótese da travessia entre públicos: a distribuição pode crescer sem alcançar repertórios efetivamente distintos.

## Quando a previsão também modifica as oportunidades

A afinidade inferida pode participar de um circuito de retroalimentação. Uma estimativa de proximidade aumenta a chance de determinado conteúdo aparecer, e essa exposição oferece novas ocasiões para assistir, compartilhar, discordar ou seguir. Se algumas dessas ações forem usadas como feedback, o sistema poderá atualizar suas próximas previsões. O mecanismo não exige que o modelo conheça uma preferência interior estável: ele trabalha com sinais produzidos em condições de exposição que o próprio ranking ajudou a organizar.

A pergunta mais difícil ultrapassa a precisão do ranking. Uma pessoa pode se tornar mais familiarizada com um tema por encontrá-lo repetidamente, passar a reconhecer seus formatos e adquirir repertórios para interagir com ele. **A hipótese de que a distribuição participa da formação de preferências futuras** merece investigação, mas não se deduz do funcionamento técnico de um recomendador. Familiaridade, interesse, concordância e mudança de crença são resultados distintos, sujeitos à escolha ativa da pessoa e a influências fora da plataforma.

Essa leitura amplia a relação com [[01 conceitos/Engajamento em plataformas digitais|engajamento em plataformas digitais]] e [[01 conceitos/Dispositivo|dispositivo]]: as previsões participam de uma infraestrutura que atribui oportunidades diferentes de visibilidade, enquanto instituições e práticas podem transformar essa diferença em incentivo de produção. A variável continua sendo **afinidade estimada pelo sistema**; não a transformamos em medida de preferência verdadeira, identidade ou efeito psicológico.

## Quando uma exposição temporária deixa uma relação duradoura

Um experimento com usuários do X, realizado em 2023 e publicado por Gauthier e colaboradores em 2026, ajuda a investigar o limite desta variável.[^3] Participantes que passaram do feed cronológico para o algorítmico receberam mais conteúdo político conservador e tiveram alterações em determinadas opiniões. Parte deles passou a seguir novas contas de ativistas conservadores, mantendo-as entre as contas seguidas depois de deixar o feed algorítmico.

A distinção é importante: **uma previsão de afinidade opera sobre oportunidades de exposição, enquanto a decisão de seguir pode criar uma condição duradoura para exposições posteriores**. Mesmo quando a regra de ordenação muda, relações constituídas durante o período anterior podem permanecer. Esse resultado é específico à amostra, ao X de 2023 e ao desenho experimental; não autoriza inferir que todo conteúdo recebido transforma preferências ou que qualquer sistema de recomendação produzirá o mesmo efeito.

Para estudos do Arqueologia do Design, convém observar separadamente afinidade estimada, conteúdo efetivamente visto, interação, seguimento, mudança de repertório e opinião declarada. Esses eventos podem participar do mesmo percurso e ainda representar fenômenos diferentes. O primeiro é uma variável operacional do sistema; os últimos requerem medidas adicionais do comportamento e da experiência humana.

## O histórico de quem recebe e a condição de quem publica

Uma decisão de recomendação pode incorporar relações diferentes. O histórico do **destinatário** permite selecionar candidatos relacionados a seus interesses ou prever a probabilidade de interagir com eles. O Instagram documentou, em 2020, uma consulta exemplificativa baseada em até trinta curtidas e similaridade entre contas; em 2023, descreveu a seleção de itens semelhantes àqueles anteriormente curtidos, salvos ou compartilhados no Explore.[^4][^5] Essas fontes demonstram técnicas de recuperação, mas não estabelecem quanto tempo todo histórico permanece relevante em 2026.

Já a condição da **conta criadora** pode afetar elegibilidade independentemente da afinidade estimada. A Meta anunciou, em 2024, limites para contas que republicavam repetidamente conteúdo não original e critérios de restrição de recomendações para contas com violações reiteradas.[^6] Isso não constitui uma medida de afinidade entre dois usuários: é uma regra de entrada aplicada à possibilidade de recomendar determinado conteúdo ou origem. A [[03 artefatos/Feed algoritmico do Instagram|arqueologia do feed do Instagram]] distingue memória relacional, estado de recomendabilidade da conta, elegibilidade da publicação e recepção inicial.

Um conteúdo elegível pode receber pontuação diferente para dois destinatários, enquanto uma conta temporariamente inelegível pode ficar fora de certas recomendações mesmo quando algumas pessoas teriam forte interesse em seu conteúdo. Distinguir essas camadas impede deduzir uma regra de punição ideológica apenas da comparação entre visualizações.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Afinidade inferida |
| **Eixo** | Baixa ↔ alta afinidade estimada pelo sistema |
| **Definição operacional** | Força estimada de uma relação de relevância entre usuário e autor, item, tema ou conjunto de conteúdos |
| **Como observar** | Scores de similaridade, probabilidade prevista de interação, histórico relacional e mudanças de ranking após novas interações |
| **O que não mede sozinho** | Amizade, preferência consciente, satisfação, intenção ou identidade |
| **Trade-offs principais** | Personaliza distribuição, mas pode reforçar interpretações antigas, ambíguas ou autoalimentadas do comportamento |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]], [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Dispositivo|Dispositivo]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Hu, Yifan; Koren, Yehuda; Volinsky, Chris. “Collaborative Filtering for Implicit Feedback Datasets”. *2008 Eighth IEEE International Conference on Data Mining*, 2008, pp. 263–272. DOI: https://doi.org/10.1109/ICDM.2008.22

[^2]: Meta AI. “Instagram Feed Ranking System Card”. 23 fev. 2022. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/

[^3]: Gauthier, Germain et al. “The political effects of X’s feed algorithm”. *Nature*, 652, 2026, pp. 416–423. Experimento em 2023 com participantes dos EUA, alternando feed cronológico e algorítmico por sete semanas. https://doi.org/10.1038/s41586-026-10098-2

[^4]: Meta Engineering. “How Instagram suggests new content”. 10 dez. 2020. https://engineering.fb.com/2020/12/10/web/how-instagram-suggests-new-content/

[^5]: Meta Engineering. “Scaling the Instagram Explore recommendations system”. 9 ago. 2023. https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/

[^6]: Meta. “Ajudando o criador de conteúdo a encontrar novos públicos”. 30 abr. 2024. https://about.fb.com/br/news/2024/04/ajudando-o-criador-de-conteudo-a-encontrar-novos-publicos/
