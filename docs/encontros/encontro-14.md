# Encontro 14 - Tipografia, Cores, Unidades e Variáveis CSS

**Bimestre:** 2º Bimestre  
**Entrega:** Guia visual de estilos

## Visão Geral
Neste encontro, você aprofunda a estilização visual iniciada no encontro anterior.
O foco é criar uma base consistente de aparência para uma página web, trabalhando com tipografia, cores, espaçamentos, unidades de medida e variáveis CSS.

Se no Encontro 13 você aprendeu a conectar o CSS ao HTML e escrever suas primeiras regras, agora começa a tomar decisões visuais mais organizadas: que fontes usar, quais cores combinam com o tema, como definir tamanhos e como reaproveitar valores no projeto.

## Conceitos Essenciais
- Tipografia: família de fontes, tamanho, peso, alinhamento e altura de linha.
- Cores em CSS: nomes, hexadecimal, RGB e HSL.
- Contraste entre texto e fundo.
- Unidades absolutas e relativas: `px`, `%`, `em`, `rem`, `vw` e `vh`.
- Espaçamentos com `margin` e `padding`.
- Variáveis CSS com `:root`, propriedades customizadas e `var()`.
- Organização de um guia visual simples para reaproveitar estilos.

## 1) Tipografia na Web
Tipografia envolve as decisões relacionadas à leitura do texto: fonte, tamanho, peso, espaçamento e alinhamento.

### Exemplo básico
```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
```

### Propriedades importantes
- `font-family`: define a família de fontes.
- `font-size`: define o tamanho do texto.
- `font-weight`: define o peso da fonte.
- `line-height`: controla o espaço entre linhas.
- `text-align`: controla o alinhamento do texto.

### Exemplo com títulos
```css
h1 {
  font-size: 2rem;
  font-weight: 700;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
}
```

## 2) Cores em CSS
As cores podem ser escritas de várias formas. No início, as mais comuns são nomes, valores hexadecimais e RGB.

### Exemplos
```css
p {
  color: darkslategray;
}

header {
  background-color: #e8f1ff;
}

a {
  color: rgb(24, 83, 180);
}
```

### Boas práticas iniciais
- use poucas cores principais;
- garanta contraste suficiente entre texto e fundo;
- mantenha coerência entre botões, links e destaques;
- evite usar cor como única forma de transmitir informação.

## 3) Unidades de medida
CSS possui unidades absolutas e relativas. Para páginas web, unidades relativas costumam ser mais flexíveis.

### Unidades comuns
- `px`: unidade fixa, útil para bordas e pequenos detalhes.
- `%`: relativa ao tamanho do elemento pai.
- `em`: relativa ao tamanho da fonte do elemento atual.
- `rem`: relativa ao tamanho da fonte raiz do documento.
- `vw`: relativa à largura da janela de visualização.
- `vh`: relativa à altura da janela de visualização.

### Exemplo
```css
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

p {
  font-size: 1rem;
}
```

Nesse exemplo, `max-width` limita a largura do conteúdo, `margin: 0 auto` centraliza o bloco e `padding` cria espaço interno.

## 4) Espaçamentos com `margin` e `padding`
Espaçamento é uma das partes mais importantes da organização visual.

### Diferença prática
- `margin`: espaço externo, entre um elemento e outro.
- `padding`: espaço interno, entre a borda do elemento e seu conteúdo.

### Exemplo
```css
section {
  margin-bottom: 2rem;
}

.card {
  padding: 1rem;
}
```

## 5) Variáveis CSS
Variáveis CSS permitem guardar valores reutilizáveis, como cores, fontes e medidas.
Elas ajudam a manter consistência e facilitam alterações futuras.

### Exemplo
```css
:root {
  --cor-principal: #174ea6;
  --cor-fundo: #f6f8fc;
  --cor-texto: #202124;
  --espacamento-padrao: 1rem;
}

body {
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
}

h1 {
  color: var(--cor-principal);
}

section {
  margin-bottom: var(--espacamento-padrao);
}
```

