# DSBD – Data Science & Big Data

Site do laboratório de pesquisa Data Science & Big Data (UFPR · DINF + DEST), em português e inglês.

Publicado via GitHub Pages em **https://dsbd-research.github.io**

## Estrutura

```
index.html                  página principal
projetos-finalizados.html   lista de projetos finalizados
projeto.html?p=<id>         página de cada projeto (gerada a partir dos dados)
assets/content.js           TODO o conteúdo do site (textos PT/EN, membros, projetos, notícias…)
assets/site.js              montagem das páginas (normalmente não precisa mexer)
assets/site.css             estilos
img/                        logo, fotos (img/people), imagens de projetos (img/projects), parceiros
docs/                       PDFs (editais, resultados)
```

Tudo é estático e fica neste repositório; nenhum arquivo depende de outro servidor.

## Como adicionar um projeto finalizado

1. Coloque a imagem de capa (e figuras, se houver) em `img/projects/`, de preferência em `.webp` ou `.jpg` com no máximo ~1400 px de largura.
2. Abra `assets/content.js` e, dentro de `DSBD.PROJECTS`, copie o bloco de um projeto existente (por exemplo o de `id:"power-grid"`).
3. Troque o `id` (sem espaços nem acentos, ex.: `"meu-projeto"`), os textos em `pt` e `en`, as seções, as publicações e os links. Use `status:"finished"`.
4. Faça o commit. O projeto aparece sozinho em `projetos-finalizados.html` e ganha a página `projeto.html?p=meu-projeto`.

Para mover um projeto em andamento para a lista de finalizados, basta trocar `status:"ongoing"` por `status:"finished"`.

## Como adicionar membros, notícias ou publicações

Edite as listas `DSBD.FACULTY`, `DSBD.STUDENTS`, `DSBD.PAST`, `DSBD.NEWS` e `DSBD.PUBS` em `assets/content.js`. Fotos de pessoas vão em `img/people/` (quadradas, ~400 px).

## Ao atualizar o conteúdo

Os navegadores guardam `assets/content.js` por até 10 minutos. Para que a mudança apareça na hora, troque o número depois de `?v=` nas três páginas HTML (`index.html`, `projetos-finalizados.html`, `projeto.html`), por exemplo para a data e a hora atuais:

```html
<script src="assets/content.js?v=202610192100"></script>
```
