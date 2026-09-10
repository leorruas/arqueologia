---
title: "Reversibilidade"
type: "variavel"
status: "publicado"
eixo: "irreversível ↔ facilmente reversível"
tags:
  - design/variavel
  - arqueologia
---

# Reversibilidade

Algumas ações fecham possibilidades; outras mantêm um caminho de volta. **Reversibilidade** mede quão fácil é retornar a um estado anterior, cancelar uma ação ou experimentar sem consolidar imediatamente suas consequências.

**Eixo:** irreversível ↔ facilmente reversível.

A variável não mede apenas a existência de um botão “desfazer”. Uma ação pode ser parcialmente reversível, reversível por pouco tempo ou recuperável apenas com alto custo.

## Undo transforma estado em experimento

[[03 artefatos/Undo|Undo]] é o exemplo mais direto. Ao permitir voltar a estados anteriores, ele torna edições sucessivas menos comprometedoras e favorece ciclos de tentativa, observação e correção.

Esse mecanismo aparece na formulação clássica de [[01 conceitos/Manipulacao Direta|Manipulação direta]], em que ações rápidas, incrementais e reversíveis ajudam o usuário a explorar sem precisar planejar toda a sequência antecipadamente.

Mas “desfazer” não significa que tudo retorna perfeitamente. Uma mudança pode ter sido vista por outras pessoas, desencadeado processos externos ou consumido tempo. É por isso que [[02 variaveis/Custo do Erro|Custo do erro]] e reversibilidade precisam permanecer separados.

## Há reversibilidade material e temporal

O [[03 artefatos/Post-it|Post-it]] aumenta reversibilidade física ao permitir reposicionar uma anotação com pouco dano ao suporte. Um desenho a lápis também costuma ser mais reversível do que um corte em madeira.

[[03 artefatos/Undo Send|Undo Send]] trabalha com tempo. A ação parece concluída para o usuário, mas o sistema mantém uma janela curta antes da consolidação final. A reversibilidade existe porque a irreversibilidade foi adiada.

[[03 artefatos/Projeto Piloto|Projeto piloto]] opera em outra escala: não retorna literalmente uma organização ao estado anterior, mas tenta limitar compromisso e exposição antes de uma expansão maior. O parentesco é funcional e aparece na genealogia [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]].

## Mais reversibilidade pode mudar a forma de decidir

Quando retornar é barato, usuários podem experimentar mais cedo e corrigir depois. Isso reduz a necessidade de acertar tudo antes da primeira ação.

Esse ganho pode ser particularmente importante em atividades criativas e exploratórias. Mas também existe um trade-off: ambientes extremamente reversíveis podem favorecer adiamento de fechamento ou gerar falsa sensação de que qualquer consequência pode ser anulada.

Em sistemas financeiros, jurídicos ou sociais, o estado técnico e o estado percebido podem divergir. Uma interface pode oferecer “cancelar” sem conseguir apagar todas as consequências já produzidas.

## Baixa reversibilidade exige outros mecanismos

Quando não há caminho de volta, design pode atuar antes da ação: confirmação, pré-visualização, permissões, ensaios, backups ou separação entre rascunho e publicação.

Isso aproxima reversibilidade de [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]]. Uma pequena resistência anterior pode ser valiosa quando o estado seguinte será difícil de desfazer.

A pergunta arqueológica é: **em que momento uma tentativa vira compromisso?**

## Como observar

Observar número de estados recuperáveis, duração da janela de cancelamento, quantidade de trabalho perdida, necessidade de suporte para restaurar, existência de histórico ou versões e diferença entre reversão técnica e reversão social.

Também importa quem pode reverter. Um administrador pode possuir um caminho de recuperação que o usuário comum não tem.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Reversibilidade |
| **Eixo** | Irreversível ↔ facilmente reversível |
| **Definição operacional** | Facilidade, alcance e janela disponível para retornar a um estado anterior ou cancelar uma ação |
| **Como observar** | Estados recuperáveis, tempo de cancelamento, versões, trabalho perdido e esforço de restauração |
| **O que não mede sozinho** | Gravidade da consequência, probabilidade de erro ou permanência do registro |
| **Trade-offs principais** | Mais reversibilidade favorece exploração; também pode criar falsa percepção de que todo efeito é recuperável |
| **Artefatos-chave** | [[03 artefatos/Undo|Undo]], [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Undo Send|Undo Send]], [[03 artefatos/Projeto Piloto|Projeto piloto]] |
| **Conceitos relacionados** | [[01 conceitos/Manipulacao Direta|Manipulação direta]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]] |
| **Genealogias relacionadas** | [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] |

## Referências

Shneiderman, Ben. “Direct Manipulation: A Step Beyond Programming Languages”. *IEEE Computer*, 1983. A reversibilidade aparece como uma das propriedades que sustentam ações incrementais e exploratórias em manipulação direta.