# Encontro 2 - Internet, Web, cliente-servidor, URL, DNS e HTTP

**Unidade:** Unidade 1  
**Carga prevista:** 1,5h  

## Visão Geral
Este encontro aprofunda a base conceitual da Web. O foco é entender a diferença entre **Internet** e **Web**, como funciona o modelo **cliente-servidor**, como ler uma **URL**, qual o papel do **DNS** e como o **HTTP** organiza a comunicação entre navegador e servidor.


## Conceitos Essenciais
- Diferença entre Internet e Web.
- Modelo cliente-servidor.
- Estrutura e leitura de URLs.
- Papel do DNS na resolução de nomes.
- Funcionamento básico do HTTP.
- Fluxo completo de acesso a uma página web.

## 1) Internet e Web: não são a mesma coisa
Muitos estudantes usam os termos como sinônimos, mas tecnicamente eles representam coisas diferentes.

### Internet
A Internet é a **infraestrutura global de redes** interligadas. Ela conecta computadores, servidores, roteadores, cabos, enlaces sem fio, provedores e data centers. É a base física e lógica que permite a troca de dados entre máquinas.

Em outras palavras, a Internet é a rede.

### Web
A Web, ou World Wide Web, é **um serviço que funciona sobre a Internet**. Ela usa padrões como URL, HTTP e HTML para permitir navegação por documentos e aplicações interligadas por links.

Em outras palavras, a Web é um dos serviços que usam a Internet.

### Exemplos de serviços que usam a Internet, mas não são a Web
- E-mail.
- Mensageria instantânea.
- Transferência de arquivos.
- Jogos online.
- Streaming.
- SSH e acesso remoto.

### Analogia pedagógica
- **Internet:** sistema de estradas, ruas e infraestrutura.
- **Web:** um tipo específico de serviço que circula por essas estradas.

Essa distinção é importante porque, em desenvolvimento web, não basta saber construir páginas. Também é preciso entender a rede que transporta as requisições.

## 2) Modelo cliente-servidor
A Web opera principalmente com base no modelo **cliente-servidor**.

### Cliente
O cliente é o programa que faz a solicitação. Na maioria dos casos estudados neste curso, o cliente é o **navegador**.

Exemplos de clientes:
- Google Chrome.
- Firefox.
- Edge.
- Safari.
- Aplicações móveis que consomem APIs.

### Servidor
O servidor é o sistema que recebe a solicitação, processa o pedido e devolve uma resposta.

Exemplos de resposta do servidor:
- uma página HTML;
- um arquivo CSS;
- uma imagem;
- um arquivo JavaScript;
- dados em JSON;
- uma mensagem de erro.

### Ciclo básico de comunicação
1. O cliente solicita um recurso.
2. A requisição atravessa a rede.
3. O servidor recebe e processa.
4. O servidor envia uma resposta.
5. O cliente interpreta o conteúdo recebido.

### Exemplo prático
Quando o usuário acessa `https://www.ifrn.edu.br`, o navegador atua como cliente e solicita a página inicial. O servidor do site responde com HTML e, possivelmente, com outros recursos complementares, como folhas de estilo, imagens e scripts.

### Requisição e resposta
Na Web, a conversa entre cliente e servidor costuma seguir o padrão:

- **Request (requisição):** "quero este recurso".
- **Response (resposta):** "aqui está o recurso" ou "não foi possível entregar".

Esse padrão parece simples, mas é a base de quase tudo na Web.

## 3) O que acontece quando digitamos um endereço no navegador?
Este é um dos fluxos conceituais mais importantes da disciplina.

Suponha que o usuário digite:

```text
https://developer.mozilla.org/pt-BR/docs/Web/HTTP
```

O processo, em alto nível, é:

1. O navegador interpreta a URL.
2. Ele identifica o protocolo: `https`.
3. Ele identifica o domínio: `developer.mozilla.org`.
4. Ele consulta o DNS para descobrir o endereço IP associado ao domínio.
5. Depois de descobrir o IP, ele estabelece conexão com o servidor.
6. Envia uma requisição HTTP.
7. Recebe a resposta do servidor.
8. Processa o HTML e solicita outros recursos necessários.
9. Renderiza a página na tela.

Essa sequência conecta praticamente todos os conceitos do encontro.

## 4) URL: como localizar um recurso na Web
URL significa **Uniform Resource Locator**. É o endereço usado para localizar um recurso na Web.

### Exemplo de URL
```text
https://www.exemplo.com.br/cursos/html/introducao.html?turma=tsi&modo=noturno#topo
```

### Partes da URL
- **Protocolo:** `https`
- **Domínio (host):** `www.exemplo.com.br`
- **Caminho (path):** `/cursos/html/introducao.html`
- **Query string:** `?turma=tsi&modo=noturno`
- **Fragmento:** `#topo`

### Explicando cada parte

#### Protocolo
Define como a comunicação deve acontecer.

Exemplos:
- `http`
- `https`

Hoje, `https` é o padrão esperado na Web moderna porque adiciona criptografia via TLS.

