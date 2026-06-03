# Encontro 12 - Correção da Atividade Avaliativa 02 (passo a passo)

**Unidade:** Unidade 1  
**Carga prevista:** 1,5h  
**Entregável previsto:** `index.html` corrigido, validado e com navegação interna funcional

## Visão Geral
Neste encontro, fazemos a correção orientada da **Atividade Avaliativa 02** com foco em combinação de tags, aninhamento correto e uso de HTML semântico.

A proposta é revisar cada requisito do enunciado e construir uma versão final da página **Mapa de Estudos da Web**, conferindo se todos os links internos, blocos semânticos, mídias e dados organizados funcionam corretamente.

**Documento-base da atividade:**  
[Atividade Avaliativa 02 (PDF)](../atividades/Atividade%20Avaliativa%20-%201%C2%BA%20BIM%2002%20-%20Autoria%20Web.pdf)

## Conceitos Essenciais
- Estrutura base obrigatória do HTML5.
- Aninhamento correto entre elementos pais e filhos.
- Uso semântico de `header`, `nav`, `main`, `section`, `article`, `figure` e `footer`.
- Navegação interna com `id` e links do tipo `href="#destino"`.
- Uso de mídias com contexto: `img`, `alt`, `figcaption`, `audio`, `source` e fallback.
- Organização de dados com `table`, `caption`, `thead` e `tbody`.

## 1) Relembrando os critérios da atividade
Para considerar a atividade correta, o `index.html` precisava:

1. Construir uma página única com o tema **"Mapa de Estudos da Web"**.
2. Criar topo e navegação interna com o encadeamento `header > h1 + p + nav > ul > li > a`.
3. Definir o `h1` com `id="topo"`.
4. Inserir um texto introdutório curto.
5. Criar um menu com 4 links internos:
   - `#fundamentos`;
   - `#estrutura`;
   - `#midias`;
   - `#referencias`.
6. Criar a seção `#fundamentos` com 2 elementos `article`.
7. Explicar:
   - diferença entre Internet e Web;
   - modelo cliente-servidor;
   - URL, DNS e HTTP.
8. Criar a seção `#midias` com `article`, `figure`, `img`, `figcaption` e `audio controls`.
9. Criar a seção `#referencias` com uma tabela completa.
10. Inserir `footer` com crédito da mídia usada e link interno para `#topo`.
11. Manter organização, indentação e fechamento correto das tags.

## 2) Passo 1 - Conferir estrutura HTML5 completa
Comece validando o esqueleto mínimo:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mapa de Estudos da Web</title>
  </head>
  <body></body>
</html>
```

A correção deve começar por essa base, porque ela sustenta todos os blocos exigidos pelo enunciado.

## 3) Passo 2 - Corrigir topo e navegação interna
O topo precisa reunir título, introdução e menu. Um exemplo correto:

```html
<header>
  <h1 id="topo">Mapa de Estudos da Web</h1>
  <p>Um guia inicial para revisar os principais conceitos estudados em Autoria Web.</p>

  <nav aria-label="Navegação principal">
    <ul>
      <li><a href="#fundamentos">Fundamentos</a></li>
      <li><a href="#estrutura">Estrutura</a></li>
      <li><a href="#midias">Mídias</a></li>
      <li><a href="#referencias">Referências</a></li>
    </ul>
  </nav>
</header>
```

Pontos de atenção:

- o `h1` precisa ter exatamente um identificador que permita voltar ao topo: `id="topo"`;
- os links internos precisam começar com `#`;
- cada link do menu precisa ter uma seção correspondente no corpo da página.

## 4) Passo 3 - Garantir destino para todos os links internos
O menu cobra quatro destinos. Portanto, a versão corrigida precisa conter estes identificadores:

```html
<section id="fundamentos"></section>
<section id="estrutura"></section>
<section id="midias"></section>
<section id="referencias"></section>
```

Mesmo que o enunciado detalhe mais diretamente as seções `fundamentos`, `midias` e `referencias`, o link `#estrutura` também precisa apontar para algum bloco real da página. Link interno sem destino é link quebrado.

## 5) Passo 4 - Corrigir a seção de fundamentos
A seção de fundamentos deve ficar dentro de `main` e conter 2 elementos `article`.

```html
<main>
  <section id="fundamentos">
    <h2>Fundamentos da Web</h2>

    <article>
      <h3>Internet, Web e cliente-servidor</h3>
      <p>
        A Internet é a infraestrutura de redes que conecta dispositivos no mundo todo.
        A Web é um serviço que funciona sobre essa infraestrutura e permite acessar
        páginas por meio de navegadores.
      </p>
      <p>
        No modelo cliente-servidor, o navegador faz uma solicitação e o servidor
        responde enviando os recursos necessários.
      </p>
    </article>

    <article>
      <h3>URL, DNS e HTTP</h3>
      <p>
        A URL indica o endereço de um recurso na Web. O DNS traduz nomes de domínio
        em endereços compreendidos pelos computadores. O HTTP define regras para
        a comunicação entre cliente e servidor.
      </p>
    </article>
  </section>
</main>
```