### Por que usar variáveis?
- reduz repetição no CSS;
- facilita trocar a identidade visual;
- torna o arquivo mais organizado;
- prepara o projeto para estilos maiores.

## 6) Exemplo principal do encontro
### `index.html`
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Guia Visual de Estudos Web</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header id="topo">
      <h1>Guia Visual de Estudos Web</h1>
      <p>Uma página para organizar escolhas de tipografia, cores e espaçamentos.</p>
    </header>

    <main>
      <section>
        <h2>Tipografia</h2>
        <p>
          A tipografia deve facilitar a leitura e criar hierarquia visual entre
          títulos, subtítulos e textos.
        </p>
      </section>

      <section class="destaque">
        <h2>Paleta de cores</h2>
        <p>
          Uma paleta simples ajuda a manter a identidade visual consistente em
          toda a página.
        </p>
      </section>

      <section>
        <h2>Espaçamentos</h2>
        <p>
          Margens e preenchimentos deixam o conteúdo mais respirável e organizado.
        </p>
      </section>
    </main>

    <footer>
      <p><a href="#topo">Voltar ao topo</a></p>
    </footer>
  </body>
</html>
```

### `styles.css`
```css
:root {
  --cor-principal: #174ea6;
  --cor-secundaria: #0b8043;
  --cor-fundo: #f6f8fc;
  --cor-superficie: #ffffff;
  --cor-texto: #202124;
  --cor-borda: #d8dee9;
  --espacamento: 1rem;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
}

header,
main,
footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  background-color: var(--cor-principal);
  color: var(--cor-superficie);
}

h1 {
  margin-top: 0;
  font-size: 2rem;
}

h2 {
  color: var(--cor-principal);
  font-size: 1.4rem;
}

section {
  margin-bottom: 1.5rem;
  padding: var(--espacamento);
  background-color: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
}

.destaque {
  border-left: 6px solid var(--cor-secundaria);
}

