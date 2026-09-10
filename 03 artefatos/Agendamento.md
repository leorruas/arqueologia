---
title: "Agendamento"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Agendamento

Uma fila decide a ordem depois que as pessoas chegam. O **agendamento** faz uma operação mais radical: tenta distribuir o acesso antes mesmo que elas estejam presentes. Em vez de perguntar “quem chegou primeiro?”, o sistema pergunta “quem ocupará este intervalo futuro?”.

O artefato transforma tempo disponível em slots que podem ser prometidos.

## O problema da chegada sem acordo

Muitos serviços funcionaram e ainda funcionam por comparecimento espontâneo. A pessoa chega durante determinado período, informa o que precisa e espera até que o prestador tenha capacidade para atendê-la. Esse modelo preserva espontaneidade, mas concentra a incerteza no momento da chegada.

A nota anterior tratava esse arranjo como se fosse universalmente anterior ao agendamento e descrevia sociedades passadas como operando com “noções vagas de tempo”. Essa formulação não se sustenta. Calendários, relógios, compromissos, audiências, cerimônias e encontros marcados têm histórias muito anteriores ao século XIX.

O que chamamos hoje de **appointment system** é uma forma específica de organizar serviços: reservar previamente parcelas de capacidade para pessoas ou tarefas identificadas.

Essa forma não aparece de uma vez. Ela se desenvolve de maneiras diferentes em medicina, comércio, transporte, administração e serviços profissionais.

## Da hora de atendimento ao horário individual

Uma distinção ajuda a entender a inovação. Um consultório pode dizer “atendo das 8h às 12h”. Isso sincroniza profissional e público, mas ainda deixa várias pessoas competirem pelo mesmo intervalo. Um sistema de agendamento diz “você será atendido às 9h20”. Agora uma parcela do tempo foi associada antecipadamente a uma pessoa.

A história da medicina oferece uma documentação interessante dessa passagem. No fim do século XIX, médicos já usavam horários de consultório e livros para organizar visitas e compromissos futuros. Mas sistemas padronizados de consultas por horário disseminaram-se gradualmente ao longo do século XX.

Na atenção primária britânica, por exemplo, o modelo de **open surgery** permitia que pacientes simplesmente comparecessem durante as horas de atendimento e fossem atendidos segundo a ordem prática do serviço. Sistemas de appointment passaram a substituir esse arranjo progressivamente: cerca de 15% dos médicos generalistas usavam algum esquema de consultas marcadas em 1964; em 1977, a proporção chegava a cerca de 75%.

Essa história mostra que a inovação não é simplesmente possuir relógios mais precisos. É **usar precisão temporal para pré-alocar capacidade de serviço**.

## A fila deslocada para o futuro

[[03 artefatos/Fila|Fila]] e agendamento resolvem o mesmo problema de escassez por estratégias diferentes. A fila conserva flexibilidade de chegada, mas exige espera depois que a pessoa se apresenta. O agendamento tenta converter parte dessa espera presencial em compromisso futuro.

Em vez de o usuário pagar todo o custo temporal no local do serviço, ele recebe uma posição antecipada. Isso aumenta previsibilidade, mas cria outra obrigação: chegar no intervalo reservado.

É por isso que o agendamento pertence à genealogia [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]]. Ele cria uma promessa temporal recíproca. O usuário promete estar disponível; o prestador promete reservar capacidade.

A frase “marcar um horário” esconde uma negociação bastante sofisticada entre duas agendas.

## Quando o tempo vira inventário

Para agendar, o sistema precisa representar capacidade futura como unidades operáveis. Um profissional pode ter oito horários; uma sala, quatro reservas; um voo, determinado número de assentos; um serviço, janelas de entrega.

Isso aproxima agendamento de [[03 artefatos/Calendário|Calendário]], mas não o torna seu descendente direto. O calendário oferece referências temporais compartilhadas. O agendamento usa essas referências para associar um recurso a alguém durante um intervalo.

Em termos de design de serviços, há uma transformação conceitual importante: **tempo futuro passa a ser tratado como estoque**. Um slot pode estar livre, reservado, bloqueado, cancelado ou novamente disponível.