Critérios centrais:

- usar `section id="fundamentos"`;
- inserir 2 `article`;
- explicar os conceitos pedidos com clareza;
- evitar texto solto fora dos blocos semânticos.

## 6) Passo 5 - Criar a seção de estrutura
Como o menu exige o destino `#estrutura`, uma boa correção é criar uma seção curta explicando a organização das tags.

```html
<section id="estrutura">
  <h2>Estrutura da página</h2>

  <article>
    <h3>Tags trabalhando em conjunto</h3>
    <p>
      Uma página bem organizada combina elementos semânticos. O header apresenta
      a página, o nav reúne links de navegação, o main concentra o conteúdo
      principal e as sections dividem os assuntos.
    </p>
  </article>
</section>
```

Essa seção resolve o destino do link interno e reforça o objetivo principal da avaliação: combinar tags corretamente.

## 7) Passo 6 - Corrigir mídias com contexto
A seção de mídias precisa usar `figure`, `img`, `figcaption` e `audio controls`.

```html
<section id="midias">
  <h2>Mídias com contexto</h2>

  <article>
    <h3>Representação visual do estudo da Web</h3>

    <figure>
      <img
        src="imagens/mapa-web.jpg"
        alt="Estudante organizando conceitos de HTML em um mapa de estudos"
      />
      <figcaption>Mapa visual com conceitos iniciais de HTML e funcionamento da Web.</figcaption>
    </figure>

    <audio controls>
      <source src="audios/resumo-web.mp3" type="audio/mpeg" />
      Seu navegador não suporta o elemento de áudio.
    </audio>
  </article>
</section>
```

Na correção, os nomes dos arquivos podem variar, mas os requisitos não podem faltar:

- `img` com `src`;
- `alt` descritivo;
- `figcaption` relacionado à imagem;
- `audio controls`;
- `source` com caminho do áudio;
- texto de fallback dentro de `audio`.

## 8) Passo 7 - Corrigir tabela de referências e fechamento
A seção de referências precisa ter tabela com `caption`, `thead`, `tbody`, 3 colunas e pelo menos 3 linhas.

```html
<section id="referencias">
  <h2>Referências de estudo</h2>

  <table>
    <caption>Recursos para continuar estudando Web</caption>
    <thead>
      <tr>
        <th>Recurso</th>
        <th>Tipo</th>
        <th>Finalidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MDN Web Docs</td>
        <td>Documentação</td>
        <td>Consultar elementos HTML e exemplos</td>
      </tr>
      <tr>
        <td>DevTools</td>
        <td>Ferramenta</td>
        <td>Inspecionar e testar páginas no navegador</td>
      </tr>
      <tr>
        <td>Validador HTML</td>
        <td>Serviço online</td>
        <td>Verificar erros de marcação</td>
      </tr>
    </tbody>
  </table>
</section>
```

O fechamento da página deve conter crédito da mídia usada e link interno para o topo:

```html
<footer>
  <p>Crédito da mídia: imagem e áudio usados apenas para fins didáticos.</p>
  <a href="#topo">Voltar ao topo</a>
</footer>
```

## 9) Passo 8 - Ajustar organização e indentação
Antes da entrega final, verifique:

- abertura e fechamento corretos de todas as tags;
- indentação consistente com 2 espaços;
- `header`, `main` e `footer` como grandes blocos da página;
- `section` usada para dividir assuntos;
- `article` usado para conteúdos independentes dentro das seções;
- todos os links internos apontando para IDs existentes;
- ausência de tags colocadas fora de ordem ou sem necessidade.

