# Encontro 25 - DOM: árvore, seleção e alteração de conteúdo

**Unidade:** Unidade 3  
**Carga prevista:** 1,5h  
**Entregavel previsto:** Página dinâmica simples

## Explicacao geral do encontro
Este encontro trabalha **DOM: árvore, seleção e alteração de conteúdo** com JavaScript/DOM para transformar conceito em comportamento visivel.

![Imagem de apoio 1](https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg)

![Imagem de apoio 2](https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png)

## Conceitos essenciais
- DOM como arvore de elementos.
- Selecao e alteracao de conteudo dinamico.
- Atualizacao de atributos e classes via JS.

## Explicacao detalhada dos conceitos essenciais
### 1) DOM como arvore de elementos.
DOM representa HTML em estrutura navegavel e editavel por JavaScript.

#### Exemplo aplicado
```js
const p = document.querySelector("#msg");
p.textContent = "Atualizado via DOM";
```

### 2) Selecao e alteracao de conteudo dinamico.
QuerySelector encontra elementos e API de DOM altera conteudo/atributos/classes.

#### Exemplo aplicado
```js
const p = document.querySelector("#msg");
p.textContent = "Atualizado via DOM";
```

### 3) Atualizacao de atributos e classes via JS.
Troca de classe/atributo e forma simples de representar estado da interface.

#### Exemplo aplicado
```js
const p = document.querySelector("#msg");
p.textContent = "Atualizado via DOM";
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
Neste encontro, voce estudou **DOM: árvore, seleção e alteração de conteúdo** com foco em compreensao profunda dos conceitos, pratica incremental e revisao tecnica antes da entrega.

## Questoes de fixacao (com gabarito)
1. Qual problema tecnico "DOM: árvore, seleção e alteração de conteúdo" ajuda a resolver?
Gabarito: Organizar a implementacao para ficar mais clara, funcional e manutenivel.

2. Como validar se voce realmente entendeu o conceito?
Gabarito: Reproduzindo sem consulta, explicando com suas palavras e criando variacao propria.

3. Cite um erro comum de iniciante nesse tema.
Gabarito: Copiar codigo sem testar em partes pequenas no navegador.

4. Qual verificacao minima deve ser feita antes da entrega?
Gabarito: Funcionamento, legibilidade do codigo e ausencia de erros evidentes.

5. Como aprofundar apos a aula?
Gabarito: Estudar documentacao oficial, praticar exercicios extras e revisar feedbacks.
