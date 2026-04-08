# Encontro 4 - Estrutura Base do Documento HTML5

**Unidade:** Unidade 1  
**Entregável previsto:** Primeiro `index.html`

## Visão Geral
Neste encontro, você cria o primeiro documento HTML completo da disciplina, saindo de trechos isolados para uma página com estrutura correta e legível.  
O objetivo é consolidar a base que será usada em todos os próximos encontros: **`<!doctype html>`**, **`html`**, **`head`** e **`body`**.

Se no Encontro 1 você compreendeu o papel do HTML, no Encontro 2 entendeu o fluxo da Web e no Encontro 3 preparou o ambiente, agora você transforma essa base em um arquivo real de projeto.

## Conceitos Essenciais
- Estrutura mínima obrigatória de um documento HTML5.
- Função prática de `head`, `meta`, `title` e `body`.
- Boas práticas iniciais de organização e legibilidade de código.
- Validação no navegador e no DevTools.

## 1) Estrutura mínima de um documento HTML5
A estrutura base é o ponto de partida para qualquer página web profissional. Ela ajuda o navegador a interpretar corretamente o conteúdo e evita comportamentos inesperados.

### Exemplo mínimo funcional
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha primeira página</title>
  </head>
  <body>
    <h1>Olá, Web!</h1>
  </body>
</html>
```

### O papel de cada parte
- `<!doctype html>`: informa ao navegador que o documento usa HTML5.
- `<html lang="pt-BR">`: elemento raiz e definição do idioma principal.
- `<head>`: metadados e configurações do documento.
- `<body>`: conteúdo visível na página.

## 2) Entendendo melhor o `head`
No início do curso, o `head` costuma parecer secundário, mas ele impacta diretamente compatibilidade, legibilidade e preparo para responsividade.

### Metadados iniciais recomendados
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Encontro 4 - Estrutura Base</title>
</head>
```

### Por que esses metadados importam?
- `charset="UTF-8"`: evita problemas com acentuação e caracteres especiais.
- `viewport`: controla como a página é dimensionada em celulares e tablets.
- `title`: identifica a página na aba do navegador e no histórico.

### Entendendo melhor o `meta viewport`
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Essa linha diz ao navegador móvel como a página deve ser exibida no primeiro carregamento.

- `name="viewport"`: indica que o navegador deve aplicar configurações da "área visível" da página.
- `width=device-width`: define que a largura da página deve acompanhar a largura real da tela do dispositivo.
- `initial-scale=1.0`: define o nível de zoom inicial como 100% (sem aproximação ou afastamento automático).

### O que pode acontecer sem essa linha?
- Em muitos celulares, o navegador tenta renderizar a página como se fosse uma tela larga de desktop.
- O texto pode ficar pequeno demais.
- O usuário precisa dar zoom manual para ler o conteúdo.

### Exemplo de efeito prático
Com `viewport` configurado corretamente:
- títulos e parágrafos ficam com tamanho mais legível no mobile;
- o layout responde de forma mais previsível quando você começar a usar CSS responsivo.

## 3) O que entra no `body` nesta etapa
Neste encontro, o foco é estrutura e organização, não layout avançado.  
O `body` deve conter conteúdo simples, com hierarquia clara para leitura e manutenção.

### Exemplo de conteúdo inicial
```html
<body>
  <main>
    <h1>Disciplina de Padrões Web</h1>
    <p>Este é meu primeiro documento HTML completo.</p>

    <h2>Próximos passos</h2>
    <ul>
      <li>Estruturar conteúdo textual</li>
      <li>Aplicar semântica HTML5</li>
      <li>Conectar estilos com CSS</li>
    </ul>
  </main>
</body>
```

## 4) Exemplo principal do encontro (`index.html`)
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Primeiro index.html</title>
  </head>
  <body>
    <main>
      <h1>Meu Primeiro Projeto Web</h1>
      <p>Arquivo inicial da disciplina de Padrões Web.</p>

      <section>
        <h2>Objetivos deste arquivo</h2>
        <ol>
          <li>Praticar a estrutura base do HTML5.</li>
          <li>Garantir legibilidade com indentação adequada.</li>
          <li>Validar o resultado no navegador e no DevTools.</li>
        </ol>
      </section>
    </main>
  </body>
</html>
```

## 5) Roteiro de prática guiada
1. Crie uma pasta de projeto e adicione o arquivo `index.html`.
2. Reproduza o exemplo principal sem copiar e colar diretamente.
3. Troque o título da aba (`<title>`) e os textos do `body` por informações autorais.
4. Abra no navegador e confirme se a estrutura aparece corretamente.
5. Abra o DevTools no painel **Elements** e verifique se a árvore HTML está organizada.

## 6) Validação rápida antes de considerar concluído
- O arquivo começa com `<!doctype html>`.
- O idioma da página está definido em `lang="pt-BR"`.
- O `head` contém `meta charset`, `meta viewport` e `title`.
- O conteúdo principal está dentro do `body`.
- A indentação está consistente e facilita leitura.

## 7) Erros comuns de iniciantes
- esquecer `<!doctype html>` e iniciar direto pelo `<html>`;
- escrever conteúdo visível dentro do `head`;
- omitir `<meta charset="UTF-8">` e ter problemas com acentos;
- usar títulos sem hierarquia (`h1`, `h2`, `h3`);
- editar sem testar no navegador a cada mudança pequena.

## Materiais para Aprofundamento
- [MDN - Estruturando documentos com HTML](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [MDN - Elemento `head`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/head)
- [MDN - Elemento `meta`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/meta)
- [W3C - Introdução ao HTML](https://www.w3.org/TR/html52/introduction.html)

## Checklist de Compreensão
- [ ] Consigo montar um documento HTML5 completo do zero.
- [ ] Consigo explicar a função de `doctype`, `html`, `head` e `body`.
- [ ] Consigo justificar o uso de `meta charset`, `meta viewport` e `title`.
- [ ] Consigo validar a estrutura no navegador e no DevTools.
- [ ] Entreguei meu primeiro `index.html` com organização e legibilidade.

## Resumo Final
Neste encontro, você transformou conceitos introdutórios em uma página HTML real, organizada e pronta para evoluir ao longo da disciplina. A base construída aqui sustenta os próximos temas: conteúdo textual, semântica, formulários e integração com CSS.

## Questões de Fixação
1. Para que serve `<!doctype html>` no início do documento?
<!-- Gabarito: Indicar ao navegador que o documento deve ser interpretado no padrão HTML5. -->

2. Qual é a diferença entre o conteúdo do `head` e do `body`?
<!-- Gabarito: O head contém metadados e configurações; o body contém o conteúdo visível da página. -->

3. Por que `meta charset="UTF-8"` é importante em páginas em português?
<!-- Gabarito: Porque evita erros de codificação e garante exibição correta de acentos e caracteres especiais. -->

4. Qual metadado ajuda a página a se adaptar melhor a telas pequenas?
<!-- Gabarito: A meta viewport (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`). -->

5. Cite duas verificações práticas para validar seu primeiro `index.html`.
<!-- Gabarito: Conferir estrutura mínima completa e abrir no navegador/DevTools para inspecionar a árvore HTML. -->
