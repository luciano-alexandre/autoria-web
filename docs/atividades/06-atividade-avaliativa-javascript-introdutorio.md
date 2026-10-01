# Atividade Avaliativa

**Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte**  
**Campus Currais Novos**

| Turma | Disciplina | Docente | Data |
|---|---|---|---|
| 1º ano — Informática | Autoria Web | Luciano Alexandre de Farias Silva | ______________ |

**Discente:** ________________________________________________

## Orientações

- A atividade avaliativa deverá ser realizada individualmente.
- Poderá ser consultado apenas o material utilizado pelo docente durante as aulas.
- Não será permitido copiar código de colegas nem utilizar ferramentas de geração automática de código.
- O código-fonte deverá ser enviado pelo Google Sala de Aula até o horário de fim da aula.
- Antes do envio, execute o programa e verifique se o Console não apresenta erros.

## Problema

Desenvolva, em JavaScript, um **Painel de Missões de Programação**. O programa acompanhará os pontos de um estudante em quatro missões, calculará seu desempenho e mostrará um relatório no Console.

A avaliação será exclusivamente sobre JavaScript e utilizará os conteúdos dos Encontros 22, 23 e 24:

- variáveis, tipos de dados e operadores;
- condicionais;
- arrays e estruturas de repetição;
- funções, parâmetros e retorno;
- exibição de resultados no Console.

Não utilize eventos, formulários, manipulação do HTML, objetos, métodos de array ou recursos que ainda não tenham sido estudados.

## Organização e entrega

1. Crie uma pasta com seu nome e sobrenome no formato `nome-sobrenome`.
2. Dentro dela, crie `index.html` e `script.js`.
3. Use o HTML apenas para carregar `script.js` com o atributo `defer`.
4. Desenvolva toda a atividade em `script.js`.
5. Compacte a pasta em `.zip` e envie-a pelo Google Sala de Aula.

```text
nome-sobrenome/
├── index.html
└── script.js
```

O HTML não será avaliado visualmente e não precisa de CSS nem de conteúdo no `body`.

## 1. Dados obrigatórios

No início de `script.js`, declare variáveis para estes dados:

| Dado | Valor inicial | Tipo esperado |
|---|---|---|
| nome do estudante | seu nome | `string` |
| pontos das missões | `80`, `90`, `70` e `100` | array de `number` |
| entrega final realizada | `true` | `boolean` |
| pontuação mínima | `70` | `number` |

## 2. Total e média

Crie uma função que receba o array, percorra-o com `for` ou `while`, some os pontos e retorne o total.

Crie outra função que receba o total e a quantidade de missões, calcule a média e retorne o resultado.

Com os valores iniciais, o programa deverá obter:

```text
Total de pontos: 340
Média: 85
```

## 3. Missões concluídas

Use uma estrutura de repetição para contar quantas missões possuem pontuação maior ou igual à pontuação mínima.

Use o tamanho do array como limite da repetição. Não escreva diretamente o número `4` como limite.

Com os valores iniciais, mostre:

```text
Missões concluídas: 4 de 4
```

## 4. Classificação

Crie uma terceira função que receba a média e a situação da entrega final. Ela deverá retornar:

1. **Destaque**, se a média for maior ou igual a `80` **e** a entrega tiver sido realizada;
2. **Em progresso**, se a condição anterior for falsa e a média for maior ou igual a `60`;
3. **Precisa revisar**, nos demais casos.

Use também uma decisão simples para transformar o valor da entrega em **Entregue** ou **Pendente**.

## 5. Relatório das missões

Use uma estrutura de repetição para mostrar cada missão no Console:

```text
Missão 1: 80 pontos
Missão 2: 90 pontos
Missão 3: 70 pontos
Missão 4: 100 pontos
```

Obtenha o número da missão a partir do contador do laço.

## 6. Resultado no Console

Com os valores iniciais, o Console deverá apresentar informações equivalentes a estas:

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

Use template literals em pelo menos parte das mensagens. Todos os `console.log` deverão possuir rótulos claros.

## 7. Organização de `script.js`

Organize o arquivo nesta ordem:

1. funções;
2. dados iniciais;
3. chamadas das funções e armazenamento dos resultados;
4. apresentação do relatório no Console.

Devem existir, no mínimo, três funções separadas para:

1. somar os pontos;
2. calcular a média;
3. obter a classificação.

As funções deverão possuir nomes claros, receber os dados por parâmetros e usar `return` para fornecer os resultados.