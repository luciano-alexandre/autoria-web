# Encontro 21 - Correção da Atividade Avaliativa do 2º Bimestre (passo a passo)

**Unidade:** Unidade 2  
**Carga prevista:** 1,5h  
**Entregável previsto:** `index.html` e `styles.css` corrigidos, validados e conectados

## Visão Geral

Neste encontro, fazemos a correção orientada da **Atividade Avaliativa do 2º Bimestre**. A revisão parte dos requisitos do enunciado e constrói a página **Guia de Fundamentos da Web**, combinando estrutura HTML5 semântica e identidade visual em CSS.

**Documento-base da atividade:**  
[Atividade Avaliativa do 2º Bimestre](../atividades/04-atividade-avaliativa-03-portal-de-estudos-web.md)

**Arquivos completos do gabarito:**  
[HTML](../../códigos/aula21/index.html) | [CSS](../../códigos/aula21/styles.css)

## Conceitos Essenciais

- estrutura completa do documento HTML5 e conexão do CSS externo;
- landmarks `header`, `nav`, `main`, `section` e `footer`;
- navegação interna com `href` e `id` correspondentes;
- semântica de `article`, `aside`, listas e tabelas acessíveis;
- cascata, seletores por elemento, classe e identificador;
- tipografia, cores, contraste, espaçamento e largura máxima;
- uso de unidades relativas e adaptação de tabelas a telas estreitas.

## 1) Relembrando os critérios da atividade

Para considerar a atividade correta, a pasta entregue precisava conter:

1. `index.html` e `styles.css` criados do zero e conectados entre si;
2. título da aba **Guia de Fundamentos da Web**;
3. `header`, `nav`, `main`, `section` e `footer` corretamente aninhados;
4. quatro links internos com destinos existentes;
5. explicação do funcionamento da Web com todos os termos pedidos;
6. `article` com recomendações e `aside` com um aviso;
7. tabela com `caption`, `thead`, `tbody`, quatro colunas e quatro linhas;
8. referências, identificação do estudante e link para o topo;
9. estilos que atendam a tipografia, cores, contraste, largura e espaçamento;
10. seletores por elemento, classe e identificador.

## 2) Passo 1 - Montar a pasta e conectar os arquivos

A estrutura mínima é:

```text
nome-sobrenome/
├── index.html
└── styles.css
```

No `head`, confira a conexão com a folha de estilos:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Guia de Fundamentos da Web</title>
  <link rel="stylesheet" href="styles.css" />
</head>
```

Os dois arquivos precisam estar na mesma pasta para que esse caminho funcione.

## 3) Passo 2 - Corrigir cabeçalho e navegação interna

O título recebe `id="topo"`, e cada link do menu aponta para uma seção real:

```html
<header>
  <div class="container">
    <h1 id="topo">Guia de Fundamentos da Web</h1>
    <p>Um roteiro para compreender a Web e revisar boas práticas de autoria.</p>
    <nav aria-label="Navegação principal">
      <ul>
        <li><a href="#funcionamento">Como funciona</a></li>
        <li><a href="#boas-praticas">Boas práticas</a></li>
        <li><a href="#estudos">Plano de estudos</a></li>
        <li><a href="#referencias">Referências</a></li>
      </ul>
    </nav>
  </div>
</header>
```

Confirme a correspondência: `#funcionamento` aponta para `id="funcionamento"`, e assim por diante.

## 4) Passo 3 - Explicar como a Web funciona

A primeira seção precisa diferenciar Internet e Web, apresentar uma sequência ordenada e empregar corretamente todos os termos obrigatórios:

```html
<section id="funcionamento">
  <h2>Como a Web funciona</h2>
  <p>
    A Internet é a infraestrutura que conecta redes e dispositivos. A Web é um
    serviço que usa essa infraestrutura para disponibilizar páginas e recursos.
  </p>
  <ol>
    <li>O usuário digita uma URL no navegador.</li>
    <li>O DNS localiza o endereço do servidor.</li>
    <li>O cliente envia uma requisição HTTP ao servidor.</li>
    <li>O servidor responde e o navegador apresenta a página.</li>
  </ol>
  <p>
    <a href="https://github.com/luciano-alexandre/autoria-web">
      Consultar o material da disciplina de Autoria Web
    </a>
  </p>
</section>
```

Na revisão, procure explicitamente por: **URL**, **DNS**, **HTTP**, **cliente**, **servidor** e **navegador**.

## 5) Passo 4 - Organizar boas práticas

O `article` reúne recomendações que formam um conteúdo independente. O `aside` destaca um aviso relacionado:

```html
<section id="boas-praticas">
  <h2>Boas práticas</h2>
  <article>
    <h3>Cuidados ao produzir uma página</h3>
    <ul>
      <li>Use elementos HTML de acordo com o significado do conteúdo.</li>
      <li>Escreva textos de links claros e mantenha contraste adequado.</li>
      <li>Organize e indente o código de maneira consistente.</li>
    </ul>
  </article>
  <aside>
    <strong>Atenção:</strong> não use títulos apenas para aumentar o texto.
  </aside>
</section>
```

## 6) Passo 5 - Corrigir a tabela do plano de estudos

Verifique a estrutura antes do conteúdo:

