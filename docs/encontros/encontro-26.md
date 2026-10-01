# Encontro 26 - Correção da Atividade Avaliativa de JavaScript

**Unidade:** Unidade 3  
**Carga prevista:** 1,5h  
**Entregável previsto:** `index.html` e `script.js` corrigidos, organizados e sem erros no Console

## Visão Geral

Neste encontro, fazemos a correção orientada da atividade avaliativa desenvolvida no Encontro 25. A solução constrói o **Painel de Missões de Programação** usando somente os recursos solicitados: variáveis, tipos de dados, operadores, condicionais, arrays, estruturas de repetição, funções e Console.

## 1) Relembrando os requisitos

A entrega precisava conter:

1. `index.html` usado apenas para carregar o JavaScript;
2. `script.js` conectado com `defer`;
3. nome do estudante, array de pontos, situação da entrega e pontuação mínima;
4. função para somar os pontos;
5. função para calcular a média;
6. repetição para contar as missões concluídas;
7. função para classificar o desempenho;
8. decisão simples para produzir **Entregue** ou **Pendente**;
9. repetição para apresentar as quatro missões;
10. relatório completo no Console, com rótulos claros.

Os valores iniciais são `80`, `90`, `70` e `100`. Portanto, o total esperado é `340`, a média é `85` e as quatro missões atingem a pontuação mínima.

## 2) Passo 1 - Organizar a pasta

A estrutura mínima é:

```text
nome-sobrenome/
├── index.html
└── script.js
```

Não é necessário criar `styles.css`, pois a avaliação é exclusivamente sobre JavaScript.

## 3) Passo 2 - Conectar o JavaScript

