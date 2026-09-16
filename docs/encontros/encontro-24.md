# Encontro 24 - Funções e Organização de Código

**Unidade:** Unidade 3  
**Carga prevista:** 1,5h  
**Entregável previsto:** biblioteca simples de funções + painel refatorado

## Visão Geral

Neste encontro, reorganizamos o **Painel de Estudos JavaScript**. Os cálculos, diagnósticos e textos produzidos no Encontro 23 serão separados em funções pequenas, nomeadas e reutilizáveis. O resultado será uma biblioteca simples de funções e um script principal mais fácil de ler e testar.

## Conceitos Essenciais

- declaração e chamada de funções;
- parâmetros e argumentos;
- retorno com `return`;
- escopo local e global;
- funções que calculam e funções que exibem;
- responsabilidade única e nomes descritivos;
- reutilização e redução de código duplicado;
- teste de funções pelo Console.

## 1) Por que criar funções?

Uma função agrupa instruções que realizam uma tarefa. Compare:

```js
const percentualAna = (7 / 10) * 100;
const percentualCaio = (4 / 8) * 100;
```

Com uma função, a regra é escrita uma vez:

```js
function calcularPercentual(parte, total) {
  return (parte / total) * 100;
}

const percentualAna = calcularPercentual(7, 10);
const percentualCaio = calcularPercentual(4, 8);
```

## 2) Anatomia de uma função

```js
function calcularPercentual(parte, total) {
  const resultado = (parte / total) * 100;
  return resultado;
}
```

- `function` inicia a declaração;
- `calcularPercentual` descreve a ação;
- `parte` e `total` são parâmetros;
- o bloco contém as instruções;
- `return` devolve o resultado para quem chamou.

Na chamada `calcularPercentual(7, 10)`, os valores `7` e `10` são argumentos.

## 3) Passo 1 - Proteger o cálculo

Uma função também pode validar uma situação inadequada:

```js
function calcularPercentual(parte, total) {
  if (total <= 0) {
    return 0;
  }

  return (parte / total) * 100;
}
```

Quando `return` é executado, a função termina. Essa saída antecipada evita uma divisão inválida e mantém o fluxo principal simples.

## 4) Passo 2 - Transformar a decisão em função

```js
function obterDiagnostico(percentual, entregouAtividade) {
  if (percentual >= 80 && entregouAtividade) {
    return "Ótimo ritmo: avance para o próximo conteúdo.";
  }

  if (percentual >= 60) {
    return "Bom progresso: revise os tópicos pendentes.";
  }

  return "Atenção: reorganize o plano e retome a base.";
}
```

Cada caminho retorna diretamente um texto. Como a função termina no `return`, não é necessário envolver os testes seguintes em `else`.

## 5) Passo 3 - Separar dados, processamento e saída

O script será organizado em três partes:

```text
1. Funções       → regras reutilizáveis
2. Dados         → valores do estudante
3. Execução      → chamadas e apresentação dos resultados
```

Exemplo de processamento:

```js
const estudante = "Ana";
const totalAulas = 10;
const aulasConcluidas = 7;
const entregouExercicio = true;

const percentual = calcularPercentual(aulasConcluidas, totalAulas);
const diagnostico = obterDiagnostico(percentual, entregouExercicio);
```

Os dados não precisam conhecer a fórmula, e a fórmula não precisa conhecer o HTML.

## 6) Passo 4 - Criar uma função para a lista

```js
function criarListaEmTexto(itens) {
  let texto = "";

  for (let indice = 0; indice < itens.length; indice += 1) {
    texto += `<li>${indice + 1}. ${itens[indice]}</li>`;
  }

  return texto;
}
```

A função recebe qualquer array de textos e devolve as marcações da lista. Ela não depende da variável `topicos` criada fora dela.

## 7) Passo 5 - Entender escopo

```js
const disciplina = "Autoria Web"; // escopo global do script

function apresentarAula() {
  const encontro = 24; // escopo local da função
  console.log(disciplina, encontro);
}

apresentarAula();
// console.log(encontro); // ReferenceError
```

Uma variável local existe apenas dentro do bloco em que foi declarada. Prefira parâmetros e retornos a depender de muitas variáveis globais.

## 8) Passo 6 - Diferenciar retorno e exibição

`return` e `console.log` não têm a mesma finalidade:

```js
function somar(a, b) {
  return a + b;
}

const total = somar(2, 3);
console.log(total);
```

`return` entrega o valor para o restante do programa. `console.log` apenas o apresenta no Console e é especialmente útil durante testes.

## 9) Passo 7 - Criar uma função de saída

```js
function exibirTexto(seletor, texto) {
  document.querySelector(seletor).textContent = texto;
}

exibirTexto("#nome-estudante", estudante);
exibirTexto("#progresso", `${percentual}%`);
exibirTexto("#diagnostico", diagnostico);
```

A função elimina a repetição da mesma operação. A seleção e a alteração do DOM serão aprofundadas no próximo encontro.

## 10) Passo 8 - Formatar valores em função própria

```js
function formatarPercentual(valor) {
  return `${valor.toFixed(0)}%`;
}
```

