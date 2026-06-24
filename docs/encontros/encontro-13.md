# Encontro 13 - Introdução ao CSS e Conceitos Básicos

**Bimestre:** 2º Bimestre  
**Entrega:** Primeira folha de estilos

## Visão Geral
Neste encontro, você inicia o estudo de CSS como linguagem responsável pela apresentação visual das páginas web.
O foco é entender o papel do CSS, sua sintaxe básica, as formas de inclusão na página e os primeiros seletores.

Se nos encontros anteriores você construiu a estrutura com HTML, agora começa a separar conteúdo e apresentação de forma organizada.

## Conceitos Essenciais
- Diferença entre estrutura (HTML) e apresentação (CSS).
- Regra CSS: seletor, propriedade e valor.
- Formas de aplicar estilos: inline, interno e externo.
- Seletores básicos por elemento, classe e id.
- Vantagens de usar arquivo `.css` separado.

## 1) O que é CSS?
CSS significa `Cascading Style Sheets`.
Ele permite definir cores, tipografia, espaçamentos, tamanhos e organização visual da página sem alterar a semântica do HTML.

### Exemplo de regra simples
```css
h1 {
  color: darkblue;
  font-size: 2rem;
}
```

## 2) Estrutura de uma regra CSS
Uma regra CSS tem três partes principais:
- seletor: aponta o elemento a ser estilizado;
- propriedade: indica o aspecto visual que será alterado;
- valor: define como esse aspecto deve ficar.

### Exemplo
```css
p {
  color: #333333;
}
```

## 3) Formas de incluir CSS
O CSS pode ser aplicado de três formas.

### Inline
```html
<p style="color: red;">Texto em destaque.</p>
```

### Interno
```html
<style>
  p {
    color: red;
  }
</style>
```

### Externo
```html
<link rel="stylesheet" href="styles.css" />
```

Para projetos reais, a forma externa é a mais recomendada.

## 4) Seletores básicos
Os primeiros seletores que você precisa dominar são:
- seletor por elemento;
- seletor por classe;
- seletor por id.

### Exemplo
```css
body {
  font-family: Arial, sans-serif;
}

.destaque {
  color: darkgreen;
}

#topo {
  background-color: #f4f4f4;
}
```

## 5) Exemplo principal do encontro
### `index.html`
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Encontro 13 - Introdução ao CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header id="topo">
      <h1>Guia Inicial de CSS</h1>
      <p class="destaque">Primeiros passos na estilização de páginas web.</p>
    </header>

    <main>
      <section>
        <h2>Por que usar CSS?</h2>
        <p>CSS ajuda a controlar a aparência da página com mais organização e reaproveitamento.</p>
      </section>
    </main>
  </body>
</html>
```

### `styles.css`
```css
body {
  font-family: Arial, sans-serif;
  color: #222222;
}

#topo {
  background-color: #eef3ff;
}

h1 {
  color: #173f8a;
}

.destaque {
  color: #1f6f50;
}
```

## 6) Exercício
Crie uma pasta com:
- `index.html`;
- `styles.css`.

Sua página deve conter:
- `header`, `main` e `footer`;
- um `h1`, dois `h2` e pelo menos dois parágrafos;
- ligação correta entre HTML e CSS com `link`;
- pelo menos 4 regras CSS;
- uso de seletor por elemento, classe e id.

## 7) Validação rápida antes de considerar concluído
- O arquivo `styles.css` está conectado ao HTML.
- As regras possuem seletor, propriedade e valor.
- Há pelo menos um exemplo de classe e um de id.
- O conteúdo continua semântico mesmo com a estilização.
- O navegador aplica os estilos sem erro de sintaxe.

## 8) Erros comuns de iniciantes
- esquecer de salvar o arquivo `.css`;
- errar o caminho no `href` do `link`;
- confundir classe (`.`) com id (`#`);
- escrever propriedade sem `:`;
- esquecer `;` ao final das declarações.

## Materiais para Aprofundamento
- [MDN - Primeiros passos com CSS](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
- [MDN - Sintaxe CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Syntax)
- [MDN - Seletores CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_selectors)

## Checklist de Compreensão
- [ ] Consigo explicar a diferença entre HTML e CSS.
- [ ] Consigo criar um arquivo `styles.css` e conectá-lo ao HTML.
- [ ] Consigo escrever regras com seletor, propriedade e valor.
- [ ] Consigo usar seletores por elemento, classe e id.
- [ ] Consigo testar visualmente se o CSS foi aplicado.

## Resumo Final
Neste encontro, você iniciou o estudo de CSS e aprendeu a separar estrutura e apresentação. Essa base será aprofundada no próximo encontro com tipografia, cores, unidades e variáveis CSS.
