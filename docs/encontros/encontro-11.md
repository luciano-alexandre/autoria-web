# Encontro 11 - CSS: sintaxe, seletores e cascata

**Unidade:** Unidade 2  
**Carga prevista:** 1,5h  
**Entregavel previsto:** Arquivo CSS conectado

## Explicacao geral do encontro
Este encontro trabalha **CSS: sintaxe, seletores e cascata** na camada visual, conectando conceitos de CSS com layout real.

![Imagem de apoio 1](https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg)

![Imagem de apoio 2](https://upload.wikimedia.org/wikipedia/commons/7/70/CSS3_badge.svg)

## Conceitos essenciais
- Sintaxe de regras CSS e tipos de seletores.
- Cascata, ordem e prioridade de aplicacao.
- Separacao entre estrutura HTML e estilo CSS.

## Explicacao detalhada dos conceitos essenciais
### 1) Sintaxe de regras CSS e tipos de seletores.
Seletores corretos garantem aplicacao de estilo no alvo certo.

#### Exemplo aplicado
```css
.card { padding: 1rem; border: 1px solid #ccc; }
.card p { margin: 0; }
```

### 2) Cascata, ordem e prioridade de aplicacao.
Cascata e prioridade explicam conflitos de estilo; entender isso evita ajustes aleatorios.

#### Exemplo aplicado
```css
.card { padding: 1rem; border: 1px solid #ccc; }
.card p { margin: 0; }
```

### 3) Separacao entre estrutura HTML e estilo CSS.
Separar HTML e CSS melhora manutencao e facilita evolucao visual.

#### Exemplo aplicado
```text
Aplique o conceito no seu projeto e valide no navegador.
```

## Exemplo principal da aula
```css
.container {
  display: grid;
  gap: 1rem;
}
```

## Exemplos adicionais
```css
.menu { display: flex; gap: 1rem; }
```

```css
@media (min-width: 900px) { .cards { grid-template-columns: repeat(3, 1fr); } }
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
- [MDN - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [web.dev - Learn CSS](https://web.dev/learn/css)

## Checklist de compreensao
- [ ] Entendi os tres conceitos essenciais com minhas palavras.
- [ ] Executei os exemplos e fiz variacao propria.
- [ ] Revisei erros comuns e corrigi pontos de duvida.
- [ ] Entreguei a atividade prevista no cronograma.

## Resumo final
Neste encontro, voce estudou **CSS: sintaxe, seletores e cascata** com foco em compreensao profunda dos conceitos, pratica incremental e revisao tecnica antes da entrega.

## Questoes de fixacao (com gabarito)
1. Qual problema tecnico "CSS: sintaxe, seletores e cascata" ajuda a resolver?
Gabarito: Organizar a implementacao para ficar mais clara, funcional e manutenivel.

2. Como validar se voce realmente entendeu o conceito?
Gabarito: Reproduzindo sem consulta, explicando com suas palavras e criando variacao propria.

3. Cite um erro comum de iniciante nesse tema.
Gabarito: Copiar codigo sem testar em partes pequenas no navegador.

4. Qual verificacao minima deve ser feita antes da entrega?
Gabarito: Funcionamento, legibilidade do codigo e ausencia de erros evidentes.

5. Como aprofundar apos a aula?
Gabarito: Estudar documentacao oficial, praticar exercicios extras e revisar feedbacks.
