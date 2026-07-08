# Encontro 16 - Flexbox para Navegação, Agrupamentos e Cards

**Unidade:** Unidade 1  

## Visão Geral
Neste encontro, você continua exatamente o projeto do Encontro 15.
A mudança agora é de organização: em vez de ajustar espaçamentos item por item, você usa Flexbox para alinhar e distribuir grupos de elementos.

O objetivo é aproximar ainda mais o resultado visual da referência, com poucas alterações estruturais.

## Conceitos Essenciais
- O que é Flexbox e quando usar.
- Contêiner flex e itens flex.
- `justify-content`, `align-items` e `gap`.
- `flex-wrap` e `flex` para cards.
- Evolução incremental do mesmo projeto.

## 1) O que é Flexbox?
Flexbox é um modelo de layout **unidimensional** do CSS.
Ele organiza elementos em **linha** ou **coluna**, com melhor controle de alinhamento e espaçamento.

Na prática:
- você aplica `display: flex` no contêiner;
- os elementos filhos viram itens flex;
- `justify-content` controla a distribuição no eixo principal;
- `align-items` controla o alinhamento no eixo transversal.

## 2) Ponto de partida (Encontro 15)
Você já tem:
- `header`, `nav`, `main`, seções e `footer`;
- contêiner centralizado com `.container`;
- blocos com borda e espaçamento (`.bloco`);
- cards prontos com classe `.card`;
- menu e botão estilizados com `inline-block`.

Agora vamos evoluir a mesma base com Flexbox, sem recomeçar o projeto.

### Referência visual da sequência
![Referência visual usada na continuidade do projeto](./imagens/encontro-15-exec-resultado.png)

## 3) Passo 1 - HTML 
O HTML permanece quase igual ao do Encontro 15.
A única mudança é agrupar aviso e botão dentro de um contêiner para aplicar Flexbox nesse trecho.

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portal da Turma - Projeto Padrão</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header id="topo" class="faixa">
      <div class="container">
        <h1>Portal da Turma</h1>
        <p class="subtitulo">Projeto padrão da disciplina de Padrões Web</p>
      </div>
    </header>

    <nav class="menu faixa" aria-label="Navegação principal">
      <div class="container">
        <a href="#inicio">Início</a>
        <a href="#conteudos">Conteúdos</a>
        <a href="#exercicios">Exercícios</a>
        <a href="#materiais">Materiais</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>

    <main id="inicio" class="container">
      <section id="conteudos" class="bloco bloco-sobre">
        <h2>Sobre o Encontro</h2>
        <p>
          Continuamos o projeto iniciado no encontro anterior, agora aplicando Flexbox
          para alinhar navegação, agrupamentos e cartões com mais previsibilidade.
        </p>
      </section>

      <section id="exercicios" class="bloco bloco-aprendizado">
        <h2>O que você vai aprender</h2>
        <div class="cards-aprendizado">
          <article class="card">
            <h3>Menu Flexível</h3>
            <p>Organizar links com `display: flex`, `gap` e quebra de linha.</p>
          </article>
          <article class="card">
            <h3>Cards Fluidos</h3>
            <p>Distribuir cartões com base mínima e melhor aproveitamento da largura.</p>
          </article>
          <article class="card">
            <h3>Agrupamento</h3>
            <p>Alinhar conteúdo e ação no bloco de destaque sem ajustes manuais.</p>
          </article>
        </div>
      </section>

      <section id="materiais" class="bloco destaque">
        <h2>Aviso importante</h2>
        <div class="destaque-acao">
          <p class="aviso" id="aviso-semana">
            Este projeto continuará sendo reaproveitado e evoluído nos próximos encontros.
          </p>
          <a class="botao" href="#exercicios">Continuar prática</a>
        </div>
      </section>
    </main>

    <footer id="contato" class="faixa">
      <div class="container">
        <p>Disciplina de Padrões Web</p>
      </div>
    </footer>
  </body>
