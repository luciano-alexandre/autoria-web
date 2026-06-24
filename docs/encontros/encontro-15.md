# Encontro 15 - Flexbox para Navegação e Cards

**Bimestre:** 2º Bimestre  
**Entrega:** Seção em Flexbox

## Visão Geral
Neste encontro, você começa a organizar elementos na tela usando Flexbox.
O foco é criar layouts em uma dimensão, principalmente menus de navegação, grupos de botões, linhas de cards e blocos que precisam de alinhamento mais controlado.

Se no encontro anterior você definiu uma base visual com tipografia, cores, unidades e variáveis, agora passa a distribuir os elementos na página de forma mais flexível e organizada.

## Conceitos Essenciais
- Diferença entre container flexível e itens flexíveis.
- `display: flex`.
- Eixo principal e eixo transversal.
- Direção com `flex-direction`.
- Alinhamento com `justify-content` e `align-items`.
- Espaçamento entre itens com `gap`.
- Quebra de linha com `flex-wrap`.
- Distribuição de cards com `flex`.

## 1) O que é Flexbox?
Flexbox é um modelo de layout do CSS criado para organizar elementos em uma dimensão: linha ou coluna.
Ele facilita o alinhamento e a distribuição de espaço entre itens.

### Exemplo básico
```css
.menu {
  display: flex;
  gap: 1rem;
}
```

Nesse exemplo, os elementos dentro de `.menu` passam a ser organizados lado a lado, com espaço entre eles.

## 2) Container flexível e itens flexíveis
Quando aplicamos `display: flex` em um elemento, ele se torna o container flexível.
Os filhos diretos desse container se tornam itens flexíveis.

### Exemplo
```html
<nav class="menu">
  <a href="#projetos">Projetos</a>
  <a href="#equipe">Equipe</a>
  <a href="#contato">Contato</a>
</nav>
```

```css
.menu {
  display: flex;
}
```

Neste caso, o `nav` é o container flexível e os links `a` são os itens flexíveis.

## 3) Eixo principal e eixo transversal
Flexbox trabalha com dois eixos:
- eixo principal: direção em que os itens são distribuídos;
- eixo transversal: direção perpendicular ao eixo principal.

Por padrão, o eixo principal é horizontal, da esquerda para a direita.

### Mudando a direção
```css
.grupo {
  display: flex;
  flex-direction: column;
}
```

Com `flex-direction: column`, os itens passam a ser organizados em coluna.

## 4) Alinhamento com Flexbox
As duas propriedades mais usadas para alinhamento são `justify-content` e `align-items`.

### `justify-content`
Controla a distribuição dos itens no eixo principal.

```css
.menu {
  display: flex;
  justify-content: space-between;
}
```

Valores comuns:
- `flex-start`;
- `center`;
- `flex-end`;
- `space-between`;
- `space-around`;
- `space-evenly`.

### `align-items`
Controla o alinhamento dos itens no eixo transversal.

```css
.topo {
  display: flex;
  align-items: center;
}
```

Valores comuns:
- `stretch`;
- `flex-start`;
- `center`;
- `flex-end`.

## 5) Espaçamento com `gap`
O `gap` cria espaço entre os itens do container flexível.
Ele é mais limpo do que aplicar margens individuais em cada item.

### Exemplo
```css
.cards {
  display: flex;
  gap: 1rem;
}
```

## 6) Quebra de linha com `flex-wrap`
Quando há muitos itens em uma linha, eles podem ficar apertados.
Com `flex-wrap`, os itens podem quebrar para a próxima linha.

### Exemplo
```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

## 7) Cards flexíveis
Cards são blocos de conteúdo que costumam repetir a mesma estrutura.
Com Flexbox, é possível distribuir esses blocos de forma organizada.

### Exemplo
```css
.card {
  flex: 1 1 220px;
}
```

Esse valor indica que o card pode crescer, pode encolher e tem uma largura base de `220px`.

## 8) Exemplo principal do encontro
### `index.html`
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flexbox em Navegação e Cards</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header id="topo" class="cabecalho">
      <div>
        <h1>Projetos da Turma</h1>
        <p>Organização de cards com HTML semântico e Flexbox.</p>
      </div>

      <nav class="menu" aria-label="Navegação principal">
        <a href="#projetos">Projetos</a>
        <a href="#equipe">Equipe</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>

    <main>
      <section id="projetos">
        <h2>Projetos em Destaque</h2>

        <div class="cards">
          <article class="card">
            <h3>Guia de Estudos</h3>
            <p>Site com resumos, links úteis e rotina de estudo para estudantes.</p>
            <a href="#contato">Conversar com a equipe</a>
          </article>

          <article class="card">
            <h3>Evento Escolar</h3>
            <p>Página de divulgação com programação, local e informações do evento.</p>
            <a href="#contato">Conversar com a equipe</a>
          </article>

          <article class="card">
            <h3>Campanha Local</h3>
            <p>Projeto informativo com orientações e materiais de conscientização.</p>
            <a href="#contato">Conversar com a equipe</a>
          </article>
        </div>
      </section>

      <section id="equipe">
        <h2>Equipe</h2>
        <p>
          Os cards podem representar projetos, integrantes, etapas ou recursos
          importantes de uma página.
        </p>
      </section>
    </main>

    <footer id="contato">
      <p><a href="#topo">Voltar ao topo</a></p>
    </footer>
  </body>
</html>
```

