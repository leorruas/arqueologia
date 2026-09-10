# Arqueologia do Design

Vault e site público do projeto Arqueologia do Design.

A GitHub Pages reaproveita a lógica visual do repositório `leorruas/puc`: grade tipográfica, navegação por cartões, busca, leitor de Markdown, índice lateral e temas claro e escuro. A identidade deste acervo usa laranja cerâmico como cor de destaque.

## O que aparece no site

A interface lê automaticamente estas áreas do vault:

- `00 tipos de design`
- `00 índices`
- `01 conceitos`
- `02 variaveis`
- `03 artefatos`
- `autores`
- `empresas`

Pastas de trabalho e infraestrutura, como `00 inbox`, `templates` e `.obsidian`, não entram no catálogo público.

Os links internos do Obsidian no formato `[[Nota]]` são resolvidos para estudos existentes quando o título corresponde a uma entrada publicada.

## Arquivos do site

- `index.html`: estrutura da interface
- `style.css`: identidade visual e responsividade
- `script.js`: catálogo, navegação, busca e leitor
- `.nojekyll`: impede processamento desnecessário pelo Jekyll

Para publicar pelo GitHub Pages, a fonte deve ser a branch `main`, pasta `/ (root)`.