## 10) Gabarito completo da atividade (`index.html`)
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mapa de Estudos da Web</title>
  </head>
  <body>
    <header>
      <h1 id="topo">Mapa de Estudos da Web</h1>
      <p>Um guia inicial para revisar os principais conceitos estudados em Autoria Web.</p>

      <nav aria-label="Navegação principal">
        <ul>
          <li><a href="#fundamentos">Fundamentos</a></li>
          <li><a href="#estrutura">Estrutura</a></li>
          <li><a href="#midias">Mídias</a></li>
          <li><a href="#referencias">Referências</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="fundamentos">
        <h2>Fundamentos da Web</h2>

        <article>
          <h3>Internet, Web e cliente-servidor</h3>
          <p>
            A Internet é a infraestrutura de redes que conecta dispositivos no mundo todo.
            A Web é um serviço que funciona sobre essa infraestrutura e permite acessar
            páginas, documentos e mídias por meio de navegadores.
          </p>
          <p>
            No modelo cliente-servidor, o cliente, como o navegador, envia uma solicitação.
            O servidor processa essa solicitação e responde com os recursos necessários
            para montar a página.
          </p>
        </article>

        <article>
          <h3>URL, DNS e HTTP</h3>
          <p>
            A URL indica o endereço de um recurso na Web. O DNS traduz nomes de domínio
            em endereços que os computadores conseguem localizar. O HTTP organiza as
            regras de comunicação entre cliente e servidor.
          </p>
        </article>
      </section>

      <section id="estrutura">
        <h2>Estrutura da página</h2>

        <article>
          <h3>Tags trabalhando em conjunto</h3>
          <p>
            Uma página bem estruturada combina tags semânticas de forma organizada.
            O header apresenta a página, o nav reúne links de navegação, o main contém
            o conteúdo principal, as sections dividem os assuntos e os articles agrupam
            explicações completas.
          </p>
        </article>
      </section>

      <section id="midias">
        <h2>Mídias com contexto</h2>

        <article>
          <h3>Representação visual do estudo da Web</h3>

          <figure>
            <img
              src="imagens/mapa-web.jpg"
              alt="Estudante organizando conceitos de HTML em um mapa de estudos"
            />
            <figcaption>Mapa visual com conceitos iniciais de HTML e funcionamento da Web.</figcaption>
          </figure>

          <audio controls>
            <source src="audios/resumo-web.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </article>
      </section>

      <section id="referencias">
        <h2>Referências de estudo</h2>

        <table>
          <caption>Recursos para continuar estudando Web</caption>
          <thead>
            <tr>
              <th>Recurso</th>
              <th>Tipo</th>
              <th>Finalidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MDN Web Docs</td>
              <td>Documentação</td>
              <td>Consultar elementos HTML e exemplos</td>
            </tr>
            <tr>
              <td>DevTools</td>
              <td>Ferramenta</td>
              <td>Inspecionar e testar páginas no navegador</td>
            </tr>
            <tr>
              <td>Validador HTML</td>
              <td>Serviço online</td>
              <td>Verificar erros de marcação</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>

    <footer>
      <p>Crédito da mídia: imagem e áudio usados apenas para fins didáticos.</p>
      <a href="#topo">Voltar ao topo</a>
    </footer>
  </body>
</html>
```

## 11) Roteiro de validação no navegador e no DevTools
1. Abra o `index.html` no navegador.
2. Confira o título da aba: **Mapa de Estudos da Web**.
3. Clique nos 4 links do menu e confirme se todos levam à seção correta.
4. Clique em **Voltar ao topo** no rodapé e confirme se retorna ao `h1`.
5. Verifique se a imagem aparece ou, em caso de erro no caminho, se o `alt` descreve bem o conteúdo.
6. Teste se o controle de áudio aparece no navegador.
7. Abra o DevTools (`F12`) e revise a árvore HTML no painel **Elements**.
8. Confira se `caption`, `thead`, `tbody`, `tr`, `th` e `td` estão aninhados corretamente.

## 12) Erros comuns observados na correção
- esquecer o `id="topo"` no `h1`;
- criar links internos no menu sem criar os IDs correspondentes;
- usar `article` fora de uma `section` quando o enunciado pede encadeamento;
- inserir imagem sem `alt` descritivo;
- usar `figcaption` sem relação clara com a imagem;
- colocar `source` fora do elemento `audio`;
- criar tabela sem `caption`, `thead` ou `tbody`;
- entregar código com tags abertas, fechamentos ausentes ou indentação inconsistente.

## Materiais para Aprofundamento
- [MDN - Estrutura básica de HTML](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [MDN - Elemento `<nav>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/nav)
- [MDN - Elemento `<figure>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/figure)
- [MDN - Elemento `<audio>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/audio)
- [MDN - Tabelas HTML](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

## Checklist de Compreensão
- [ ] Consigo montar uma página HTML5 completa.
- [ ] Consigo criar navegação interna usando `id` e `href="#destino"`.
- [ ] Consigo organizar uma página com `header`, `nav`, `main`, `section`, `article` e `footer`.
- [ ] Consigo usar imagem com `alt` e `figcaption`.
- [ ] Consigo inserir áudio com `controls`, `source` e fallback.
- [ ] Consigo criar tabela com `caption`, `thead`, `tbody`, 3 colunas e pelo menos 3 linhas.
- [ ] Consigo revisar o aninhamento das tags no DevTools.

## Resumo Final
Neste encontro, a Atividade Avaliativa 02 foi corrigida requisito por requisito, com foco em combinação de tags, navegação interna e organização semântica. A versão final do `index.html` atende ao tema **Mapa de Estudos da Web** e consolida os principais conteúdos de HTML5 trabalhados no primeiro bloco.

## Questões de Fixação
1. Por que todo link interno precisa ter um elemento com `id` correspondente?

2. Qual é a diferença entre usar `section` e `article` na organização do conteúdo?

3. Por que `alt` e `figcaption` não cumprem exatamente a mesma função?

4. Quais elementos tornam uma tabela HTML mais clara e organizada?

5. Que verificações no DevTools ajudam a encontrar erros de aninhamento?
