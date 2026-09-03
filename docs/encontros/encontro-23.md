# Encontro 23 - Condicionais e Laços

## Visão Geral

Neste encontro, evoluímos o **Painel de Estudos JavaScript** do Encontro 22. O programa deixará de apenas calcular valores: ele tomará decisões sobre a situação do estudante e percorrerá uma lista de tópicos para montar um plano de revisão.

## Conceitos Essenciais

- fluxo sequencial e fluxo condicional;
- `if`, `else if` e `else`;
- condições compostas com `&&`, `||` e `!`;
- operador ternário para decisões simples;
- laços `for` e `while`;
- controle de repetição com contador;
- arrays como listas de valores;
- leitura de erros e acompanhamento pelo Console.

## 1) Do cálculo à tomada de decisão

No encontro anterior, uma comparação produziu um valor booleano. Agora esse valor controla quais instruções serão executadas:

```js
if (percentual >= 70) {
  console.log("Meta de progresso atingida.");
}
```

Leia o trecho assim: **se** a condição entre parênteses for verdadeira, execute o bloco entre chaves.

## 2) Passo 1 - Preparar a nova versão

Crie `aula23`, copie os três arquivos do encontro anterior e atualize a etiqueta para **Encontro 23**. Acrescente ao HTML uma área para o diagnóstico e outra para o plano:

```html
<section aria-labelledby="titulo-diagnostico">
  <h2 id="titulo-diagnostico">Diagnóstico</h2>
  <p id="diagnostico">Calculando...</p>
</section>

<section aria-labelledby="titulo-plano">
  <h2 id="titulo-plano">Plano de revisão</h2>
  <ul id="lista-revisao"></ul>
</section>
```

Os elementos de saída já existem antes da execução do script. A criação dinâmica de elementos será estudada no Encontro 25; por enquanto, concentraremos a lógica no JavaScript.

## 3) Passo 2 - Criar uma decisão com duas possibilidades

```js
let situacao;

if (percentual >= 70) {
  situacao = "Em dia";
} else {
  situacao = "Precisa revisar";
}
```

Use `let` porque `situacao` é declarada primeiro e recebe um valor diferente em cada caminho. Apenas um dos blocos será executado.

## 4) Passo 3 - Trabalhar com várias faixas

O diagnóstico possui três resultados possíveis:

```js
let diagnostico;

if (percentual >= 80 && entregouExercicio) {
  diagnostico = "Ótimo ritmo: avance para o próximo conteúdo.";
} else if (percentual >= 60) {
  diagnostico = "Bom progresso: revise os tópicos pendentes.";
} else {
  diagnostico = "Atenção: reorganize o plano e retome a base.";
}
```

As condições são testadas de cima para baixo. Por isso, a faixa mais exigente aparece primeiro. Assim que uma condição verdadeira é encontrada, os demais blocos são ignorados.

## 5) Passo 4 - Combinar condições

```js
const podeAvancar = percentual >= 80 && entregouExercicio;
const precisaDeApoio = percentual < 60 || !entregouExercicio;
```

| Operador | Leitura | Resultado verdadeiro quando... |
|---|---|---|
| `&&` | e | todas as condições são verdadeiras |
| `\|\|` | ou | pelo menos uma condição é verdadeira |
| `!` | não | o valor booleano é invertido |

Use parênteses quando uma expressão combinar muitos operadores. A intenção do código deve ser visível para quem o lê.

## 6) Passo 5 - Usar o operador ternário

Uma decisão curta pode ser escrita em uma expressão:

```js
const textoEntrega = entregouExercicio ? "Entregue" : "Pendente";
```

O formato é `condição ? valorSeVerdadeiro : valorSeFalso`. Para várias faixas ou blocos com mais de uma instrução, prefira `if`, `else if` e `else`.

## 7) Passo 6 - Representar tópicos com um array

Um array reúne valores em uma lista ordenada:

```js
const topicos = ["Variáveis", "Operadores", "Condicionais", "Laços"];

console.log(topicos[0]);     // Variáveis
console.log(topicos.length); // 4
```

Os índices começam em `0`. Portanto, o último índice é sempre `length - 1`.

## 8) Passo 7 - Percorrer a lista com `for`

```js
let textoRevisao = "";

for (let indice = 0; indice < topicos.length; indice += 1) {
  textoRevisao += `<li>${indice + 1}. ${topicos[indice]}</li>`;
}

document.querySelector("#lista-revisao").innerHTML = textoRevisao;
```

O `for` possui três partes:

1. `let indice = 0`: cria o contador;
2. `indice < topicos.length`: mantém a repetição dentro da lista;
3. `indice += 1`: avança o contador após cada volta.

Neste exemplo controlado, as strings são definidas no próprio código. Conteúdo recebido de usuários não deve ser inserido diretamente com `innerHTML`.

