---
title: "Checklist"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Checklist

Profissionais experientes esquecem coisas básicas. Essa constatação é desconfortável justamente porque contraria uma expectativa comum: quanto maior a competência, menos alguém deveria precisar de uma lista. O **checklist** transforma essa expectativa. Ele trata a memória individual como parte falível de um sistema e desloca alguns pontos críticos para um suporte externo compartilhável.

O artefato é simples o bastante para parecer banal: uma sequência de itens a confirmar. Mas sua importância histórica não está em inventar listas. Está em transformar a verificação em parte deliberada da operação de sistemas complexos. O checklist não pergunta necessariamente “o que devo fazer?”. Muitas vezes pergunta algo mais restrito e mais poderoso: **aquilo que não podia ser esquecido realmente aconteceu?**

## A lista que virou sistema de segurança

Inventários, receitas, roteiros, listas de compras e registros administrativos são muito antigos. A Boeing, portanto, não inventou a ideia de escrever itens numa sequência para lembrar o que precisa ser feito.

O episódio do Boeing Model 299, futuro B-17, é importante por outro motivo. Em 30 de outubro de 1935, o protótipo caiu durante uma demonstração em Wright Field. A investigação concluiu que os controles do leme e do profundor haviam permanecido travados, impossibilitando o piloto de controlar a aeronave.[^1] Relatos históricos da Força Aérea dos Estados Unidos associam o acidente à institucionalização de checklists operacionais na aviação durante os anos 1930.[^2]

O ponto de mudança, portanto, não é a invenção da lista. É a transformação da lista em **componente obrigatório da operação de um sistema complexo**. A experiência individual deixa de ser considerada proteção suficiente contra uma omissão simples que pode produzir consequência desproporcional.

Isso modifica o próprio significado de competência. O profissional continua responsável por perceber situações, interpretar sinais e tomar decisões que exigem julgamento. A lista assume outra função: manter visíveis ações simples cuja omissão pode ter custo alto.

Essa divisão de trabalho conecta o checklist diretamente a [[01 conceitos/Memoria Distribuida|Memória distribuída]]. A memória do procedimento deixa de existir apenas na cabeça da pessoa e passa a ser distribuída entre treinamento, ambiente, equipe e suporte escrito. Dizer que o checklist “amplia a memória de curto prazo” seria impreciso: a capacidade biológica não aumenta. Parte da necessidade de depender dela é transferida para o ambiente.

Um bom artefato cognitivo não precisa tornar o humano biologicamente melhor. Pode reorganizar a tarefa para que certas limitações importem menos.

## Uma pausa projetada antes do erro

O checklist adiciona [[02 variaveis/Friccao|Fricção]]. Antes de decolar, operar ou concluir uma atividade, alguém precisa parar e confirmar itens que talvez já conheça de cor.

Em tarefas de baixo risco, essa pausa pode parecer desperdício. Em tarefas nas quais um esquecimento simples produz consequência grave, o custo muda de sinal. Alguns segundos de verificação podem reduzir o [[02 variaveis/Custo do Erro|Custo do erro]] esperado.

Isso faz do checklist um parente importante de [[03 artefatos/Undo|Undo]], embora atuem em momentos opostos. Undo reduz parte do custo depois de determinada ação porque permite retornar. Checklist tenta impedir que certos erros aconteçam antes de a ação tornar-se difícil ou impossível de reverter.

Um protege por reversibilidade. O outro protege por verificação antecipada.

Essa diferença revela uma decisão de design importante. Nem toda boa interface deve eliminar pausas. Algumas fricções existem justamente para deslocar atenção para um momento em que ainda é barato perceber uma falha. O problema não é a existência da pausa; é se ela corresponde a um risco real ou se virou apenas ritual.

## Quando a lista vira conversa

A história da checklist cirúrgica da Organização Mundial da Saúde mostra um refinamento decisivo. A iniciativa Safe Surgery Saves Lives reuniu profissionais e organizações de diferentes países para desenvolver uma ferramenta aplicável a contextos distintos. Em junho de 2008, a OMS lançou uma checklist de segurança cirúrgica desenvolvida sob liderança de [[autores/Atul Gawande|Atul Gawande]] dentro de um esforço colaborativo internacional.[^3]