### `styles.css`
```css
:root {
  --cor-principal: #174ea6;
  --cor-fundo: #f6f8fc;
  --cor-superficie: #ffffff;
  --cor-texto: #202124;
  --cor-borda: #d8dee9;
  --espacamento: 1rem;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
}

.cabecalho {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--cor-principal);
  color: var(--cor-superficie);
}

.cabecalho h1 {
  margin: 0;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.menu a {
  color: var(--cor-superficie);
  text-decoration: none;
  font-weight: 700;
}

main,
footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacamento);
}

.card {
  flex: 1 1 220px;
  padding: 1rem;
  background-color: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
}

.card h3 {
  margin-top: 0;
  color: var(--cor-principal);
}

.card a {
  color: var(--cor-principal);
  font-weight: 700;
}
```

## 9) Exercício
Crie uma página com `index.html` e `styles.css` contendo uma seção de cards organizada com Flexbox.

Sua página deve conter:
- `header` com título e menu de navegação;
- `main` com uma seção principal;
- pelo menos 3 cards usando `article`;
- container dos cards com `display: flex`;
- uso de `gap`;
- uso de `flex-wrap`;
- pelo menos uma regra com `justify-content` ou `align-items`;
- cores, fontes e espaçamentos definidos no CSS externo.

## 10) Aplicação no Trabalho em Dupla
No trabalho em dupla iniciado no Encontro 14, a dupla deve revisar se o tema pesquisado permite incluir um exemplo com Flexbox.

Sugestões de exemplos:
- menu principal organizado com Flexbox;
- lista de cards de conteúdos;
- alinhamento de botões ou links;
- galeria simples;
- bloco de referências úteis;
- seção de destaques em uma página.

Mesmo que o tema escolhido não seja Flexbox, a dupla pode usar este encontro como referência para melhorar a apresentação visual dos exemplos de HTML e CSS da pesquisa.

## 11) Validação rápida antes de considerar concluído
- O Flexbox foi aplicado no container correto.
- Os itens flexíveis são filhos diretos do container.
- O menu ou os cards usam `gap`.
- Os cards conseguem quebrar linha quando não houver espaço suficiente.
- O layout continua legível em largura menor da janela.
- O HTML mantém estrutura semântica.
- O CSS continua em arquivo externo.

## 12) Erros comuns de iniciantes
- aplicar `display: flex` no item em vez do container;
- esperar que `justify-content` funcione sem `display: flex`;
- usar muitas margens nos itens quando `gap` resolveria melhor;
- esquecer `flex-wrap`, deixando cards apertados demais;
- usar Flexbox para layout de página inteira quando Grid seria mais adequado;
- confundir alinhamento no eixo principal com alinhamento no eixo transversal.

## Materiais para Aprofundamento
- [MDN - Conceitos básicos de Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [MDN - Alinhando itens em um container flex](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [MDN - Propriedade flex-wrap](https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex-wrap)
- [MDN - Propriedade flex](https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex)

## Checklist de Compreensão
- [ ] Consigo identificar o container flexível e os itens flexíveis.
- [ ] Consigo usar `display: flex` para organizar elementos em linha ou coluna.
- [ ] Consigo aplicar `justify-content` e `align-items`.
- [ ] Consigo usar `gap` para espaçar itens.
- [ ] Consigo criar uma seção de cards com `flex-wrap`.

## Resumo Final
Neste encontro, você aprendeu a usar Flexbox para organizar menus, cards e grupos de elementos. Essa base será importante para construir layouts mais elaborados e para preparar a transição para CSS Grid no próximo encontro.

## Questões de Fixação
1. O que acontece quando aplicamos `display: flex` em um elemento?

2. Qual é a diferença entre container flexível e item flexível?

3. Para que serve `gap` em um layout Flexbox?

4. Quando `flex-wrap` deve ser usado?

5. Cite uma situação em que Flexbox é mais adequado do que organizar elementos manualmente com margens.