Uma função que calcula não deve decidir onde o resultado será exibido. Assim, o mesmo percentual pode aparecer no HTML, no Console ou ser usado em outro cálculo.

## 11) Passo 9 - Compor o script principal

```js
const percentual = calcularPercentual(aulasConcluidas, totalAulas);
const diagnostico = obterDiagnostico(percentual, entregouExercicio);
const listaEmTexto = criarListaEmTexto(topicos);

exibirTexto("#nome-estudante", nomeEstudante);
exibirTexto("#progresso", formatarPercentual(percentual));
exibirTexto("#diagnostico", diagnostico);
document.querySelector("#lista-revisao").innerHTML = listaEmTexto;
```

Esse trecho funciona como um roteiro: obtém resultados e os encaminha às saídas. Os detalhes permanecem nas funções.

## 12) Passo 10 - Testar funções isoladamente

Antes de observar a página, teste casos diferentes:

```js
console.log("Teste 1:", calcularPercentual(5, 10)); // 50
console.log("Teste 2:", calcularPercentual(0, 0));  // 0
console.log("Teste 3:", obterDiagnostico(90, true));
console.log("Teste 4:", obterDiagnostico(40, false));
```

Um bom conjunto de testes inclui casos comuns, limites e valores que ativam caminhos diferentes.

## 13) Biblioteca simples de funções

Ao final, a biblioteca do encontro contém:

| Função | Responsabilidade | Retorno |
|---|---|---|
| `calcularPercentual` | calcular a proporção entre parte e total | `number` |
| `formatarPercentual` | preparar o valor para leitura | `string` |
| `obterDiagnostico` | classificar o progresso | `string` |
| `criarListaEmTexto` | montar itens de uma lista | `string` |
| `exibirTexto` | apresentar um texto no elemento selecionado | sem retorno explícito |

## 14) Prática guiada - Ampliar a biblioteca

1. crie `calcularPontos(aulas, pontosPorAula)`;
2. crie `obterSituacaoEntrega(entregou)`;
3. use ambas no painel;
4. crie `calcularAulasRestantes(total, concluidas)`;
5. teste a função com `10, 7` e com `10, 10`;
6. confirme que cada função possui apenas uma responsabilidade.

## 15) Exercícios de funções

### Exercício 1 - Conversão de temperatura

Crie `converterCelsiusParaFahrenheit(celsius)` e teste pelo menos três valores.

### Exercício 2 - Maior número

Crie `obterMaior(numeroA, numeroB)`. A função deve retornar o maior valor ou informar que são iguais.

### Exercício 3 - Tabuada reutilizável

Crie `criarTabuada(numero)` que use um laço e retorne um texto com as dez multiplicações.

### Exercício 4 - Média e situação

Crie funções separadas para calcular a média de três notas e classificar o resultado em “Aprovado”, “Recuperação” ou “Reprovado”.

### Exercício 5 - Desafio integrado

Refatore o desafio do Encontro 23. A solução deve possuir:

- ao menos quatro funções com nomes descritivos;
- parâmetros em vez de valores fixos nas regras;
- retorno em todas as funções de cálculo;
- separação entre processamento e exibição;
- testes no Console com ao menos três cenários.

## 16) Erros comuns de iniciantes

- declarar a função, mas nunca chamá-la;
- esquecer os parênteses na chamada;
- confundir parâmetros com argumentos;
- usar `console.log` quando o programa precisa de `return`;
- escrever instruções depois de um `return` no mesmo caminho;
- tentar acessar fora da função uma variável local;
- depender de variáveis globais quando parâmetros seriam mais claros;
- criar uma única função extensa com muitas responsabilidades;
- repetir o mesmo trecho em vez de extrair uma função.

## Materiais para Aprofundamento

- [MDN - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [MDN - Escopo de função](https://developer.mozilla.org/pt-BR/docs/Glossary/Function_scope)
- [MDN - `return`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return)

## Checklist de Compreensão

- [ ] Consigo declarar e chamar uma função.
- [ ] Consigo diferenciar parâmetro e argumento.
- [ ] Consigo devolver um resultado com `return`.
- [ ] Entendo a diferença entre retornar e exibir um valor.
- [ ] Consigo reconhecer o escopo de uma variável.
- [ ] Consigo transformar código repetido em função.
- [ ] Consigo separar cálculo, decisão e apresentação.
- [ ] Consigo testar uma função com diferentes entradas.

## Resumo Final

Neste encontro, o painel foi dividido em funções pequenas e reutilizáveis. Parâmetros recebem as entradas, `return` entrega os resultados e o script principal coordena as chamadas. Essa organização prepara o código para o Encontro 25, quando a seleção, a criação e a alteração de elementos do DOM serão estudadas em detalhes.

## Questões de Fixação

1. Que problema uma função ajuda a resolver?
2. Qual é a diferença entre parâmetro e argumento?
3. O que acontece quando `return` é executado?
4. Por que `console.log` não substitui `return`?
5. O que é escopo local?
6. Por que uma função deve ter uma responsabilidade clara?
7. Qual é a vantagem de separar cálculo e apresentação?
8. Que tipos de entrada devem aparecer nos testes de uma função?