A versão consolidada possui 19 itens distribuídos em três momentos da operação: antes da indução anestésica, antes da incisão e antes de o paciente deixar a sala. A OMS destaca que o instrumento foi desenhado não apenas para reduzir erros e eventos adversos, mas também para aumentar trabalho em equipe e comunicação.[^4]

A checklist deixa então de ser apenas memória escrita. Ela cria momentos em que pessoas diferentes precisam confirmar que compartilham a mesma situação. Um item como verificar a identidade do paciente parece elementar, mas obriga o sistema a tornar explícito algo que todos poderiam simplesmente pressupor.

Esse refinamento redistribui autoridade. Um especialista pode interpretar a lista como sinal de que sua experiência está sendo questionada. O artefato, porém, não precisa eliminar julgamento profissional. Ele estabelece que determinados passos são importantes demais para depender apenas de julgamento, hábito ou memória individual.

A hipótese muda o modelo de competência: um sistema seguro não é aquele que encontra pessoas incapazes de esquecer. É aquele que assume que pessoas, inclusive excelentes profissionais, podem esquecer e projeta barreiras adequadas ao risco.

Gawande ajudou a popularizar essa leitura na medicina com *The Checklist Manifesto*, mas a checklist cirúrgica da OMS não deve ser atribuída a ele individualmente. Ela foi resultado de consulta e colaboração internacional.[^5]

## Quando marcar substitui verificar

A principal fragilidade do checklist aparece quando a forma sobrevive à função. Itens podem ser marcados sem atenção, equipes podem aprender a “passar pela lista” e sinais inesperados fora dela podem receber menos atenção.

Isso não significa que listas necessariamente produzam cegueira. Significa que **cumprimento formal e função cognitiva não são a mesma coisa**. Uma checklist pode estar preenchida e ainda não ter sido realmente executada.

É a mesma tensão encontrada no [[03 artefatos/Carimbo|Carimbo]]: a marca de que uma etapa aconteceu pode sobreviver mesmo quando a ação substantiva que justificava a marca se enfraquece. Por isso, checklists precisam ser desenhadas, testadas e revisadas. Listas excessivamente longas, genéricas ou desconectadas do fluxo real aumentam fricção sem proteger adequadamente a operação.

Também vale distinguir parentes que a linguagem cotidiana costuma misturar. Uma receita explica como produzir algo; um inventário registra o que existe; um roteiro orienta uma sequência; um procedimento operacional pode instruir detalhadamente uma tarefa. O checklist, em sua forma mais característica, **confirma pontos críticos**. Um piloto experiente pode saber exatamente como operar a aeronave e ainda consultar a lista para verificar que nenhuma condição importante foi omitida.

Por isso, wizards, fluxogramas e assistentes passo a passo são parentes funcionais, não equivalentes. Alguns dizem o que fazer. Outros dizem onde você está. O checklist pergunta se aquilo que precisava acontecer realmente aconteceu.

## Uma infraestrutura minúscula de confiabilidade

O checklist é barato porque não tenta aumentar dramaticamente a inteligência de quem o usa. Ele torna parte do sistema menos dependente de uma faculdade humana sabidamente limitada.

Essa característica ajuda a explicar sua disseminação por aviação, medicina, engenharia, auditoria, manutenção e software. Quanto maior a diferença entre “fácil de esquecer” e “caro demais para esquecer”, maior o território potencial do checklist.

A decisão de design parece pequena: escrever uma sequência e exigir uma confirmação. O efeito pode ser enorme porque muda onde a confiabilidade mora. Ela deixa de depender apenas da excelência individual e passa a ser parcialmente incorporada à arquitetura da operação.

