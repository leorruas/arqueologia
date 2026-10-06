# Arqueologia do Design

Vault e site público de uma investigação sobre ideias de design: como artefatos aparentemente pequenos reorganizam comportamento, atenção, memória, acesso, coordenação e poder.

O artefato é a porta de entrada. Autores, empresas e tecnologias aparecem como contexto para reconstruir invenção, refinamento, popularização e padronização. O objetivo do acervo não é formar uma enciclopédia de empresas ou objetos icônicos, mas uma rede de hipóteses sobre comportamento humano.

## Formas de explorar

A GitHub Pages oferece mais de uma leitura do mesmo acervo:

- **Tipos de design**: ensaios disciplinares que investigam que classes de problema diferentes campos aprenderam a tornar projetáveis e que hipóteses sobre comportamento passaram a institucionalizar.
- **Ideias**: genealogias que atravessam disciplinas para investigar mecanismos recorrentes sem presumir descendência histórica direta.
- **Percursos**: argumentos de leitura que colocam estudos em sequência para observar como uma pergunta ou problema muda de forma entre artefatos.
- **Acervo**: conceitos, variáveis, artefatos e entidades de contexto.

A interface lê automaticamente estas áreas do vault:

- `00 tipos de design`
- `00 índices`
- `01 conceitos`
- `02 variaveis`
- `03 artefatos`
- `04 genealogias`
- `05 percursos`
- `autores`
- `empresas`

Pastas de trabalho e infraestrutura, como `00 inbox`, `templates` e `.obsidian`, não entram no catálogo público.

## Regimes de afirmação

O projeto diferencia três tipos de afirmação:

- **História documentada**: datas, autoria, produtos, decisões e eventos sustentados por fontes.
- **Interpretação arqueológica**: leitura do que uma decisão de design parece fazer com comportamento, poder ou capacidades humanas.
- **Hipótese em aberto**: relação plausível que ainda precisa ser testada ou documentada.

Conceitos também registram sua procedência: literatura estabelecida, adaptação do projeto ou hipótese do projeto.

## Leitura e documentação

O Markdown preserva a documentação completa. Na GitHub Pages, fichas arqueológicas e outras camadas de consulta podem ser recolhidas para que a narrativa seja a primeira camada de leitura. Wikilinks `[[Nota]]` são resolvidos quando o destino publicado existe.

## Arquivos do site

- `index.html`: estrutura da interface
- `style.css`: base visual e responsividade
- `enhancements.css`: camada editorial e modos de leitura
- `script.js`: catálogo, navegação, busca e leitor
- `enhancements.js`: relações, lentes editoriais e refinamentos do leitor
- `scripts/build-search-index.mjs`: índice relacional do acervo

A publicação usa GitHub Actions. O workflow valida contratos, gera o índice e auditorias, prepara propostas e verifica bloqueios antes de montar e enviar um pacote filtrado ao GitHub Pages. A configuração do Pages deve usar `build_type: workflow`; publicação direta pela raiz da branch ignora esses bloqueios.

`publicar: false` exclui notas do catálogo e do pacote. Rascunhos permanecem acessíveis e recebem aviso visível. A visibilidade do repositório é independente dessa política.

## Revisão de propostas

A ficha arqueológica oficial tem 33 campos, compartilhados entre template, `scripts/artifact-schema.mjs`, migrador e auditoria. A migração preserva valores existentes e registra campos ausentes como “Ainda não explicitado.”. Uma estrutura não reconhecida exige revisão manual.

Execute os scripts a partir da raiz do vault. `node scripts/normalize-sentence-case.mjs`, `node scripts/migrate-artifact-sheets.mjs` e `node scripts/consolidate-unresolved-links.mjs` geram candidatos em `.review/<script>/`, com manifesto de caminhos e hashes. Os arquivos de origem permanecem intactos. Compare os candidatos com os originais e, depois da revisão, execute o mesmo comando com `--apply`. A aplicação verifica os hashes de todos os arquivos antes de escrever; uma proposta obsoleta ou editada precisa ser regenerada. Atualize o log antes de integrar uma alteração material.

A detecção de pistas depende de `link-report.json` atualizado e acrescenta candidatos com destino, origem e estado pendente. Ela preserva as pistas anteriores e não converte wikilinks. Promoção, fusão ou descarte devem ser registrados explicitamente sem apagar o histórico.

## Validação

`node --test tests/contracts.test.mjs` verifica preservação e recuperação literal de registros legados, aplicação segura de propostas, acumulação de pistas, política de publicação e bloqueios. Gere os relatórios com `build-search-index.mjs`, `audit-editorial.mjs` e `audit-network.mjs`; depois execute `validate-publication.mjs`. Schema incompatível, ficha inválida, links ambíguos/sem destino e possível perda em propostas bloqueiam. Capitalização e reciprocidade ficam como avisos.

`build-public-site.mjs` produz `.site/` somente após validação. O pacote contém HTML, estilos, módulos de navegador, índice e notas publicáveis; exclui governança, templates e relatórios. Markdown é carregado do próprio site. Relatórios e propostas ficam disponíveis como artefatos do workflow; o workflow não faz commit nem aplica conteúdo automaticamente.