## 9) Passo 8 - Compreender o `while`

O `while` repete enquanto a condição for verdadeira:

```js
let semana = 1;

while (semana <= 3) {
  console.log(`Semana ${semana}: revisar JavaScript.`);
  semana += 1;
}
```

O contador precisa mudar dentro do laço. Sem `semana += 1`, a condição nunca se tornaria falsa e teríamos um laço infinito.

## 10) Passo 9 - Atualizar o painel

```js
document.querySelector("#situacao").textContent = situacao;
document.querySelector("#diagnostico").textContent = diagnostico;
document.querySelector("#entrega").textContent = textoEntrega;
```

O foco ainda está nas decisões e repetições. Os seletores são usados apenas para tornar o resultado visível na página.

## 11) Rastreamento manual do laço

Para `topicos.length === 4`, o `for` percorre:

| Volta | `indice` | Condição | Valor acessado |
|---:|---:|---|---|
| 1 | 0 | `0 < 4` → `true` | `topicos[0]` |
| 2 | 1 | `1 < 4` → `true` | `topicos[1]` |
| 3 | 2 | `2 < 4` → `true` | `topicos[2]` |
| 4 | 3 | `3 < 4` → `true` | `topicos[3]` |
| fim | 4 | `4 < 4` → `false` | nenhum |

## 12) Prática guiada - Testar caminhos diferentes

Altere um valor por vez, salve e recarregue a página:

1. `aulasConcluidas = 9` e `entregouExercicio = true`;
2. `aulasConcluidas = 7` e `entregouExercicio = false`;
3. `aulasConcluidas = 4` e `entregouExercicio = true`;
4. registre no Console qual ramo foi executado;
5. acrescente o tópico `"Funções"` ao array;
6. confirme que o `for` inclui o novo item sem outra alteração.

## 13) Exercícios JS II

### Exercício 1 - Classificação de nota

Crie uma nota de `0` a `10`. Mostre “Aprovado” para nota maior ou igual a `6`, “Recuperação” para nota maior ou igual a `4` e “Reprovado” nos demais casos.

### Exercício 2 - Acesso ao sistema

Crie os booleanos `usuarioAtivo` e `senhaCorreta`. Use operadores lógicos e uma condicional para informar se o acesso foi permitido.

### Exercício 3 - Números pares

Use `for` e o operador `%` para mostrar no Console os números pares de `2` a `20`.

### Exercício 4 - Tabuada

Crie uma variável `numero` e use um laço para exibir sua tabuada de `1` a `10` com template literals.

### Exercício 5 - Desafio integrado

Crie uma página de acompanhamento de tarefas que:

- possua um array com pelo menos cinco tarefas;
- use um laço para apresentar todas elas;
- calcule um percentual de conclusão;
- use `if`, `else if` e `else` para mostrar um diagnóstico;
- apresente os resultados no Console e no HTML.

## 14) Erros comuns de iniciantes

- usar `=` no lugar de `===` em uma condição;
- testar primeiro uma faixa ampla e impedir que uma faixa específica seja alcançada;
- esquecer chaves ou fechar o bloco no lugar errado;
- escrever `indice <= topicos.length` e acessar uma posição inexistente;
- esquecer de atualizar o contador de um `while`;
- usar um número fixo no laço em vez de `array.length`;
- criar condicionais muito longas sem nomes que expliquem suas partes.

## Materiais para Aprofundamento

- [MDN - Controle de fluxo e tratamento de erros](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN - Laços e iterações](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN - Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections)

## Checklist de Compreensão

- [ ] Consigo explicar como uma condição altera o fluxo do programa.
- [ ] Consigo usar `if`, `else if` e `else` na ordem adequada.
- [ ] Consigo combinar condições com `&&`, `||` e `!`.
- [ ] Sei quando uma expressão ternária é apropriada.
- [ ] Consigo criar e acessar valores de um array.
- [ ] Consigo percorrer uma lista com `for`.
- [ ] Consigo construir um `while` que termina.
- [ ] Consigo acompanhar valores pelo Console para localizar erros.

## Resumo Final

Neste encontro, o painel passou a decidir entre diferentes resultados e a repetir instruções para cada item de uma lista. Condicionais e laços permitem construir fluxos úteis, mas blocos extensos podem gerar repetição. No próximo encontro, organizaremos essas responsabilidades em funções reutilizáveis.

## Questões de Fixação

1. Qual é a diferença entre `if`, `else if` e `else`?
2. Por que a ordem das condições importa?
3. Quando usar `&&` e quando usar `||`?
4. Em que situação o operador ternário é adequado?
5. Por que o primeiro índice de um array é `0`?
6. Quais são as três partes de um `for`?
7. O que pode causar um laço infinito?
8. Por que usar `array.length` como limite da repetição?