</html>
```

### O que mudou no HTML?
- apenas um novo agrupamento: `.destaque-acao`;
- todo o restante permanece igual à versão do Encontro 15.

## 4) Passo 2 - CSS 
Mantenha todas as regras já construídas nos Encontros 14 e 15.
Neste encontro, adicione apenas as regras abaixo.

### Etapa 2.1 - Menu em Flexbox
```css
.menu > .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.menu > .container a {
  margin-right: 0;
}
```
**Explicação dos novos elementos CSS**
- `.menu > .container`: usa o combinador `>` (filho direto), então a regra vale apenas para o `.container` que é filho direto de `.menu`.
- `display: flex`: transforma esse contêiner em flex e os filhos passam a ser itens flex.
- `flex-wrap: wrap`: permite que os itens quebrem para outra linha quando não couberem.
- `justify-content: center`: centraliza os itens no eixo principal (horizontal, nesse caso).
- `gap: 0.5rem`: cria espaço entre os itens flex sem precisar de margens individuais.
- `margin-right: 0`: remove a margem antiga dos links para não somar com o `gap`.

**O que isso resolve**
- transforma o grupo de links em um contêiner flex;
- usa `gap` para espaçamento uniforme;
- remove a margem antiga dos links para evitar espaçamento duplicado.

### Etapa 2.2 - Cards em Flexbox
```css
.cards-aprendizado {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.card {
  flex: 1 1 16rem;
  margin-bottom: 0;
}
```
**Explicação dos novos elementos CSS**
- `.cards-aprendizado`: seleciona o bloco que agrupa os cards.
- `display: flex`: coloca os cards em layout flexível.
- `flex-wrap: wrap`: permite quebra de linha dos cards.
- `gap: 0.75rem`: define espaçamento uniforme entre os cards.
- `flex: 1 1 16rem`: define como cada card ocupa espaço dentro da linha flex.
- Primeiro `1` (`flex-grow`): se sobrar espaço na linha, o card pode crescer.
- Segundo `1` (`flex-shrink`): se faltar espaço, o card pode encolher.
- `16rem` (`flex-basis`): largura base inicial de cada card antes de crescer ou encolher.
- Efeito prático: o navegador tenta manter cada card perto de `16rem`; quando cabe, distribui lado a lado; quando não cabe, quebra para a linha seguinte (junto com `flex-wrap: wrap`).
- `margin-bottom: 0`: remove a margem vertical antiga, já substituída por `gap`.

**O que isso resolve**
- mantém os cards na mesma linha quando houver espaço;
- quebra para nova linha em larguras menores;
- define base de `16rem` para manter legibilidade.

### Etapa 2.3 - Aviso e botão no bloco de destaque
```css
.destaque-acao {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.destaque-acao .aviso {
  margin: 0;
  flex: 1 1 20rem;
}
```
**Explicação dos novos elementos CSS**
- `.destaque-acao`: novo contêiner para organizar aviso e botão juntos.
- `display: flex`: ativa Flexbox no bloco de destaque.
- `flex-wrap: wrap`: permite quebra quando a largura diminuir.
- `align-items: center`: alinha os itens no eixo transversal (vertical, nesse caso).
- `.destaque-acao .aviso`: combinador por descendência (espaço), seleciona `.aviso` dentro de `.destaque-acao`.
- `margin: 0`: remove a margem padrão do parágrafo para facilitar o alinhamento.
- `flex: 1 1 20rem`: mantém o aviso flexível e com base de leitura maior.

**O que isso resolve**
- alinha texto e botão no mesmo agrupamento;
- permite quebra organizada em telas menores;
- mantém o aviso com prioridade de largura.

### CSS novo deste encontro (resumo)
```css
.menu > .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.menu > .container a {
  margin-right: 0;
}

.cards-aprendizado {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.card {
  flex: 1 1 16rem;
  margin-bottom: 0;
}

.destaque-acao {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.destaque-acao .aviso {
  margin: 0;
  flex: 1 1 20rem;
}
```

## 5) Validação rápida da versão 3
- O menu está em Flexbox e usa `gap`.
- Os cards usam `flex` e quebram linha com `flex-wrap`.
- O bloco de destaque alinha aviso e botão sem ajustes manuais de posição.
- A base do Encontro 15 foi preservada, com poucas mudanças.

## 6) Erros comuns nesta evolução
- aplicar `display: flex` no item em vez do contêiner;
- esquecer de remover margens antigas ao usar `gap`;
- não definir base mínima dos cards com `flex`;
- alterar demais o HTML e perder continuidade com o Encontro 15.

## 7) Prática Final - Projeto Padrão da Disciplina (Versão 3)
Nesta versão, o projeto mantém a estrutura do Encontro 15 e ganha layout flexível nos pontos mais importantes.
Isso prepara a transição para o Encontro 17, focado em tamanhos e unidades de medida no mesmo projeto.

## Materiais para Aprofundamento
- [MDN - Flexbox](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [MDN - `justify-content`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/justify-content)
- [MDN - `align-items`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/align-items)
- [MDN - `gap`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/gap)
- [MDN - `flex-wrap`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex-wrap)
- [MDN - `flex`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex)

## Checklist de Compreensão
- [ ] Consigo explicar o que é Flexbox e quando usar.
- [ ] Consigo aplicar `display: flex` no contêiner correto.
- [ ] Consigo usar `gap` no lugar de margens repetidas.
- [ ] Consigo distribuir cards com `flex` e `flex-wrap`.
- [ ] Consigo evoluir a base do Encontro 15 com poucas mudanças.

## Resumo Final
Neste encontro, você manteve a base construída no Encontro 15 e aplicou Flexbox de forma objetiva em navegação, cards e bloco de destaque.
Com poucas alterações, o layout ficou mais organizado e pronto para avançar para o estudo de dimensionamento em CSS.

## Prática Extra - Evolução Visual da Versão 3
Agora, evolua o mesmo projeto para deixá-lo **mais próximo da imagem de referência** do encontro, sem mudar a estrutura principal do HTML.

Use apenas elementos já estudados nos encontros anteriores (seletores, classes, cores, espaçamento, bordas, tipografia e Flexbox).

### Objetivo da prática
Aprimorar acabamento visual e consistência do layout, mantendo a base do Encontro 16.

### Ajustes sugeridos
1. Defina um **background para os cards** (`.card`) para destacar melhor cada bloco de conteúdo.
2. Reforce a separação visual dos cards com combinação de `border`, `border-radius` e `padding`.
3. Revise contraste e legibilidade de títulos e textos dos cards.
4. Harmonize os espaçamentos entre seções (`.bloco`) para manter ritmo vertical consistente.
5. Ajuste o bloco de destaque (`.destaque`) para ficar visualmente coerente com os cards e com o menu.
6. Faça uma revisão final de alinhamento usando as regras de Flexbox já aplicadas (`gap`, `justify-content`, `align-items`, `flex-wrap`).

### Critérios de validação
- O visual está mais próximo da referência sem reescrever a página.
- Os cards possuem fundo e melhor definição de área.
- O layout continua responsivo e com quebras organizadas.
- A solução reaproveita classes e estrutura já existentes.
