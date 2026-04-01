# Encontro 3 - Ambiente de desenvolvimento (editor, navegador, DevTools)

**Unidade:** Unidade 1  

## Visão Geral
Este encontro apresenta o ambiente de trabalho que você vai usar em toda a disciplina. O foco é entender como **editor de código**, **terminal**, **navegador** e **DevTools** funcionam juntos para criar, testar e corrigir páginas web com autonomia.

Se no Encontro 1 você começou a entender o papel das tecnologias da Web e no Encontro 2 você entendeu como a Web funciona na rede, aqui você aprende **como trabalhar na prática**, com método e organização.

## Conceitos Essenciais
- O que compõe um ambiente de desenvolvimento web.
- Como organizar arquivos e pastas de um projeto web.
- Papel do editor de código no fluxo de trabalho.
- Papel do navegador e do DevTools na depuração.
- Ciclo iterativo: **editar -> salvar -> testar -> corrigir**.

## 1) O que é ambiente de desenvolvimento?
Ambiente de desenvolvimento é o conjunto de ferramentas usadas para criar software. No contexto desta disciplina, ele é composto por:

- **Editor de código** para escrever e organizar arquivos;
- **Terminal** para navegar nas pastas e executar comandos;
- **Navegador** para visualizar e testar páginas;
- **DevTools** para inspecionar, diagnosticar e corrigir erros.

Sem esse ambiente configurado corretamente, mesmo conteúdos simples de HTML viram fonte de confusão.

## 2) Editor de código: onde o projeto nasce
O editor é o lugar onde você escreve HTML. Ele não "executa" a página sozinho; ele prepara os arquivos para que o navegador interprete.

### O que configurar no início
- pasta de projeto clara;
- arquivos com nomes consistentes;
- identação padronizada;
- salvamento frequente.

### Estrutura inicial recomendada
```text
meu-projeto/
  index.html
  assets/
```

### Por que essa estrutura importa?
Porque evita erros comuns como:
- arquivo principal não ser encontrado;
- arquivo em pasta errada;
- dificuldade de manutenção quando o projeto cresce.

## 3) Terminal: controle e organização do projeto
O terminal ajuda a manipular arquivos e diretórios com rapidez e clareza.

Comandos básicos úteis para iniciantes:
```bash
pwd
ls
mkdir -p meu-projeto/assets
cd meu-projeto
touch index.html
```

### Leitura prática dos comandos
- `pwd`: mostra onde você está no sistema;
- `ls`: lista arquivos e pastas;
- `mkdir`: cria pastas;
- `cd`: entra em uma pasta;
- `touch`: cria arquivos.

Saber isso já reduz muito erro operacional no começo da aprendizagem.

## 4) Navegador: onde o código vira interface
O navegador interpreta seus arquivos e renderiza a página. Ele é o primeiro validador do seu trabalho.

Quando você abre `index.html`, o navegador:
1. lê o HTML;
2. organiza os elementos da página;
3. mostra o resultado na tela.

Se algo não aparecer como esperado, isso **não significa fracasso**. Significa que é hora de depurar com método.

## 5) DevTools: ferramenta central de depuração
DevTools (Ferramentas de Desenvolvedor) é o painel técnico do navegador.

Atalho comum: `F12` ou `Ctrl+Shift+I`.

### Painéis mais importantes neste momento
- **Elements**: mostra o HTML final organizado pelo navegador.
- **Network**: mostra o carregamento dos arquivos.

### O que verificar primeiro quando algo dá errado
1. O arquivo certo está aberto no navegador?
2. O conteúdo salvo no editor é o mesmo que está sendo exibido?
3. As tags HTML foram abertas e fechadas corretamente?
4. O arquivo carregou no Network sem falhas?

## 6) Fluxo profissional básico: editar, salvar, testar, corrigir
Esse ciclo é o coração do trabalho front-end:

1. **Editar** uma pequena parte do código.
2. **Salvar** o arquivo.
3. **Testar** no navegador.
4. **Observar** o resultado e mensagens do DevTools.
5. **Corrigir** e repetir.

Esse método evita acumular erros e acelera o aprendizado real.

## 7) Exemplo principal (HTML puro)
### `index.html`
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Encontro 3 - Ambiente</title>
  </head>
  <body>
      <h1>Ambiente de Desenvolvimento</h1>
      <p>Estou aprendendo a criar e testar páginas com HTML.</p>
      <h2>Ferramentas da aula</h2>
  </body>
</html>
```

### Como validar este exemplo
- Abrir `index.html` no navegador.
- Verificar se os títulos, parágrafo e lista aparecem.
- Abrir o painel **Elements** no DevTools e localizar os elementos da página.

## 8) Exemplo de erro real e correção
### Erro proposital
```html
<h1>Ambiente de Desenvolvimento
<p>Estou aprendendo HTML.</p>
```

Problema: a tag `<h1>` não foi fechada.

Efeito: o navegador tenta corrigir sozinho, mas a estrutura pode ficar confusa para leitura e manutenção.

Correção:
```html
<h1>Ambiente de Desenvolvimento</h1>
<p>Estou aprendendo HTML.</p>
```

### Como descobrir com DevTools
- Em **Elements**, observe como o navegador montou a árvore HTML.
- Compare com o código-fonte e verifique tags abertas e fechadas.

## 9) Erros comuns de iniciantes
- esquecer de salvar antes de testar;
- abrir arquivo diferente do que está editando;
- esquecer de fechar tags corretamente;
- ignorar a estrutura mostrada no Elements;
- tentar corrigir muitas coisas ao mesmo tempo.

## Materiais para aprofundamento
- [MDN - Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started)
- [MDN - What are browser developer tools?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [VS Code Docs](https://code.visualstudio.com/docs)
- [MDN - Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)

## Checklist de compreensão
- [ ] Consigo explicar o que é ambiente de desenvolvimento no front-end.
- [ ] Sei organizar um projeto com pastas e arquivos básicos.
- [ ] Consigo abrir DevTools e usar o painel Elements.
- [ ] Consigo identificar e corrigir erro de estrutura HTML.
- [ ] Consigo aplicar o ciclo editar-salvar-testar-corrigir.

## Resumo final
Neste encontro, você construiu a base operacional para o restante da disciplina. A síntese é: **editor organiza o código, navegador interpreta, DevTools explica o que aconteceu**. Com esse trio, você desenvolve com mais clareza, autonomia e precisão.

## Questões de fixação
1. Qual a função principal do editor de código no seu fluxo de trabalho?

2. Como o DevTools ajuda quando a estrutura HTML está incorreta?

3. Qual é o ciclo básico de desenvolvimento recomendado para iniciantes?

4. Cite um erro comum ao iniciar.