# Encontro 22 - JavaScript no Front-end: Execução, Variáveis, Tipos e Operadores

**Unidade:** Unidade 3  
**Carga prevista:** 1,5h  
**Entregável previsto:** `index.html`, `styles.css` e `script.js` conectados + exercícios JS I

## Visão Geral

Neste encontro, iniciamos JavaScript a partir de uma página completa. O HTML organiza o conteúdo, o CSS cuida da apresentação e o JavaScript armazena dados, realiza cálculos e atualiza as informações exibidas.

O exemplo principal será um **Painel de Estudos JavaScript**. Ele calcula o progresso de um estudante com variáveis e operadores e mostra o resultado tanto na página quanto no Console do navegador.

## Conceitos Essenciais

- responsabilidades de HTML, CSS e JavaScript;
- conexão de um arquivo JavaScript externo com `script`;
- execução do código e uso do Console do navegador;
- comentários e instruções em JavaScript;
- declaração de variáveis com `const` e `let`;
- tipos `string`, `number`, `boolean`, `null` e `undefined`;
- operadores aritméticos, de comparação e lógicos;
- concatenação e template literals;
- exibição dos resultados na página.

## 1) O papel de cada linguagem

Em uma página web, as três linguagens trabalham juntas:

| Linguagem | Responsabilidade no exemplo |
|---|---|
| HTML | Define títulos, cards, textos e regiões da página. |
| CSS | Define cores, espaçamentos, tipografia e layout. |
| JavaScript | Guarda dados, calcula resultados e atualiza informações. |

O JavaScript não substitui o HTML ou o CSS. Ele acrescenta comportamento e processamento à estrutura existente.

## 2) Passo 1 - Organizar a pasta do projeto

Crie uma pasta chamada `aula22` com os três arquivos:

```text
aula22/
├── index.html
├── styles.css
└── script.js
```

Essa separação facilita a leitura, a manutenção e a identificação da responsabilidade de cada linguagem.

## 3) Passo 2 - Conectar CSS e JavaScript ao HTML

No `head` do documento, conecte os dois arquivos externos:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Painel de Estudos JavaScript</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
```

O atributo `src` informa o caminho do script. O atributo `defer` permite que o HTML seja analisado antes da execução do JavaScript. Assim, quando o script procurar os elementos da página, eles já terão sido criados pelo navegador.

> Sempre confira se o nome escrito em `src` corresponde exatamente ao nome do arquivo, inclusive em relação a letras maiúsculas e minúsculas.

## 4) Passo 3 - Criar a estrutura visual do painel

O HTML fornece locais identificados para os resultados:

```html
<section aria-labelledby="titulo-resumo">
  <h2 id="titulo-resumo">Resumo do estudante</h2>
  <div class="grade-cards">
    <article class="card">
      <h3>Estudante</h3>
      <p id="nome-estudante" class="valor">Carregando...</p>
    </article>

    <article class="card">
      <h3>Progresso</h3>
      <p id="progresso" class="valor">0%</p>
    </article>

    <article class="card">
      <h3>Situação</h3>
      <p id="situacao" class="valor">Calculando...</p>
    </article>
  </div>
</section>
```

Os valores iniciais permitem que o conteúdo ainda faça sentido antes da execução do script. Os identificadores serão usados para localizar cada saída.

## 5) Passo 4 - Aplicar o CSS já estudado

O projeto reaproveita variáveis CSS, contêiner centralizado e layout responsivo:

```css
:root {
  --cor-primaria: #173b57;
  --cor-destaque: #0b7285;
  --cor-fundo: #eef3f6;
  --cor-superficie: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--cor-fundo);
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;
}