Essa estrutura aumenta [[02 variaveis/Expectativa de Disponibilidade|Expectativa de Disponibilidade]]. O usuário não precisa apenas esperar que o serviço possa atendê-lo; recebe uma indicação de quando essa capacidade deverá existir.

## Previsibilidade para quem?

O agendamento é frequentemente apresentado como benefício mútuo. Ele pode reduzir espera presencial para usuários e suavizar demanda para prestadores. Mas a distribuição de poder depende das regras concretas.

Quem define a duração do slot? Quem pode cancelar? Quanto atraso é tolerado? Existe encaixe? O usuário perde o atendimento se chegar cinco minutos depois? O prestador sofre alguma consequência se atrasar quarenta?

Essas decisões revelam que agendamento também é uma política de acesso. A interface aparentemente neutra de horários disponíveis contém regras sobre prioridade, capacidade e risco.

Uma pesquisa histórica sobre medicina ambulatorial nos Estados Unidos mostra outra transformação relevante: sistemas iniciais podiam ser altamente personalizados, com assistentes ajustando a duração conforme paciente, atividade clínica e preferência do médico. À medida que o agendamento foi centralizado em organizações maiores, slots padronizados tornaram-se mais comuns. A eficiência de coordenação veio acompanhada de perda de adaptação local.

O problema não é apenas marcar horário. É decidir **qual unidade de tempo o sistema considera suficiente para uma pessoa**.

## A autonomia que vem com uma obrigação

A versão anterior dizia que agendamento “enfraquece a espontaneidade”, e essa tensão permanece. Reservar um horário reduz incerteza, mas transforma o futuro em compromisso. A pessoa ganha a capacidade de planejar e perde parte da liberdade de aparecer quando quiser.

A pontualidade também muda de significado. Em uma fila, chegar depois normalmente significa ocupar posição posterior. Em um agendamento, chegar depois pode significar violar uma promessa específica e afetar todos os slots seguintes.

Daí surgem comportamentos de confirmação, lembrete, cancelamento e reagendamento. O sistema precisa administrar não apenas presença, mas a possibilidade de que o futuro planejado não aconteça como previsto.

No-show é, nesse sentido, uma falha característica do agendamento: capacidade foi preservada para uma pessoa que não a utilizou enquanto outras talvez precisassem dela.

## Quando o usuário agenda a si mesmo

Durante muito tempo, marcar um horário exigia interação com outra pessoa: telefonar, ir ao balcão, trocar mensagens. Sistemas digitais de self-scheduling comprimiram essa negociação.

Uma interface como Calendly mostra apenas os intervalos permitidos e deixa o usuário escolher. A negociação entre duas agendas é parcialmente transformada em regras anteriores: duração, buffers, dias disponíveis, antecedência mínima, número máximo de reuniões e fusos horários.

Isso aumenta autonomia operacional do usuário, mas também expõe uma nova camada de poder. Quem configura a agenda determina silenciosamente quais possibilidades serão oferecidas.

O sistema parece dizer “escolha qualquer horário”, quando na verdade diz “escolha qualquer horário dentro do conjunto que já foi considerado aceitável”.

## Agendamento e ansiedade

A nota anterior associava o artefato diretamente à ansiedade de pontualidade e às reuniões consecutivas. Essas consequências são plausíveis em determinados regimes de trabalho, mas não pertencem automaticamente ao ato de agendar.

A crítica pode ser formulada com mais precisão: quando sistemas tornam o tempo altamente divisível e fácil de reservar, aumenta a capacidade de preencher pequenos intervalos com compromissos. Calendários digitais e reuniões remotas reduzem custos de coordenação e podem, justamente por isso, elevar a densidade da agenda.

Aqui reaparece uma regra recorrente do projeto: **reduzir fricção não reduz necessariamente pressão; às vezes permite que mais coisas disputem o mesmo recurso**.

## Referências