A hipótese central pode então ser formulada assim: **confiabilidade não exige heróis com memória perfeita; exige sistemas que saibam onde a memória humana não deve ser o único ponto de falha**.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Checklist |
| **Período** | Listas são antigas; checklist operacional moderno consolidado na aviação dos anos 1930 e posteriormente difundido em outras áreas |
| **Autoria** | Não há inventor identificável da lista; equipes de aviação institucionalizaram o checklist operacional, e a checklist cirúrgica da OMS foi desenvolvida por colaboração internacional sob liderança de Atul Gawande |
| **Produto ou contexto** | Aviação, cirurgia, manutenção, auditoria, engenharia e operações digitais |
| **Tipo(s) de design** | Relação disciplinar ainda não classificada. |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Impedir que etapas simples e críticas sejam omitidas em sistemas cuja complexidade torna arriscado depender apenas da memória individual |
| **Mundo antes** | Listas e procedimentos já existiam, mas muitas operações dependiam mais fortemente de treinamento, hábito e memória do especialista |
| **Invenção** | Não há uma invenção única do formato; a aviação dos anos 1930 é um marco documentado de sua institucionalização como instrumento operacional de segurança |
| **Refinamento** | Checklists por fase, verbais, colaborativos, digitais e adaptados ao contexto; a checklist cirúrgica da OMS amplia a função de memória para coordenação de equipe |
| **Popularização** | Aviação e, posteriormente, segurança médica, especialmente com a iniciativa da OMS e a divulgação por Gawande |
| **Padronização** | Tornou-se componente esperado de muitas operações de alto risco e processos de controle |
| **Hipótese de design** | Especialistas continuam sujeitos a omissões; sistemas confiáveis externalizam os poucos pontos em que esquecer tem custo desproporcional |
| **Comportamento aproveitado** | Capacidade de reconhecer itens, seguir sequências curtas e confirmar estados explícitos |
| **Comportamento produzido** | Pausas institucionais de checagem e confirmação mútua antes de momentos críticos |
| **Relação de poder** | Retira do especialista individual a autoridade implícita de decidir que certos passos dispensam conferência e distribui parte da segurança para procedimento e equipe |
| **Consequências inesperadas** | Ritualização, preenchimento automático, listas excessivas e falsa sensação de segurança quando marcar substitui verificar |
| **Destino ou transformação posterior** | Amplamente incorporado a operações físicas e digitais, especialmente onde segurança, rastreabilidade e coordenação são críticas |
| **Conceitos relacionados** | [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]], [[01 conceitos/Justificabilidade|Justificabilidade]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo do Erro|Custo do erro]], [[02 variaveis/Friccao|Fricção]], [[02 variaveis/Previsibilidade Visual|Previsibilidade visual]] |
| **Genealogia** | [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]], [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]], [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] |
| **Percurso(s)** | Ainda não integrado a um percurso editorial. |
| **Parentes** | [[03 artefatos/Undo|Undo]], [[03 artefatos/Carimbo|Carimbo]], receita, roteiro, procedimento operacional padrão, wizard e fluxograma |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Quando a consequência de esquecer é grande, o ambiente deve lembrar junto com a pessoa |
| **Questão em aberto** | Como desenhar uma checklist que continue provocando atenção real depois que seus itens se tornaram rotina? |

## Referências

[^1]: National Museum of the United States Air Force. “Model 299 Crash”. Registro da investigação do acidente de 30 de outubro de 1935 e da condição travada dos controles de leme e profundor. https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/610002/model-299-crash/

[^2]: Schultz, Timothy P. “Where did checklists come from?”. *Air Combat Command*, 7 mar. 2012. O texto relaciona o acidente do Model 299 à adoção de checklists operacionais e cita o manual do B-17 como evidência de sua institucionalização. https://www.acc.af.mil/News/Article/200135/where-did-checklists-come-from/

[^3]: World Health Organization. “New checklist to help make surgery safer”. 24 jun. 2008. Fonte para o lançamento da checklist, sua estrutura em três fases e o caráter colaborativo da iniciativa Safe Surgery Saves Lives. https://www.who.int/news/item/24-06-2008-new-checklist-to-help-make-surgery-safer

[^4]: World Health Organization. “WHO Surgical Safety Checklist — Tools and resources”. A OMS descreve a checklist de 19 itens como instrumento desenvolvido após consulta ampla para reduzir erros e eventos adversos e aumentar trabalho em equipe e comunicação. https://www.who.int/teams/integrated-health-services/quality-of-care-and-patient-safety/patient-safety-guidance-and-tools/safe-surgery/tool-and-resources

[^5]: Gawande, Atul. *The Checklist Manifesto: How to Get Things Right*. Metropolitan Books, 2009. Referência de popularização e interpretação do checklist em sistemas complexos.