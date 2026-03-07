# Encontro 21 - JavaScript no front-end, sintaxe básica e execução

**Unidade:** Unidade 3  
**Carga prevista:** 1,5h  
**Entregavel previsto:** Script inicial

## Explicacao geral do encontro
Este encontro trabalha **JavaScript no front-end, sintaxe básica e execução** com JavaScript/DOM para transformar conceito em comportamento visivel.

![Imagem de apoio 1](https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg)

![Imagem de apoio 2](https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png)

## Conceitos essenciais
- Execucao de JavaScript no navegador.
- Uso de variaveis e saida no console.
- Ligacao inicial entre HTML e JS.

## Explicacao detalhada dos conceitos essenciais
### 1) Execucao de JavaScript no navegador.
JavaScript no navegador permite atualizar comportamento da pagina em tempo real.

#### Exemplo aplicado
```js
const idade = 16;
console.log(idade >= 16 ? "ok" : "pendente");
```

### 2) Uso de variaveis e saida no console.
Console e essencial para verificar valores e diagnosticar erros.

#### Exemplo aplicado
```js
console.log("Teste de depuracao");
console.warn("Verifique o valor desta variavel");
```

### 3) Ligacao inicial entre HTML e JS.
Selecionar elementos e anexar eventos e base da interatividade.

#### Exemplo aplicado
```text
Aplique o conceito no seu projeto e valide no navegador.
```

## Exemplo principal da aula
```js
const btn = document.querySelector("#acao");
btn.addEventListener("click", () => console.log("ok"));
```

## Exemplos adicionais
```js
function soma(a, b) { return a + b; }
console.log(soma(2, 3));
```

```js
document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());
```

## Como estudar este encontro sozinho
1. Leia a explicacao geral e os conceitos com atencao.
2. Rode os exemplos e altere valores/propriedades para testar entendimento.
3. Reproduza sem copiar e compare com seu resultado.
4. Resolva uma variacao do tema no seu contexto.

## Erros comuns de iniciantes
- Avancar sem consolidar a base do encontro.
- Copiar codigo sem compreender cada linha.
- Nao validar comportamento no navegador a cada alteracao.

## Materiais para aprofundamento
- [MDN - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MDN - DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)
- [javascript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

## Checklist de compreensao
- [ ] Entendi os tres conceitos essenciais com minhas palavras.
- [ ] Executei os exemplos e fiz variacao propria.
- [ ] Revisei erros comuns e corrigi pontos de duvida.
- [ ] Entreguei a atividade prevista no cronograma.

## Resumo final
Neste encontro, voce estudou **JavaScript no front-end, sintaxe básica e execução** com foco em compreensao profunda dos conceitos, pratica incremental e revisao tecnica antes da entrega.

## Questoes de fixacao (com gabarito)
1. Qual problema tecnico "JavaScript no front-end, sintaxe básica e execução" ajuda a resolver?
Gabarito: Organizar a implementacao para ficar mais clara, funcional e manutenivel.

2. Como validar se voce realmente entendeu o conceito?
Gabarito: Reproduzindo sem consulta, explicando com suas palavras e criando variacao propria.

3. Cite um erro comum de iniciante nesse tema.
Gabarito: Copiar codigo sem testar em partes pequenas no navegador.

4. Qual verificacao minima deve ser feita antes da entrega?
Gabarito: Funcionamento, legibilidade do codigo e ausencia de erros evidentes.

5. Como aprofundar apos a aula?
Gabarito: Estudar documentacao oficial, praticar exercicios extras e revisar feedbacks.
