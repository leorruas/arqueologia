---
title: "Viés de duração"
type: "conceito"
status: "rascunho"
origem: "literatura"
grau: "consolidado"
tags:
  - design/conceito
  - arqueologia
---

# Viés de duração

Dois vídeos podem produzir o mesmo interesse e gerar tempos assistidos muito diferentes simplesmente porque têm durações diferentes. **Viés de duração** descreve a distorção que aparece quando o comprimento do conteúdo influencia a métrica usada como proxy de preferência.

O problema é especialmente importante em recomendação de vídeo curto. Trabalhos sobre microvídeo mostram que watch time bruto tende a favorecer conteúdos mais longos porque eles oferecem mais oportunidade de acumular segundos, mesmo quando o interesse subjacente não é maior.[^1] Outros trabalhos tratam a duração como um fator de confusão na previsão de watch time e propõem estimar quanto tempo a pessoa permaneceria se a duração não truncasse a observação.[^2]

Em 2026, pesquisadores da ByteDance propuseram uma forma de corrigir watch time comparando cada observação com distribuições de referência condicionadas ao usuário e ao item. O trabalho parte justamente do problema de que tempo bruto é influenciado por duração, popularidade e hábitos individuais e não deve ser lido diretamente como satisfação.[^3] Isso é evidência sobre sistemas industriais de vídeo e pesquisa da ByteDance, não uma divulgação da fórmula exata do [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]].

## Segundos, proporção e conclusão respondem a perguntas diferentes

**Watch time absoluto** pergunta quantos segundos foram assistidos.

**Proporção assistida** pergunta quanto do vídeo foi consumido em relação à sua duração.

**Conclusão** pergunta se o fim foi alcançado.

**Replay** indica que algum trecho ou o vídeo inteiro foi reproduzido novamente, mas pode ocorrer por interesse, dificuldade de compreensão, loop automático ou outras razões.

Nenhuma dessas medidas é uma leitura direta da preferência. Em um experimento de 2026 com usuários de TikTok, a duração do vídeo foi a feature de metadata mais forte para prever se um vídeo seria assistido até o fim, mostrando que até a conclusão precisa ser interpretada em relação ao tamanho do conteúdo.[^4]

Por isso, o problema não se resolve trocando “segundos assistidos” por “taxa de conclusão”. O desafio é modelar interesse sem deixar que características estruturais do item sejam confundidas com a resposta humana que se pretende inferir.

## O TikTok torna o problema visível

A documentação atual do TikTok afirma que, no Para Você, interações incluem conteúdo curtido, compartilhado, comentado, assistido integralmente ou pulado; para a maioria das pessoas, interações como tempo assistido costumam receber peso maior que outros fatores.[^5] Em 2020, a empresa também usou como exemplo de sinal forte assistir um vídeo mais longo do começo ao fim.[^6]

A escolha do exemplo é reveladora: duração e conclusão já aparecem juntas. O sistema não pode interpretar “assistiu 20 segundos” sem saber se o vídeo tinha 21 segundos ou 10 minutos.

No [[03 artefatos/Feed de Videos Curtos|feed de vídeos curtos]], isso cria uma pressão de design importante. Alterar duração modifica a própria régua pela qual o comportamento pode ser observado. A duração deixa de ser apenas formato editorial e participa das condições de mensuração.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Viés de duração |
| **Origem** | Literatura |
| **Grau de consolidação** | Consolidado em pesquisa de recomendação de vídeo, com diferentes propostas de correção |
| **Formulação associada a** | Pesquisa de watch-time prediction e debiasing em recomendação de microvídeos |
| **Área principal** | Sistemas de recomendação / aprendizado de máquina |
| **Distinção central** | Comportamento observado ↔ distorção introduzida pelo comprimento do item |
| **O que ajuda a explicar** | Por que watch time, proporção assistida e conclusão não podem ser comparados ingenuamente entre vídeos de durações diferentes |
| **O que não explica sozinho** | Interesse, satisfação, qualidade ou intenção do usuário |
| **Artefatos-chave** | [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]], [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]] |
| **Variáveis relacionadas** | [[02 variaveis/Tempo de permanência|Tempo de permanência]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Quan, Yuhan; Ding, Jingtao; Gao, Chen; Li, Nian; Yi, Lingling; Jin, Depeng; Li, Yong. “Alleviating Video-length Effect for Micro-video Recommendation”. *ACM Transactions on Information Systems*, 42(2), 2024, art. 44. DOI: https://doi.org/10.1145/3617826

[^2]: Zhao, Haiyuan; Cai, Guohao; Zhu, Jieming; Dong, Zhenhua; Xu, Jun; Wen, Ji-Rong. “Counteracting Duration Bias in Video Recommendation via Counterfactual Watch Time”. *KDD ’24*, 2024, pp. 4455–4466. DOI: https://doi.org/10.1145/3637528.3671817

[^3]: Liu, Emily; Han, Kuan; Zhan, Minfeng; Zhao, Bocheng; Mu, Guanyu; Song, Yang. “Relative Advantage Debiasing for Watch-Time Prediction in Short-Video Recommendation”. *AAAI-26*, 40(18), 2026, pp. 15296–15305. DOI: https://doi.org/10.1609/aaai.v40i18.38555

[^4]: “Exploring the Limits of Predicting User Watching Behavior with Short-Form Videos on TikTok”. *WebSci ’26 Companion*, 2026. DOI: https://doi.org/10.1145/3795513.3810457

[^5]: TikTok Support. “How TikTok recommends content”. Consultado em 6 out. 2026. https://support.tiktok.com/en/using-tiktok/exploring-videos/how-tiktok-recommends-content

[^6]: TikTok Newsroom. “Como o TikTok recomenda os vídeos para o feed #ParaVocê”. 18 jun. 2020. https://newsroom.tiktok.com/como-o-tiktok-recomenda-os-videos-para-o-feed-paravoce?lang=pt-BR