```html
<table>
  <caption>Roteiro de revisão dos fundamentos da Web</caption>
  <thead>
    <tr>
      <th scope="col">Tema</th>
      <th scope="col">Tecnologia</th>
      <th scope="col">O que revisar</th>
      <th scope="col">Material</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Estrutura</td>
      <td>HTML</td>
      <td>Elementos semânticos</td>
      <td><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">MDN HTML</a></td>
    </tr>
    <!-- Acrescente pelo menos mais três linhas. -->
  </tbody>
</table>
```

Os quatro `th` usam `scope="col"`; as linhas de dados ficam em `tbody`, e pelo menos um material é um link.

## 7) Passo 6 - Fechar referências e rodapé

```html
<section id="referencias">
  <h2>Referências</h2>
  <ul>
    <li>Material didático da disciplina de Autoria Web.</li>
    <li><a href="https://developer.mozilla.org/pt-BR/">MDN Web Docs</a>.</li>
  </ul>
</section>

<footer>
  <div class="container">
    <p>Nome do estudante — 1º ano de Informática</p>
    <a href="#topo">Voltar ao topo</a>
  </div>
</footer>
```

Na entrega do estudante, o texto genérico deve ser substituído pelo nome e pela turma reais.

## 8) Passo 7 - Criar a base visual do CSS

Comece por cores reutilizáveis, box model, tipografia e largura do conteúdo:

```css
:root {
  --cor-primaria: #123a63;
  --cor-destaque: #0b7285;
  --cor-fundo: #f4f7fa;
  --cor-texto: #1f2933;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--cor-fundo);
  color: var(--cor-texto);
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;
}
```

Esse trecho já demonstra seletor de elemento (`body`) e de classe (`.container`), unidades relativas, largura máxima e centralização.

## 9) Passo 8 - Estilizar seções, aviso e tabela

```css
section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #ffffff;
}

#boas-praticas {
  border-left: 0.35rem solid var(--cor-destaque);
}

aside {
  margin-top: 1rem;
  padding: 1rem;
  border: 0.1rem solid #f0ad4e;
  background: #fff6df;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.75rem;
  border: 0.0625rem solid #b8c2cc;
  text-align: left;
}
```

O seletor `#boas-praticas` completa o requisito de usar um identificador no CSS. O gabarito envolve a tabela em `.tabela-responsiva` com `overflow-x: auto`, evitando que ela quebre a página em telas estreitas.

## 10) Gabarito completo

Para manter uma única fonte de código e permitir a execução direta no navegador, o gabarito completo está organizado em:

- [`códigos/aula21/index.html`](../../códigos/aula21/index.html);
- [`códigos/aula21/styles.css`](../../códigos/aula21/styles.css).

Abra o `index.html` no navegador e altere o CSS durante a correção para observar o efeito de cada regra.

## 11) Roteiro de validação no navegador e no DevTools

1. Abra `códigos/aula21/index.html` no navegador.
2. Confirme o título da aba e verifique se o CSS foi carregado.
3. Clique nos quatro itens do menu e em **Voltar ao topo**.
4. Teste o link externo e o link para o material da disciplina.
5. Reduza a largura da janela e confira a tabela.
6. No painel **Elements**, confira a hierarquia de landmarks e seções.
7. No painel **Styles**, desative temporariamente regras de `margin`, `padding` e cores para discutir seus efeitos.
8. Valide se não existem tags sem fechamento ou identificadores repetidos.

## 12) Erros comuns observados na correção

- salvar `styles.css` em outra pasta sem corrigir o `href`;
- criar links internos sem o destino correspondente;
- confundir Internet com Web ou omitir termos obrigatórios;
- colocar `aside` fora do contexto das boas práticas;
- omitir `caption`, `thead`, `tbody` ou `scope="col"`;
- usar menos de quatro linhas na tabela;
- aplicar cor clara sobre fundo claro, prejudicando o contraste;
- usar somente valores em `px` quando foram pedidas unidades relativas;
- esquecer a identificação do estudante no rodapé.

## Checklist de Compreensão

- [ ] Consigo conectar corretamente uma folha de estilos externa.
- [ ] Consigo relacionar cada link interno ao seu identificador de destino.
- [ ] Consigo escolher elementos semânticos adequados para cada conteúdo.
- [ ] Consigo construir uma tabela com cabeçalhos acessíveis.
- [ ] Consigo diferenciar seletores de elemento, classe e identificador.
- [ ] Consigo usar cores, tipografia e espaçamentos com coerência.
- [ ] Consigo validar HTML e CSS no navegador antes da entrega.

## Resumo Final

Neste encontro, a atividade foi corrigida requisito por requisito. O resultado final separa estrutura e apresentação, oferece navegação funcional, utiliza HTML semântico e aplica uma identidade visual legível com CSS externo.

## Questões de Fixação

1. Por que o valor de `href` de um link interno precisa corresponder a um `id`?
2. Qual é a diferença de função entre `article` e `aside` nesta página?
3. Para que servem `caption` e `scope="col"` em uma tabela?
4. Como `.container` combina `width`, `max-width` e `margin` para organizar a página?
5. Que verificações devem ser realizadas antes de compactar a pasta para entrega?