a {
  color: var(--cor-principal);
}
```

## 7) Exercício
Crie uma página com `index.html` e `styles.css` para montar um pequeno **guia visual de estilos**.

Sua página deve conter:
- `header`, `main` e `footer`;
- pelo menos 3 seções com títulos e parágrafos;
- arquivo `styles.css` conectado corretamente;
- definição de fonte para o `body`;
- pelo menos 4 cores aplicadas;
- uso de `margin` e `padding`;
- pelo menos 4 variáveis CSS em `:root`;
- uso de `var()` em mais de uma regra CSS.

## 8) Validação rápida antes de considerar concluído
- O CSS está em arquivo externo e conectado no `head`.
- O texto possui fonte, tamanho e altura de linha definidos.
- As cores têm contraste suficiente para leitura.
- Os espaçamentos ajudam a separar os blocos da página.
- As variáveis foram declaradas em `:root`.
- As variáveis são reutilizadas com `var()`.
- O HTML continua semântico e organizado.

## 9) Erros comuns de iniciantes
- escolher muitas cores sem critério;
- usar texto claro sobre fundo claro ou texto escuro sobre fundo escuro;
- aplicar `font-size` diferente em muitos elementos sem hierarquia;
- confundir `margin` com `padding`;
- declarar variável CSS sem os dois hífens iniciais, como `cor-principal` em vez de `--cor-principal`;
- esquecer de usar `var()` depois de declarar as variáveis.

## Materiais para Aprofundamento
- [MDN - Fundamentos de estilização de texto e fontes](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [MDN - Aplicando cores ao HTML com CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_colors/Applying_color)
- [MDN - Valores e unidades CSS](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [MDN - Propriedades customizadas CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)

## Checklist de Compreensão
- [ ] Consigo definir uma família de fontes para a página.
- [ ] Consigo escolher cores coerentes para texto, fundo e destaques.
- [ ] Consigo diferenciar `px`, `%`, `em` e `rem`.
- [ ] Consigo usar `margin` e `padding` para organizar espaçamentos.
- [ ] Consigo criar e reutilizar variáveis CSS.

## Resumo Final
Neste encontro, você começou a transformar páginas semanticamente corretas em páginas visualmente consistentes. Tipografia, cores, unidades e variáveis CSS formam a base para os próximos passos de layout, como Flexbox, Grid e responsividade.

## Questões de Fixação
1. Qual é a diferença entre `margin` e `padding`?

2. Por que `rem` costuma ser uma unidade útil para tamanhos de texto e espaçamentos?

3. O que é contraste de cor e por que ele é importante?

4. Como uma variável CSS é declarada e como ela é usada?

5. Cite duas vantagens de manter uma paleta de cores organizada no projeto.

## Proposta de Trabalho em Dupla para o Semestre
Organizem duplas para desenvolver uma **pesquisa orientada sobre desenvolvimento web**, relacionando conceitos de HTML e CSS com exemplos práticos de código.

A proposta não é criar um site completo, mas produzir um material de estudo claro, organizado e tecnicamente correto, que possa ajudar outros estudantes a compreenderem pontos importantes da construção de páginas web.

### Tema da pesquisa
Cada dupla deve escolher um ponto relacionado ao desenvolvimento web que envolva, obrigatoriamente, **HTML e CSS trabalhando juntos**. Exemplos de temas possíveis:
- página semântica com `header`, `nav`, `main` e `footer` estilizados com CSS;
- menu de navegação com links internos em HTML e aparência definida por CSS;
- seção de cards com `article` em HTML e layout visual com CSS;
- galeria com `figure`, `img`, `figcaption` e estilização de imagens;
- tabela HTML com legenda, cabeçalho e formatação visual em CSS;
- formulário HTML com campos, rótulos e estilos para entrada de dados;
- página de perfil com imagem, listas, links e paleta de cores em CSS;
- bloco de conteúdo com títulos, parágrafos e hierarquia tipográfica em CSS;
- página com variáveis CSS aplicadas a cores, fontes e espaçamentos;
- layout com Flexbox aplicado a elementos semânticos HTML;
- página responsiva com estrutura HTML e media queries em CSS.

### Objetivo
Pesquisar o tema escolhido, explicar os conceitos principais com linguagem própria e apresentar exemplos de código que mostrem como o recurso funciona na prática.

O material deve responder:
- o que é o conceito pesquisado;
- para que ele serve no desenvolvimento web;
- quando deve ser usado;
- quais são os cuidados ou erros comuns;
- como aplicar o conceito integrando HTML e CSS.

### Requisitos mínimos
- Trabalho em dupla.
- Escolha de um tema que envolva HTML e CSS de forma integrada.
- Explicação teórica com linguagem clara e objetiva.
- Pelo menos 2 exemplos de código comentados ou explicados.
- Pelo menos 1 exemplo usando HTML.
- Pelo menos 1 exemplo usando CSS relacionado ao HTML apresentado.
- Indicação das fontes consultadas.
- Organização do conteúdo com títulos, subtítulos e listas.
- Conclusão curta explicando o que a dupla aprendeu com a pesquisa.

### Estrutura recomendada
1. Título do tema pesquisado.
2. Nome dos integrantes da dupla.
3. Introdução ao assunto.
4. Explicação dos conceitos principais.
5. Exemplos de código com HTML e CSS integrados.
6. Comentários sobre o funcionamento dos exemplos.
7. Erros comuns e boas práticas.
8. Fontes consultadas.
9. Conclusão da dupla.

### Exemplos de código
Os exemplos devem ser pequenos, funcionais e coerentes com o tema pesquisado.

Exemplo de trecho HTML:
```html
<section>
  <h2>HTML semântico</h2>
  <p>Elementos semânticos ajudam a organizar o conteúdo da página.</p>
</section>
```

Exemplo de trecho CSS:
```css
section {
  padding: 1rem;
  border: 1px solid #d8dee9;
}
```

