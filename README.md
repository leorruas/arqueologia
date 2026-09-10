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

Para publicar pelo GitHub Pages, a fonte deve ser a branch `main`, pasta `/ (root)`.