.grade-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
}
```

Neste encontro, o CSS não é o conteúdo novo. Ele serve para manter a prática integrada e reforçar o que já foi estudado.

## 6) Passo 5 - Executar a primeira instrução JavaScript

Comece o arquivo `script.js` com:

```js
console.log("JavaScript conectado com sucesso!");
```

Para verificar:

1. abra `index.html` no navegador;
2. pressione `F12`;
3. selecione a aba **Console**;
4. atualize a página;
5. procure a mensagem.

O Console mostra mensagens, resultados e erros. Ele será uma ferramenta essencial durante toda a unidade.

## 7) Passo 6 - Criar variáveis com `const` e `let`

Variável é um nome associado a um valor usado pelo programa:

```js
const nomeEstudante = "Ana";
const totalAulas = 10;
let aulasConcluidas = 7;
const entregouExercicio = true;
```

- `const` declara uma variável que não receberá outro valor;
- `let` declara uma variável que poderá receber outro valor;
- `=` é o operador de atribuição: coloca o valor da direita na variável da esquerda;
- cada instrução termina com `;`, conforme o padrão adotado no projeto.

Prefira `const`. Use `let` apenas quando o valor realmente precisar mudar. Neste exemplo, `aulasConcluidas` poderá aumentar posteriormente.

### Nomes de variáveis

Use nomes que expliquem o conteúdo:

```js
const totalAulas = 10; // claro
const x = 10;          // pouco informativo
```

Em JavaScript, é comum usar `camelCase`: a primeira palavra começa com letra minúscula e as seguintes começam com maiúscula, como em `nomeEstudante`.

## 8) Passo 7 - Reconhecer os tipos de dados

O tipo descreve a natureza do valor:

```js
const nomeEstudante = "Ana";       // string: texto
const totalAulas = 10;              // number: número
const entregouExercicio = true;     // boolean: verdadeiro ou falso
const observacao = null;            // ausência intencional de valor
let dataEntrega;                    // undefined: valor ainda não definido
```

Use `typeof` para investigar o tipo:

```js
console.log(typeof nomeEstudante);      // "string"
console.log(typeof totalAulas);         // "number"
console.log(typeof entregouExercicio);  // "boolean"
console.log(typeof dataEntrega);        // "undefined"
```

`null` e `undefined` representam ausência, mas não são iguais em intenção: `null` costuma ser definido de propósito; `undefined` normalmente indica que ainda não houve atribuição.

## 9) Passo 8 - Calcular com operadores aritméticos

Use os dados para produzir novas informações:

```js
const percentual = (aulasConcluidas / totalAulas) * 100;
const pontosPorAula = 10;
const pontos = aulasConcluidas * pontosPorAula;
const aulasRestantes = totalAulas - aulasConcluidas;
```

Principais operadores:

| Operador | Operação | Exemplo | Resultado |
|---|---|---|---:|
| `+` | adição | `7 + 3` | `10` |
| `-` | subtração | `10 - 7` | `3` |
| `*` | multiplicação | `7 * 10` | `70` |
| `/` | divisão | `7 / 10` | `0.7` |
| `%` | resto da divisão | `7 % 2` | `1` |
| `**` | potência | `2 ** 3` | `8` |

Os parênteses em `(aulasConcluidas / totalAulas)` deixam clara a ordem do cálculo.

## 10) Passo 9 - Comparar valores e combinar condições

Uma comparação produz `true` ou `false`:

```js
const atingiuMeta = percentual >= 70;
const estaEmDia = atingiuMeta && entregouExercicio;
```

No exemplo, `percentual >= 70` verifica se o estudante atingiu pelo menos 70%. O operador `&&` exige que as duas condições sejam verdadeiras.

| Categoria | Operadores | Significado |
|---|---|---|
| comparação | `===`, `!==` | igual e diferente, considerando o tipo |
| comparação | `>`, `<`, `>=`, `<=` | maior, menor, maior ou igual, menor ou igual |
| lógico | `&&` | as duas condições precisam ser verdadeiras |
| lógico | `\|\|` | pelo menos uma condição precisa ser verdadeira |
| lógico | `!` | inverte um valor booleano |

Prefira `===` a `==`, pois a comparação estrita também verifica o tipo:

```js
console.log(7 === 7);   // true
console.log(7 === "7"); // false
```

## 11) Passo 10 - Produzir textos com template literals

Template literals usam crases e inserem valores com `${}`:

```js
const textoProgresso = `${percentual}%`;
const textoAulas = `${aulasConcluidas} de ${totalAulas}`;
const textoPontos = `${pontos} pontos`;
```

Compare com a concatenação tradicional:

```js
const textoAulas = aulasConcluidas + " de " + totalAulas;
```

As duas formas funcionam, mas template literals costumam ficar mais legíveis quando um texto reúne vários valores.

## 12) Passo 11 - Mostrar os valores no Console

Use rótulos claros ao testar:

```js
console.log("Nome:", nomeEstudante);
console.log("Percentual:", percentual);
console.log("Está em dia?", estaEmDia);
console.log("Aulas restantes:", aulasRestantes);
```

Evite mostrar apenas `console.log(valor)`: o rótulo ajuda a reconhecer cada resultado.

## 13) Passo 12 - Exibir os resultados no HTML

O script completo atualiza o texto dos elementos:

```js
document.querySelector("#nome-estudante").textContent = nomeEstudante;
document.querySelector("#progresso").textContent = textoProgresso;
document.querySelector("#situacao").textContent = textoSituacao;
```

Leia a primeira linha assim:

1. `document` representa o documento HTML;
2. `querySelector("#nome-estudante")` localiza o elemento com esse `id`;
3. `textContent` recebe o texto que será exibido.

Este é apenas um primeiro contato com a página dinâmica. Seleção e manipulação do DOM serão estudadas detalhadamente no Encontro 25.

## 14) Código JavaScript completo

```js
const nomeEstudante = "Ana";
const totalAulas = 10;
let aulasConcluidas = 7;
const entregouExercicio = true;
const proximaAula = "Condicionais e laços";
const observacao = null;

