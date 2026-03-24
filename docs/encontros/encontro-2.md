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

### Analogia
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

### Servidor
O servidor é o sistema que recebe a solicitação, processa o pedido e devolve uma resposta.

Exemplos de resposta do servidor:
- uma página HTML;
- um arquivo CSS;
- uma imagem;
- um arquivo JavaScript;

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
https://portal.ifrn.edu.br/campus/curraisnovos/
```

O processo, em alto nível, é:

1. O navegador interpreta a URL.
2. Ele identifica o protocolo: `https`.
3. Ele identifica o domínio: `portal.ifrn.edu.br`.
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
https://portal.ifrn.edu.br/campus/curraisnovos/
```

### Partes da URL
- **Protocolo:** `https`
- **Domínio (host):** `portal.ifrn.edu.br`
- **Caminho (path):** `/campus/curraisnovos`

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

#### Caminho
Indica qual recurso está sendo solicitado dentro do servidor.

Exemplos:
- `/`
- `/campus`
- `/campus/curraisnovos`


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

## 7) Erros Comuns de Iniciantes
- tratar Internet e Web como sinônimos absolutos;
- pensar que URL é apenas "o nome do site";
- acreditar que DNS e HTTP fazem a mesma coisa;
- confundir domínio com protocolo;

## 8) Materiais para Aprofundamento
- [MDN - Como a Web funciona](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- [MDN - URLs: conceitos básicos](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [MDN - Uma visão geral de HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
- [MDN - DNS](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Cloudflare Learning Center - O que é DNS?](https://www.cloudflare.com/pt-br/learning/dns/what-is-dns/)

## Checklist de Compreensão
- [ ] Consigo diferenciar Internet de Web com precisão.
- [ ] Consigo explicar o modelo cliente-servidor.
- [ ] Consigo identificar protocolo, domínio e caminho.
- [ ] Consigo explicar a função do DNS.
- [ ] Consigo descrever o que o HTTP faz na comunicação web.
- [ ] Consigo narrar o fluxo completo entre digitar uma URL e visualizar a página.

## Resumo Final
Neste encontro, você construiu a base de rede necessária para estudar desenvolvimento web com mais clareza. A principal síntese é esta: a **Internet** é a infraestrutura, a **Web** é um serviço que opera sobre ela, o **cliente** faz requisições ao **servidor**, a **URL** identifica o recurso, o **DNS** descobre o endereço IP do destino e o **HTTP** organiza a troca de mensagens.

Sem essa visão integrada, HTML aparece apenas como marcação. Com ela, o estudante começa a entender de fato como uma página existe, é localizada, transferida e exibida.

## Questões de Fixação
1. Explique, com suas palavras, a diferença entre Internet e Web.

2. Qual é o papel do cliente e qual é o papel do servidor na comunicação web?

3. Em uma URL, o que representam protocolo, domínio e caminho?

4. Para que serve o DNS?

5. O que significa receber um status `404 Not Found`?
