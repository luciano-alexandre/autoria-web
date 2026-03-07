# Encontro 27 - Formulários com validação em JavaScript

**Unidade:** Unidade 3  
**Carga prevista:** 1,5h  
**Entregavel previsto:** Formulário validado

## Explicacao geral do encontro
Este encontro trabalha **Formulários com validação em JavaScript** com JavaScript/DOM para transformar conceito em comportamento visivel.

![Imagem de apoio 1](https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg)

![Imagem de apoio 2](https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png)

## Conceitos essenciais
- Captura e validacao de dados de formulario.
- Feedback de erro orientado ao usuario.
- Diferenca entre validar no cliente e no servidor.

## Explicacao detalhada dos conceitos essenciais
### 1) Captura e validacao de dados de formulario.
Captura e validacao no cliente orientam o usuario antes do envio.

#### Exemplo aplicado
```html
<form>
  <label for="email">E-mail</label>
  <input id="email" type="email" required />
</form>
```

### 2) Feedback de erro orientado ao usuario.
Feedback deve ser imediato e objetivo para facilitar correcao.

#### Exemplo aplicado
```html
<form>
  <label for="email">E-mail</label>
  <input id="email" type="email" required />
</form>
```

### 3) Diferenca entre validar no cliente e no servidor.
Validacao no cliente melhora UX, no servidor garante seguranca.

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
Neste encontro, voce estudou **Formulários com validação em JavaScript** com foco em compreensao profunda dos conceitos, pratica incremental e revisao tecnica antes da entrega.

## Questoes de fixacao (com gabarito)
1. Qual problema tecnico "Formulários com validação em JavaScript" ajuda a resolver?
Gabarito: Organizar a implementacao para ficar mais clara, funcional e manutenivel.

2. Como validar se voce realmente entendeu o conceito?
Gabarito: Reproduzindo sem consulta, explicando com suas palavras e criando variacao propria.

3. Cite um erro comum de iniciante nesse tema.
Gabarito: Copiar codigo sem testar em partes pequenas no navegador.

4. Qual verificacao minima deve ser feita antes da entrega?
Gabarito: Funcionamento, legibilidade do codigo e ausencia de erros evidentes.

5. Como aprofundar apos a aula?
Gabarito: Estudar documentacao oficial, praticar exercicios extras e revisar feedbacks.
