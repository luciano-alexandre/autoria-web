# Encontro 6 - Semântica HTML5 e Landmarks

**Unidade:** Unidade 1  

## Visão Geral
Neste encontro, você evolui da organização textual para a organização **semântica** da página.  
O foco é usar elementos do HTML5 que descrevem função e contexto do conteúdo, e não apenas aparência.

Se no Encontro 5 você estruturou títulos, parágrafos, listas e links, agora você passa a estruturar a **arquitetura da página** com elementos como `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`.

## Conceitos Essenciais
- Diferença entre `div` genérica e elementos semânticos.
- Papel dos landmarks na navegação e acessibilidade.
- Uso correto de `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`.
- Relação entre semântica, manutenção e qualidade técnica.
- Regras práticas iniciais para páginas semanticamente organizadas.

## 1) O que é semântica em HTML?
Semântica é atribuir significado estrutural ao conteúdo.  
Em vez de marcar tudo com `div`, usamos elementos que indicam "o que aquela parte representa" na página.

### Exemplo de contraste
Sem semântica:
```html
<div class="topo">...</div>
<div class="menu">...</div>
<div class="conteudo">...</div>
<div class="rodape">...</div>
```

Com semântica:
```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

### Por que isso importa?
- torna o código mais legível para quem desenvolve;
- facilita manutenção e evolução do projeto;
- melhora interpretação por tecnologias assistivas;
- prepara a página para práticas de acessibilidade e SEO on-page.

## 2) Landmarks: marcos de navegação da página
Landmarks são regiões principais reconhecidas por navegadores e leitores de tela para navegação rápida entre blocos relevantes.

No HTML5, os principais landmarks deste momento são:
- `header`
- `nav`
- `main`
- `aside`
- `footer`

### Resultado prático
Com landmarks bem definidos, a navegação assistiva fica mais eficiente e a estrutura da página fica mais clara para leitura técnica.

## 3) Elementos semânticos principais deste encontro

### `header`
Representa o cabeçalho da página ou de uma seção.

```html
<header>
  <h1>Portal da Disciplina</h1>
</header>
```

### `nav`
Representa bloco de navegação com links principais.

```html
<nav aria-label="Navegação principal">
  <a href="#conteudo">Conteúdo</a>
  <a href="#referencias">Referências</a>
</nav>
```

### `main`
Representa o conteúdo principal único da página.

```html
<main id="conteudo">
  <h2>Conteúdo central</h2>
</main>
```

### `section`
Agrupa conteúdo tematicamente relacionado.

```html
<section>
  <h2>Objetivos da aula</h2>
</section>
```

### `article`
Representa conteúdo independente e autocontido.

```html
<article>
  <h3>Resumo do tema</h3>
  <p>Texto do artigo.</p>
</article>
```

### `aside`
Conteúdo complementar ao fluxo principal.

```html
<aside>
  <h2>Leitura complementar</h2>
</aside>
```

### `footer`
Rodapé da página ou seção, com informações finais.

```html
<footer>
  <p>Disciplina de Padrões Web - IFRN</p>
</footer>
```

## 4) Regras práticas para começar bem
1. Use apenas **um `main`** por página.
2. Garanta hierarquia coerente de títulos (`h1`, `h2`, `h3`).
3. Use `section` quando houver título e tema claro.
4. Use `article` para blocos que poderiam existir isoladamente.
5. Use `nav` apenas para links de navegação (não para qualquer lista de links).
6. Evite trocar elementos semânticos por `div` sem necessidade.

## 5) Exemplo principal do encontro (`index.html`)
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Encontro 6 - Semântica HTML5</title>
  </head>
  <body>
    <header>
      <h1 id="topo">Padrões Web - Unidade 1</h1>
      <p>Estrutura semântica inicial com landmarks.</p>
    </header>

    <nav aria-label="Navegação principal">
      <a href="#objetivos">Objetivos</a> |
      <a href="#conteudos">Conteúdos</a> |
      <a href="#referencias">Referências</a>
    </nav>

    <main>
      <section id="objetivos">
        <h2>Objetivos da Aula</h2>
        <ul>
          <li>Aplicar elementos semânticos do HTML5.</li>
          <li>Organizar a página por regiões com significado.</li>
          <li>Melhorar legibilidade e manutenção do código.</li>
        </ul>
      </section>

      <section id="conteudos">
        <h2>Conteúdos Trabalhados</h2>
        <article>
          <h3>Landmarks principais</h3>
          <p>
            Nesta etapa, vamos usar header, nav, main, section, article, aside e footer
            para estruturar páginas com função bem definida.
          </p>
        </article>
      </section>

      <aside>
        <h2>Dica de Estudo</h2>
        <p>Abra o DevTools e observe a árvore HTML para validar a estrutura semântica.</p>
      </aside>
    </main>

    <footer id="referencias">
      <p>Material de apoio: MDN Web Docs.</p>
      <p><a href="#topo">Voltar ao início</a></p>
    </footer>
  </body>
</html>
```

## 6) Exercício
Crie uma página `index.html` com estrutura semântica inicial contendo:
- `header` com título da página;
- `nav` com pelo menos 3 links;
- `main` com 2 seções (`section`);
- 1 `article` dentro de uma seção;
- 1 `aside` com conteúdo complementar;
- `footer` com informação final e link interno.

**Exemplo visual do resultado esperado:**
![Exemplo visual do exercício do Encontro 6](./imagens/encontro-6-exec-resultado.svg)

## 7) Validação rápida antes de considerar concluído
- Existe apenas um `main` na página.
- O conteúdo de navegação principal está em `nav`.
- O conteúdo central está dentro de `main`.
- Seções têm título (`h2`) e tema claro.
- `article` foi usado para bloco autocontido.
- `footer` conclui a página com informações finais.

## 8) Erros comuns de iniciantes
- usar `section` sem título;
- usar `article` para qualquer bloco sem autonomia de conteúdo;
- criar mais de um `main` na mesma página;
- colocar menu principal fora de `nav`;
- voltar a usar muitas `div` sem necessidade semântica.

## Materiais para Aprofundamento
- [MDN - Guia de semântica em HTML](https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics)
- [MDN - Elemento `<main>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/main)
- [MDN - Elemento `<section>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/section)
- [MDN - Elemento `<article>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/article)
- [MDN - Elemento `<nav>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/nav)
- [MDN - Landmarks e navegação](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role)

## Checklist de Compreensão
- [ ] Consigo explicar o que é semântica em HTML.
- [ ] Consigo diferenciar `div` genérica de elemento semântico.
- [ ] Consigo estruturar página com landmarks básicos.
- [ ] Consigo usar `section`, `article` e `aside` de forma adequada.
- [ ] Consigo validar semanticamente uma página no DevTools.

## Resumo Final
Neste encontro, você deixou de montar apenas conteúdo textual e passou a organizar a página com significado estrutural. Isso melhora legibilidade, manutenção e prepara a base para acessibilidade e evolução técnica nos próximos encontros.

## Questões de Fixação
1. Qual é a principal diferença entre usar `div` e usar elementos semânticos como `header` e `main`?

2. Por que é recomendado ter apenas um `main` por página?

3. Em que situação o uso de `article` é mais adequado que `section`?

4. Qual é o papel do `nav` na estrutura semântica?

5. Cite dois benefícios de usar landmarks em uma página web.
