# Arqueologia do Design

Site e acervo do projeto Arqueologia do Design.

A interface da GitHub Pages reaproveita a lógica visual do repositório `leorruas/puc`: grade tipográfica, navegação por cartões, leitor de Markdown, busca e temas claro/escuro. A identidade aqui usa laranja cerâmica como cor de destaque.

## Como publicar novos estudos

Crie uma pasta para cada campo ou família de artefatos e adicione arquivos `.md` dentro dela. O site lê automaticamente a árvore do repositório e transforma as pastas em seções e os arquivos em estudos.

Exemplo:

```text
01. Interfaces/
  01. Botão salvar.md
  02. QR Code.md
02. Design de Serviços/
  01. Jobs to be Done.md
```

Arquivos de infraestrutura na raiz, como este README, não aparecem no catálogo.

## GitHub Pages

A página principal é `index.html`. Depois de habilitar GitHub Pages para a branch `main` e a pasta raiz `/`, o site ficará disponível no endereço padrão do GitHub Pages do repositório.