#### Domínio
É o nome legível para humanos, usado para identificar o servidor ou serviço.

Exemplos:
- `google.com`
- `ifrn.edu.br`
- `developer.mozilla.org`

#### Caminho
Indica qual recurso está sendo solicitado dentro do servidor.

Exemplos:
- `/`
- `/blog`
- `/docs/Web/HTML`

#### Query string
Transporta parâmetros adicionais.

Exemplo:
```text
https://site.com/busca?q=html&pagina=2
```

Nesse caso:
- `q=html`
- `pagina=2`

#### Fragmento
Aponta para uma seção interna do documento. Em geral, ele é processado pelo navegador e não costuma ser enviado ao servidor na requisição HTTP tradicional.

Exemplo:
```text
https://site.com/aula.html#referencias
```

## 5) DNS: traduzindo nomes em endereços IP
Computadores se comunicam de forma mais direta por meio de endereços IP. Pessoas, por outro lado, preferem nomes fáceis de memorizar. O DNS existe para fazer essa ponte.

DNS significa **Domain Name System**.

### Função do DNS
Traduzir nomes como:

```text
www.ifrn.edu.br
```

em endereços IP como:

```text
200.137.x.x
```

### Analogia
O DNS funciona como uma agenda de contatos:
- o usuário lembra o nome;
- o sistema descobre o número correspondente.

### Por que o DNS é importante?
Sem DNS, o usuário precisaria memorizar IPs para acessar sites. Isso seria inviável em larga escala.

### Fluxo simplificado de resolução DNS
1. O navegador ou sistema operacional verifica se já conhece o IP.
2. Se não conhecer, consulta servidores DNS.
3. Recebe o IP correspondente ao domínio.
4. Usa esse IP para iniciar a comunicação com o servidor de destino.

### Consequência prática
Se o DNS falhar:
- o site pode estar no ar;
- o servidor pode estar funcionando;
- mas o navegador não consegue encontrar o destino pelo nome.

Isso explica erros como:
- "servidor DNS não encontrado";
- "não foi possível localizar o endereço IP do servidor".

## 6) HTTP: o protocolo da comunicação na Web
HTTP significa **HyperText Transfer Protocol**. É o protocolo que organiza a troca de mensagens entre cliente e servidor na Web.

Ele define:
- como a requisição é enviada;
- como a resposta é estruturada;
- quais métodos estão sendo usados;
- quais códigos indicam sucesso ou erro;
- quais metadados acompanham a comunicação.

### HTTP não é linguagem de programação
Esse ponto merece destaque pedagógico. HTTP não é uma linguagem usada para "programar páginas". Ele é um **protocolo de comunicação**.

### Exemplo conceitual de requisição HTTP
```http
GET /docs/Web/HTTP HTTP/1.1
Host: developer.mozilla.org
```

### Exemplo conceitual de resposta HTTP
```http
HTTP/1.1 200 OK
Content-Type: text/html
```

Depois desses metadados, o servidor envia o conteúdo solicitado, como HTML.

## 7) Métodos HTTP mais importantes

### GET
Usado para solicitar dados ou recursos.

Exemplos:
- abrir uma página;
- buscar uma imagem;
- carregar um arquivo CSS.

### POST
Usado para enviar dados ao servidor.

Exemplos:
- enviar um formulário;
- cadastrar usuário;
- registrar mensagem.

### Outros métodos relevantes
- `PUT`
- `PATCH`
- `DELETE`

Neste momento da disciplina, o mais importante é consolidar a diferença entre **buscar** recursos e **enviar** dados.

## 8) Códigos de status HTTP
Os códigos de status ajudam a interpretar o resultado da comunicação.

### Faixas principais
- **1xx:** informativos
- **2xx:** sucesso
- **3xx:** redirecionamento
- **4xx:** erro do cliente
- **5xx:** erro do servidor

### Códigos mais importantes
- **200 OK:** requisição bem-sucedida.
- **201 Created:** recurso criado com sucesso.
- **301 Moved Permanently:** recurso movido permanentemente.
- **302 Found:** redirecionamento temporário.
- **304 Not Modified:** recurso em cache ainda válido.
- **400 Bad Request:** requisição malformada.
- **401 Unauthorized:** autenticação necessária.
- **403 Forbidden:** acesso negado.
- **404 Not Found:** recurso não encontrado.
- **500 Internal Server Error:** erro interno no servidor.
- **503 Service Unavailable:** serviço indisponível.

### Leitura dos erros
- `404` geralmente indica que o caminho pedido não existe.
- `403` indica que o servidor entendeu o pedido, mas não permite acesso.
- `500` indica que houve falha no lado do servidor.


## 9) Cabeçalhos HTTP e metadados
Além do conteúdo principal, requisições e respostas enviam informações extras chamadas **headers**.

Exemplos comuns:
- `Host`
- `Content-Type`
- `User-Agent`
- `Accept`
- `Authorization`
- `Cache-Control`

### Exemplo de interpretação
Se a resposta inclui:

```http
Content-Type: text/html
```

o navegador entende que deve interpretar o conteúdo como HTML.

Se a resposta inclui:

```http
Content-Type: application/json
```

o cliente entende que receberá dados estruturados em JSON.

## 10) HTTP e HTTPS
É importante distinguir os dois termos.

### HTTP
Comunicação em texto seguindo o protocolo HTTP.

### HTTPS
HTTP sobre uma camada segura de criptografia, normalmente com TLS.

### Por que isso importa?
Com HTTPS:
- a comunicação fica protegida contra interceptação simples;
- dados sensíveis têm mais segurança;
- o navegador reconhece o site como seguro;
- mecanismos modernos da Web funcionam melhor ou exigem contexto seguro.

Na prática atual, ensinar Web sem mencionar HTTPS seria incompleto.

## 11) Fluxo completo: da URL à página exibida
Este é o resumo integrador do encontro.

Quando o usuário acessa:

```text
https://www.exemplo.com/produtos?categoria=livros
```

o fluxo pode ser explicado assim:

1. A URL informa protocolo, domínio e recurso.
2. O navegador identifica o domínio.
3. O DNS converte o domínio em IP.
4. O navegador estabelece conexão com o servidor.
5. Envia uma requisição HTTP, geralmente `GET`.
6. O servidor devolve uma resposta com status, headers e corpo.
7. O navegador interpreta o HTML.
8. Novas requisições podem ser feitas para CSS, JavaScript, fontes e imagens.
9. A interface é montada na tela.

Essa visão sistêmica prepara o estudante para entender, nas próximas aulas, por que um HTML pode existir e ainda assim não aparecer corretamente sem CSS, imagens ou scripts carregados.

## 12) Exemplo prático com HTML e link
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Links e Navegação</title>
  </head>
  <body>
    <main>
      <h1>Explorando URLs</h1>
      <p>
        Acesse a
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP">
          documentação de HTTP na MDN
        </a>.
      </p>
    </main>
  </body>
</html>
```

## 13) Exemplo prático com formulário e método HTTP
```html
<form action="/cadastro" method="post">
  <label for="nome">Nome</label>
  <input id="nome" name="nome" type="text" required />

  <label for="email">E-mail</label>
  <input id="email" name="email" type="email" required />

  <button type="submit">Enviar</button>
</form>
```

## 14) Erros Comuns de Iniciantes
- tratar Internet e Web como sinônimos absolutos;
- pensar que URL é apenas "o nome do site";
- acreditar que DNS e HTTP fazem a mesma coisa;
- confundir domínio com protocolo;
- supor que `404` significa "site caiu";
- não perceber que uma página costuma depender de várias requisições, não apenas uma.

## 15) Materiais para Aprofundamento
- [MDN - Como a Web funciona](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [MDN - URLs: conceitos básicos](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [MDN - Uma visão geral de HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
- [MDN - DNS](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Cloudflare Learning Center - O que é DNS?](https://www.cloudflare.com/pt-br/learning/dns/what-is-dns/)

## Checklist de Compreensão
- [ ] Consigo diferenciar Internet de Web com precisão.
- [ ] Consigo explicar o modelo cliente-servidor.
- [ ] Consigo identificar protocolo, domínio, caminho, query string e fragmento em uma URL.
- [ ] Consigo explicar a função do DNS.
- [ ] Consigo descrever o que o HTTP faz na comunicação web.
- [ ] Consigo interpretar pelo menos os códigos `200`, `404` e `500`.
- [ ] Consigo narrar o fluxo completo entre digitar uma URL e visualizar a página.

## Resumo Final
Neste encontro, você construiu a base de rede necessária para estudar desenvolvimento web com mais clareza. A principal síntese é esta: a **Internet** é a infraestrutura, a **Web** é um serviço que opera sobre ela, o **cliente** faz requisições ao **servidor**, a **URL** identifica o recurso, o **DNS** descobre o endereço IP do destino e o **HTTP** organiza a troca de mensagens.

Sem essa visão integrada, HTML aparece apenas como marcação. Com ela, o estudante começa a entender de fato como uma página existe, é localizada, transferida e exibida.

## Questões de Fixação
1. Explique, com suas palavras, a diferença entre Internet e Web.
<!-- Gabarito: A Internet é a infraestrutura global de redes; a Web é um serviço que funciona sobre essa infraestrutura usando padrões como URL, HTTP e HTML. -->

2. Qual é o papel do cliente e qual é o papel do servidor na comunicação web?
<!-- Gabarito: O cliente solicita recursos; o servidor recebe a solicitação, processa o pedido e devolve uma resposta. -->

3. Em uma URL, o que representam protocolo, domínio e caminho?
<!-- Gabarito: Protocolo define a forma de comunicação, domínio identifica o host/servidor pelo nome e caminho indica o recurso solicitado dentro do servidor. -->

4. Para que serve o DNS?
<!-- Gabarito: Para traduzir nomes de domínio legíveis por humanos em endereços IP usados na comunicação entre máquinas. -->

5. O que significa receber um status `404 Not Found`?
<!-- Gabarito: Significa que o recurso solicitado não foi encontrado no servidor para aquele caminho/endereço. -->
