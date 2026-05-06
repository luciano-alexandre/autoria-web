# Encontro 7 - Correção da Atividade Avaliativa 01 (passo a passo)

**Unidade:** Unidade 1  
**Carga prevista:** 1,5h  
**Entregável previsto:** `index.html` corrigido e validado

## Visão Geral
Neste encontro, fazemos a correção orientada da **Atividade Avaliativa 01** com foco em critérios técnicos e organização do código.

A proposta é revisar cada requisito do enunciado e montar uma versão final correta, legível e pronta para envio.

**Documento-base da atividade:**  
[Atividade Avaliativa 01 (PDF)](../atividades/Atividade%20Avaliativa%20-%20Autoria%20Web%20(1).pdf)

## Conceitos Essenciais
- Estrutura base obrigatória do HTML5.
- Hierarquia de títulos (`h1`, `h2`) aplicada com coerência.
- Escrita de parágrafos curtos com foco didático.
- Papel de HTML, CSS e JavaScript no front-end.
- Uso de listas e links funcionais.
- Organização e indentação como parte da avaliação.

## 1) Relembrando os critérios da atividade
Para considerar a atividade correta, o `index.html` precisava:

1. Usar estrutura básica completa do HTML5.
2. Definir o título da aba como **"Avaliação Autoria Web"**.
3. Ter um `h1` principal e, no mínimo, três `h2`.
4. Explicar em parágrafos curtos:
   - diferença entre Internet e Web;
   - papel de HTML, CSS e JavaScript no front-end.
5. Incluir uma lista com ferramentas do ambiente de desenvolvimento.
6. Criar um link funcional (externo ou interno).
7. Manter organização, indentação e hierarquia de títulos corretas.

## 2) Passo 1 - Conferir estrutura HTML5 completa
Comece validando o esqueleto mínimo:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Avaliação Autoria Web</title>
  </head>
  <body></body>
</html>
```

Sem essa base, a atividade já perde qualidade técnica logo no início.

## 3) Passo 2 - Validar `title` exatamente como pedido
O enunciado exige o texto exato:

```html
<title>Avaliação Autoria Web</title>
```

Trocas como "Atividade de Autoria Web" ou "Avaliação 1" não atendem ao critério literal.

## 4) Passo 3 - Revisar hierarquia de títulos
No `body`, a organização esperada é:

- 1 único `h1` com o tema central da página.
- Pelo menos 3 `h2` para dividir o conteúdo.

Exemplo correto:

```html
<h1>Como a Web funciona</h1>

<h2>Internet x Web</h2>
<h2>Papel do HTML</h2>
<h2>Papel do CSS e do JavaScript</h2>
```

## 5) Passo 4 - Corrigir o conteúdo dos parágrafos obrigatórios
Os parágrafos precisam ser curtos e objetivos.

Pontos mínimos cobrados:
- Internet e Web não são sinônimos.
- HTML estrutura o conteúdo.
- CSS define a apresentação visual.
- JavaScript adiciona comportamento e interatividade.

## 6) Passo 5 - Inserir lista de ferramentas do ambiente
A atividade pede uma lista com ferramentas estudadas no encontro de ambiente:

```html
<ul>
  <li>Visual Studio Code</li>
  <li>Navegador (Chrome ou Firefox)</li>
  <li>DevTools</li>
  <li>Terminal</li>
</ul>
```

Pode ser `ul` ou `ol`, desde que os itens façam sentido.

## 7) Passo 6 - Garantir um link funcional
Um exemplo simples de link externo:

```html
<a href="https://www.google.com">Acessar Google</a>
```

Na correção, além do link externo, também podemos usar um link interno opcional (`#topo`) para reforçar navegação.

## 8) Passo 7 - Ajustar organização e indentação
Antes da entrega final, verifique:

- abertura e fechamento corretos de todas as tags;
- indentação consistente (2 espaços);
- conteúdo agrupado em blocos lógicos (`main`, `section`);
- sem "pulos" de hierarquia de títulos.

