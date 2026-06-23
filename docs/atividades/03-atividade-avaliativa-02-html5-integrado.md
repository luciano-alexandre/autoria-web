# Atividade Avaliativa 02 - Reposição - 1º Bimestre

**Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte**  
**Campus Currais Novos**

| Turma | Disciplina | Docente | Data |
|---|---|---|---|
| 1º ano - Informática | Autoria Web | Luciano Alexandre de Farias Silva | ____/____/______ |

**Discente:** ________________________________________________

## Orientações

- A atividade avaliativa deverá ser realizada de forma individual.
- Não poderá ser utilizado nenhum tipo de consulta durante a realização da atividade.
- O código-fonte deverá ser enviado pela plataforma Google Sala de Aula.
- A entrega deverá conter uma pasta com o arquivo `index.html` e os arquivos de mídia fornecidos pelo docente.
- O envio deverá ser realizado até o horário informado pelo docente. Não será possível enviar a atividade após o fechamento da plataforma.

## Questão proposta

Você foi convidado(a) para construir uma página com o tema **"Guia da Feira de Ciências e Tecnologia do Campus"**. A página deverá orientar visitantes sobre a programação, os projetos apresentados, as mídias do evento e outras informações úteis.

O objetivo é demonstrar domínio dos conteúdos estudados, com foco em estrutura HTML5 completa, combinação de tags, aninhamento correto, semântica, navegação interna, listas, mídias e tabelas.

Monte uma única página chamada `index.html` contendo todos os blocos abaixo.

> Nos encadeamentos, `>` indica que o elemento seguinte é filho do anterior e `+` indica elementos irmãos dentro do mesmo elemento-pai.

### 1. Estrutura do documento, topo e navegação interna

Use este encadeamento:

`html > head + body`  
`body > header + main + footer`  
`header > h1 + p + nav > ul > li > a`

Requisitos:

- criar a estrutura básica completa do HTML5, incluindo `<!doctype html>`, `html` com idioma, `head`, `meta charset`, `meta viewport`, `title` e `body`;
- definir o título da aba como **"Guia da Feira de Ciências"**;
- criar um `h1` com `id="topo"` e o nome da página;
- inserir um parágrafo curto apresentando a feira;
- criar um `nav` com uma lista não ordenada e 5 links internos:
  - `#apresentacao`;
  - `#programacao`;
  - `#projetos`;
  - `#midias`;
  - `#informacoes`;
- garantir que todos os links tenham um destino existente na página.

### 2. Apresentação e orientações aos visitantes

Use este encadeamento:

`main > section#apresentacao > h2 + article + aside`

Requisitos:

- no `article`, usar `h3` e 2 parágrafos para explicar:
  - o objetivo da feira;
  - o público que poderá visitar o evento;
- no `aside`, usar `h3` e uma lista não ordenada com pelo menos 3 recomendações aos visitantes.

### 3. Programação do evento

Use este encadeamento:

`section#programacao > h2 + article > h3 + ol`

Requisitos:

- criar uma lista ordenada com pelo menos 4 momentos da programação, apresentados na ordem em que acontecerão;
- informar um horário em cada item da lista;
- após a lista, inserir um parágrafo com um link externo para `https://portal.ifrn.edu.br/`;
- usar o texto **"Conheça o IFRN"** no link externo.

### 4. Projetos em destaque

Use este encadeamento:

`section#projetos > h2 + article + article`

Requisitos:

- criar 2 elementos `article`, cada um representando um projeto diferente;
- em cada `article`, inserir:
  - um `h3` com o nome do projeto;
  - um parágrafo explicando seu objetivo;
  - uma lista não ordenada com pelo menos 2 informações, como área de conhecimento, turma responsável ou materiais utilizados.

### 5. Registro em mídia

Use este encadeamento:

`section#midias > h2 + article > h3 + figure + video`  
`figure > img + figcaption`  
`video > source + texto de fallback`

Requisitos:

- inserir uma imagem relacionada à feira;
- usar `alt` descritivo e `figcaption` coerente com a imagem;
- inserir um `video` com `controls`, largura definida e um elemento `source`;
- informar o tipo do arquivo de vídeo no atributo `type`;
- escrever um texto de fallback dentro do elemento `video`.

### 6. Informações organizadas e fechamento

Use este encadeamento:

`section#informacoes > h2 + table`  
`table > caption + thead + tbody`  
`footer > p + p > a`

Requisitos:

- criar uma tabela com:
  - `caption`;
  - `thead` e `tbody`;
  - 4 colunas;
  - pelo menos 4 linhas de dados;
  - `th` com `scope="col"` no cabeçalho;
- usar as colunas **Espaço**, **Atividade**, **Horário** e **Público**;
- no `footer`, inserir:
  - um parágrafo com os créditos da imagem e do vídeo, indicando origem ou autoria e licença de uso;
  - um link interno com o texto **"Voltar ao topo"**, apontando para `#topo`.