const percentual = (aulasConcluidas / totalAulas) * 100;
const pontosPorAula = 10;
const pontos = aulasConcluidas * pontosPorAula;
const aulasRestantes = totalAulas - aulasConcluidas;

const atingiuMeta = percentual >= 70;
const estaEmDia = atingiuMeta && entregouExercicio;

const textoProgresso = `${percentual}%`;
const textoAulas = `${aulasConcluidas} de ${totalAulas}`;
const textoPontos = `${pontos} pontos`;
const textoSituacao = estaEmDia ? "Em dia" : "Precisa revisar";

console.log("Nome:", nomeEstudante);
console.log("Tipo do nome:", typeof nomeEstudante);
console.log("Percentual:", percentual);
console.log("Tipo do percentual:", typeof percentual);
console.log("Está em dia?", estaEmDia);
console.log("Aulas restantes:", aulasRestantes);
console.log("Observação:", observacao);

document.querySelector("#nome-estudante").textContent = nomeEstudante;
document.querySelector("#progresso").textContent = textoProgresso;
document.querySelector("#situacao").textContent = textoSituacao;
document.querySelector("#aulas-concluidas").textContent = textoAulas;
document.querySelector("#pontos").textContent = textoPontos;
document.querySelector("#proxima-aula").textContent = proximaAula;
```

No arquivo executável, há ainda uma pequena alteração de classe visual para a situação positiva. Esse trecho serve como prévia e será explicado nos encontros de condicionais e DOM.

## 15) Prática guiada - Personalizar o painel

Sem alterar a estrutura principal, faça as mudanças abaixo e observe a página e o Console após cada uma:

1. troque o nome do estudante;
2. altere `aulasConcluidas` para `5`;
3. altere `entregouExercicio` para `false`;
4. crie `const media = 8.5`;
5. crie `const aprovado = media >= 6 && entregouExercicio`;
6. mostre `media` e `aprovado` no Console com rótulos;
7. acrescente ao HTML um novo card para a média;
8. exiba a média nesse card usando JavaScript.

## 16) Exercícios JS I

### Exercício 1 - Dados pessoais

Declare variáveis para nome, idade, turma e matrícula ativa. Mostre no Console o valor e o tipo de cada uma.

### Exercício 2 - Conversor de tempo

Crie uma variável com uma quantidade de horas e calcule quantos minutos e segundos ela representa. Mostre frases completas no Console.

### Exercício 3 - Compra de material

Crie variáveis para nome do produto, preço e quantidade. Calcule o total e informe se ele é maior ou igual a R$ 100.

### Exercício 4 - Progresso de leitura

Crie variáveis para o total de páginas e as páginas lidas. Calcule o percentual concluído e as páginas restantes. Exiba os resultados em uma página HTML estilizada.

### Exercício 5 - Desafio integrado

Adapte o Painel de Estudos para outro contexto, como leitura, exercícios físicos ou economia. A página deve conter:

- HTML semântico com pelo menos três áreas de resultado;
- CSS externo com layout responsivo;
- JavaScript externo conectado com `defer`;
- pelo menos uma `string`, um `number` e um `boolean`;
- pelo menos três operadores diferentes;
- resultados exibidos no Console e no HTML.

## 17) Roteiro de validação no navegador e no DevTools

1. Abra `códigos/aula22/index.html` no navegador.
2. Confirme que os cards deixaram de exibir os valores iniciais.
3. Abra o Console e verifique as sete mensagens do script.
4. Confirme que não há mensagens vermelhas de erro.
5. Na aba **Sources**, localize e abra `script.js`.
6. Altere um valor, salve o arquivo e atualize a página.
7. Reduza a largura da janela e verifique a reorganização dos cards.
8. Desative `script.js` temporariamente no HTML e compare o resultado.

## 18) Erros comuns de iniciantes

- escrever o nome incorreto no atributo `src`;
- omitir `defer` e tentar acessar elementos antes de sua criação;
- usar aspas diferentes no início e no fim de uma `string`;
- usar vírgula em números decimais, como `8,5`, em vez de `8.5`;
- confundir atribuição (`=`) com comparação estrita (`===`);
- colocar texto sem aspas, fazendo o navegador procurar uma variável inexistente;
- redeclarar uma variável com o mesmo nome;
- tentar atribuir um novo valor a uma variável declarada com `const`;
- esquecer que identificadores diferenciam maiúsculas de minúsculas;
- alterar um `id` no HTML sem atualizar o seletor correspondente no JavaScript.

## Materiais para Aprofundamento

- [MDN - O que é JavaScript?](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [MDN - Gramática e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN - Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [MDN - Console](https://developer.mozilla.org/pt-BR/docs/Web/API/console)

## Checklist de Compreensão

- [ ] Consigo explicar a responsabilidade de HTML, CSS e JavaScript.
- [ ] Consigo conectar um arquivo JavaScript externo usando `defer`.
- [ ] Consigo abrir o Console e interpretar mensagens e erros básicos.
- [ ] Consigo escolher entre `const` e `let`.
- [ ] Consigo reconhecer `string`, `number`, `boolean`, `null` e `undefined`.
- [ ] Consigo usar operadores aritméticos, de comparação e lógicos.
- [ ] Consigo criar textos com template literals.
- [ ] Consigo alterar dados e prever os resultados do script.
- [ ] Consigo exibir um resultado simples no HTML.

## Resumo Final

Neste encontro, HTML, CSS e JavaScript foram usados juntos pela primeira vez. O JavaScript armazenou valores em variáveis, identificou tipos, realizou operações e apresentou resultados no Console e na página. Essa base será usada no próximo encontro para tomar decisões com condicionais e repetir instruções com laços.

## Questões de Fixação

1. Qual é a função de `defer` ao conectar o arquivo JavaScript?
2. Quando devemos usar `let` em vez de `const`?
3. Qual é a diferença entre `number`, `string` e `boolean`?
4. Que resultado é produzido por uma comparação?
5. Qual é a diferença entre `=` e `===`?
6. O que o operador `&&` exige para produzir `true`?
7. Por que usar rótulos nas mensagens de `console.log`?
8. Como HTML, CSS e JavaScript colaboram no Painel de Estudos?