O HTML pode ser mínimo:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Painel de Missões de Programação</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>
```

O nome em `src` deve ser idêntico ao nome do arquivo. O atributo `defer` mantém o padrão usado nas aulas, mesmo que esta atividade não manipule o HTML.

## 4) Passo 3 - Planejar as funções

Antes dos dados, declaramos funções para quatro responsabilidades:

```js
function somarPontos(pontos) {}
function calcularMedia(total, quantidade) {}
function contarMissoesConcluidas(pontos, pontuacaoMinima) {}
function obterClassificacao(media, entregaRealizada) {}
```

A atividade exige pelo menos três funções. A contagem foi colocada em uma quarta função para manter cada tarefa separada e facilitar testes.

## 5) Passo 4 - Somar os pontos

```js
function somarPontos(pontos) {
  let total = 0;

  for (let indice = 0; indice < pontos.length; indice += 1) {
    total += pontos[indice];
  }

  return total;
}
```

Passo a passo:

1. `total` começa em `0` e precisa ser `let`, pois muda a cada repetição;
2. `indice` começa em `0`, primeiro índice do array;
3. `indice < pontos.length` impede o acesso a uma posição inexistente;
4. `total += pontos[indice]` acumula cada pontuação;
5. `return total` devolve `340` para quem chamou a função.

## 6) Passo 5 - Calcular a média

```js
function calcularMedia(total, quantidade) {
  return total / quantidade;
}
```

A função recebe valores por parâmetros e devolve o resultado. Não usamos `4` diretamente: a quantidade será obtida com `pontos.length`.

```js
const media = calcularMedia(totalPontos, pontosMissoes.length);
```

## 7) Passo 6 - Contar as missões concluídas

```js
function contarMissoesConcluidas(pontos, pontuacaoMinima) {
  let quantidadeConcluida = 0;

  for (let indice = 0; indice < pontos.length; indice += 1) {
    if (pontos[indice] >= pontuacaoMinima) {
      quantidadeConcluida += 1;
    }
  }

  return quantidadeConcluida;
}
```

O `for` percorre todo o array. A cada volta, o `if` verifica se o valor atual é maior ou igual a `70`. A variável só aumenta quando a condição é verdadeira.

## 8) Passo 7 - Obter a classificação

```js
function obterClassificacao(media, entregaRealizada) {
  if (media >= 80 && entregaRealizada) {
    return "Destaque";
  } else if (media >= 60) {
    return "Em progresso";
  } else {
    return "Precisa revisar";
  }
}
```

A ordem importa:

- primeiro verificamos a faixa mais exigente e a entrega com `&&`;
- depois verificamos a média mínima de `60`;
- `else` trata todos os valores restantes.

Quando um `return` é executado, a função termina e devolve a classificação.

## 9) Passo 8 - Declarar os dados

Depois das funções, declaramos os dados solicitados:

```js
const nomeEstudante = "Nome do estudante";
const pontosMissoes = [80, 90, 70, 100];
const entregaFinalRealizada = true;
const pontuacaoMinima = 70;
```

Todos usam `const` porque não recebem outro valor durante a execução. O conteúdo do array é formado por números, sem aspas.

## 10) Passo 9 - Chamar as funções

```js
const totalPontos = somarPontos(pontosMissoes);
const media = calcularMedia(totalPontos, pontosMissoes.length);
const missoesConcluidas = contarMissoesConcluidas(
  pontosMissoes,
  pontuacaoMinima
);
const classificacao = obterClassificacao(media, entregaFinalRealizada);
```

Cada retorno é armazenado em uma variável. Essas variáveis serão usadas no relatório, evitando repetir cálculos.

## 11) Passo 10 - Converter o booleano da entrega

Uma decisão simples pode usar o operador ternário:

```js
const situacaoEntrega = entregaFinalRealizada ? "Entregue" : "Pendente";
```

Leia assim: se `entregaFinalRealizada` for verdadeira, use **Entregue**; caso contrário, use **Pendente**.

Uma solução equivalente com `if` e `else` também atende ao enunciado.

## 12) Passo 11 - Apresentar o relatório

Primeiro mostramos o título e o estudante:

```js
console.log("PAINEL DE MISSÕES DE PROGRAMAÇÃO");
console.log(`Estudante: ${nomeEstudante}`);
```

Depois usamos uma repetição para mostrar todas as missões:

```js
for (let indice = 0; indice < pontosMissoes.length; indice += 1) {
  console.log(`Missão ${indice + 1}: ${pontosMissoes[indice]} pontos`);
}
```

Somamos `1` ao índice apenas na mensagem porque o array começa em `0`, mas a numeração exibida começa em `1`.

Por fim, mostramos os resultados calculados:

```js
console.log(`Total de pontos: ${totalPontos}`);
console.log(`Média: ${media}`);
console.log(
  `Missões concluídas: ${missoesConcluidas} de ${pontosMissoes.length}`
);
console.log(`Entrega final: ${situacaoEntrega}`);
console.log(`Classificação: ${classificacao}`);
```

## 13) Resultado esperado

```text
PAINEL DE MISSÕES DE PROGRAMAÇÃO
Estudante: Nome do estudante
Missão 1: 80 pontos
Missão 2: 90 pontos
Missão 3: 70 pontos
Missão 4: 100 pontos
Total de pontos: 340
Média: 85
Missões concluídas: 4 de 4
Entrega final: Entregue
Classificação: Destaque
```

## 14) Gabarito completo

O gabarito executável está disponível em:

- [`códigos/aula26/index.html`](../../códigos/aula26/index.html);
- [`códigos/aula26/script.js`](../../códigos/aula26/script.js).

## 15) Testar outros caminhos

Altere temporariamente os dados para conferir se a solução responde às entradas, em vez de apenas reproduzir resultados fixos:

| Pontos | Entrega | Média | Classificação |
|---|---|---:|---|
| `[80, 90, 70, 100]` | `true` | 85 | Destaque |
| `[60, 70, 50, 60]` | `true` | 60 | Em progresso |
| `[30, 50, 40, 50]` | `false` | 42,5 | Precisa revisar |

No JavaScript, a última média aparece como `42.5`, pois números decimais usam ponto no código.

## 16) Erros comuns observados na correção

- escrever os resultados diretamente em `console.log`, sem calculá-los;
- colocar os números do array entre aspas;
- usar `const` para um acumulador que precisa mudar;
- iniciar o índice em `1` e ignorar o primeiro item;
- usar `indice <= pontos.length` e acessar uma posição inexistente;
- usar o número `4` no limite em vez de `pontos.length`;
- esquecer `return` nas funções;
- mostrar `true` ou `false` em vez de **Entregue** ou **Pendente**;
- testar `media >= 60` antes de `media >= 80`;
- usar `||` quando a classificação **Destaque** exige média e entrega;
- chamar a função antes de preparar os argumentos necessários;
- usar `console.log` sem rótulos que identifiquem os resultados.

## 17) Roteiro de validação

1. Abra `códigos/aula26/index.html` no navegador.
2. Abra o Console com `F12`.
3. Confirme que não há mensagens vermelhas de erro.
4. Compare todas as linhas com o resultado esperado.
5. Altere o nome e confirme a mudança no relatório.
6. Teste as três faixas de classificação.
7. Acrescente uma quinta pontuação e confirme que os laços a incluem automaticamente.
8. Restaure os valores iniciais.

## Checklist de Compreensão

- [ ] Consigo conectar um arquivo JavaScript externo com `defer`.
- [ ] Consigo escolher entre `const` e `let`.
- [ ] Consigo percorrer um array usando `length`.
- [ ] Consigo acumular valores dentro de um laço.
- [ ] Consigo combinar repetição e condicional para contar itens.
- [ ] Consigo criar funções com parâmetros e retorno.
- [ ] Consigo ordenar condições da mais específica para a mais ampla.
- [ ] Consigo usar template literals para produzir mensagens.
- [ ] Consigo testar o programa com dados diferentes.

## Resumo Final

Nesta correção, dividimos o Painel de Missões em funções pequenas, calculamos total e média, contamos missões com um laço, classificamos o desempenho com condicionais e apresentamos um relatório completo no Console. A solução usa os dados como fonte dos resultados e continua funcionando quando o array é alterado.

## Questões de Fixação

1. Por que o acumulador da soma precisa ser declarado com `let`?
2. Por que usamos `indice < pontos.length`?
3. Qual é a diferença entre um parâmetro e um argumento?
4. O que acontece quando uma função executa `return`?
5. Por que a condição de **Destaque** deve aparecer antes da condição de **Em progresso**?
6. Qual é a função do operador `&&` na classificação?
7. Por que os resultados não devem ser escritos diretamente nas mensagens?