1. Michelle-Linh T. Nguyen, Samuel V. Schotland e Joel D. Howell. “From Individualized Interactions to Standardized Schedules: A History of Time Organization in U.S. Outpatient Medicine”. *Annals of Internal Medicine*, 2022.
2. Martin D. Moore. “Waiting for the Doctor: Managing Time and Emotion in the British National Health Service, 1948–80”. *Twentieth Century British History*, 2022.
3. Smithsonian National Museum of American History. Coleções de livros de compromissos profissionais e odontológicos, como documentação material de práticas de agendamento.
4. Literatura de teoria das filas, gestão de capacidade e design de serviços como referência para os trade-offs contemporâneos.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Agendamento |
| **Período** | Práticas de compromissos são antigas; sistemas de appointments em serviços modernos desenvolveram-se gradualmente e foram amplamente padronizados no século XX |
| **Autoria** | Sem inventor único; evolução distribuída entre profissões, organizações e sistemas administrativos |
| **Produto ou contexto** | Consultórios, serviços profissionais, transportes, repartições, reservas e plataformas digitais Categoria: Design de serviços / coordenação temporal / acesso |
| **Problema original** | Reduzir incerteza e espera produzidas quando várias pessoas disputam uma capacidade que só existe em determinados momentos |
| **Mundo antes** | Horários gerais de atendimento, comparecimento espontâneo, visitas negociadas individualmente e filas coexistiam com diversas formas de compromisso temporal |
| **Invenção** | Não há ponto único documentado; diferentes serviços desenvolveram formas de reservar capacidade antecipadamente |
| **Refinamento** | Livros de appointment, telefonia, recepção especializada, slots padronizados, confirmação, lembretes e regras de reagendamento |
| **Popularização** | Expansão dos serviços profissionais e de saúde e crescimento de sistemas administrativos no século XX |
| **Padronização** | Agendas eletrônicas e plataformas de reserva transformaram slots em unidade operacional comum de muitos serviços |
| **Hipótese de design** | O agendamento substitui parte da espera presente por uma promessa sobre capacidade futura Hipótese sobre o comportamento humano: Pessoas aceitam compromissos futuros quando recebem uma expectativa suficientemente confiável de acesso em troca |
| **Comportamento aproveitado** | Capacidade de planejar e cumprir compromissos usando referências temporais compartilhadas |
| **Comportamento produzido** | Reservar serviços antecipadamente, confirmar presença, reagendar e organizar atividades em torno de slots |
| **Relação de poder** | Quem define duração, disponibilidade, tolerância a atraso e regras de cancelamento controla parte importante do acesso ao serviço |
| **Consequências inesperadas** | Quanto mais fácil reservar tempo, maior pode ser a densidade de compromissos disputando a agenda Capacidade ampliada: Previsibilidade para usuário e prestador e distribuição antecipada da demanda Capacidade reduzida ou deslocada: Menor espontaneidade e necessidade de assumir compromisso temporal antes da necessidade ser atendida Custo invisível: Slots ociosos por no-show, rigidez, padronização inadequada de durações e transferência de risco temporal entre usuário e prestador |
| **Destino ou transformação posterior** | De negociação humana e livros físicos a plataformas digitais que expõem e alocam disponibilidade automaticamente Legado: Sistemas de reserva, calendários compartilhados, self-scheduling, Calendly e automações de reuniões |
| **Conceitos relacionados** | [[01 conceitos/Sincronizacao|Sincronização]], [[01 conceitos/Tecnologia de Acesso|Tecnologia de Acesso]], [[01 conceitos/Distribuicao de Escassez|Distribuição de Escassez]] |
| **Variáveis relacionadas** | [[02 variaveis/Atrito Decisorio|Atrito Decisório]], [[02 variaveis/Justica|Justiça]], [[02 variaveis/Expectativa de Disponibilidade|Expectativa de Disponibilidade]], [[02 variaveis/Custo Transacional|Custo Transacional]] |
| **Genealogia** | [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]], [[04 genealogias/Acesso e Disponibilidade|Acesso e disponibilidade]] Família de ideias: Tecnologias de pré-alocação de capacidade |
| **Parentes** | [[03 artefatos/Fila|Fila]], [[03 artefatos/Calendário|Calendário]] |
| **Princípio de design revelado** | Escassez pode ser coordenada antes do encontro quando o sistema consegue representar capacidade futura como unidades reserváveis Por que funcionou: Converte capacidade futura em unidades reserváveis e desloca parte da espera do espaço físico para a organização antecipada |
| **Questão em aberto** | Quando automatizar o agendamento aumenta autonomia e quando apenas torna mais eficiente a ocupação do tempo de uma pessoa por demandas externas? |