## 9) Gabarito completo da atividade (`index.html`)
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Avaliação Autoria Web</title>
  </head>
  <body>
    <main>
      <h1 id="topo">Como a Web funciona</h1>

      <section>
        <h2>Diferença entre Internet e Web</h2>
        <p>
          A Internet é a infraestrutura global de redes que conecta computadores no mundo todo.
          A Web é um serviço que funciona sobre essa infraestrutura e permite acessar páginas
          por meio de links e navegadores.
        </p>
      </section>

      <section>
        <h2>Papel do HTML no front-end</h2>
        <p>
          O HTML organiza a estrutura da página com títulos, parágrafos, listas, links e seções.
          Ele define o significado de cada parte do conteúdo.
        </p>
      </section>

      <section>
        <h2>Papel do CSS e do JavaScript no front-end</h2>
        <p>
          O CSS controla a aparência visual da interface, como cores, fontes, espaçamento e layout.
          O JavaScript adiciona comportamento, interação e respostas às ações do usuário.
        </p>
      </section>

      <section>
        <h2>Ferramentas do ambiente de desenvolvimento</h2>
        <ul>
          <li>Visual Studio Code</li>
          <li>Navegador (Chrome ou Firefox)</li>
          <li>DevTools</li>
          <li>Terminal</li>
        </ul>
      </section>

      <section>
        <h2>Link de apoio</h2>
        <p>
          Referência para revisão:
          <a href="https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works">
            Como a Web funciona (MDN)
          </a>
        </p>
        <p><a href="#topo">Voltar ao início</a></p>
      </section>
    </main>
  </body>
</html>
```

## 10) Roteiro de validação no navegador e no DevTools
1. Abra o `index.html` no navegador.
2. Confirme o título da aba: **Avaliação Autoria Web**.
3. Verifique se existe apenas um `h1` e pelo menos três `h2`.
4. Clique no link externo para confirmar funcionamento.
5. Abra o DevTools (`F12`) e revise a árvore HTML no painel **Elements**.
6. Confira se não há tags abertas incorretamente ou elementos fora de ordem.

## 11) Erros comuns observados na correção
- esquecer `<!doctype html>`;
- escrever título diferente do solicitado;
- usar apenas 1 ou 2 subtítulos `h2`;
- confundir Internet com Web nos parágrafos;
- inserir lista sem relação com ferramentas estudadas;
- usar link sem `href` funcional;
- manter código sem indentação e com fechamento de tags inconsistente.

## Materiais para Aprofundamento
- [MDN - Como a Web funciona](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [MDN - Estrutura básica de HTML](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [MDN - Elemento `<a>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/a)
- [MDN - Headings (`h1` a `h6`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)

## Checklist de Compreensão
- [ ] Consigo validar a estrutura completa de um documento HTML5.
- [ ] Consigo aplicar o título exato exigido em um enunciado.
- [ ] Consigo organizar conteúdo com `h1` e múltiplos `h2` sem quebrar hierarquia.
- [ ] Consigo explicar com clareza a diferença entre Internet e Web.
- [ ] Consigo descrever o papel de HTML, CSS e JavaScript no front-end.
- [ ] Consigo revisar código com DevTools antes do envio.

## Resumo Final
Neste encontro, a atividade avaliativa foi corrigida critério por critério, com foco em precisão técnica e clareza de organização. A versão final do `index.html` atende todos os requisitos do enunciado e consolida as competências centrais da Unidade 1.

## Questões de Fixação
1. Qual é a diferença central entre Internet e Web?

2. Por que a atividade exige o texto exato no elemento `title`?

3. Qual é a função do `h1` e por que os `h2` ajudam na legibilidade?

4. Cite um exemplo de ferramenta do ambiente de desenvolvimento e sua utilidade.

5. Quais verificações no DevTools você faria antes de enviar a atividade?
