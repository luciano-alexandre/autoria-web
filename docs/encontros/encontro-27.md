# Encontro 27 - Orientação do Projeto em Dupla

## 1) Formação das duplas e escolha do tema

- O projeto deverá ser desenvolvido em dupla.
- Cada dupla escolherá uma das 21 propostas deste documento.
- Os dois integrantes devem participar do código e da apresentação.
- A dupla poderá personalizar nome, textos, cores e dados, mas deverá manter os requisitos técnicos do tema escolhido.

## 2) Escopo técnico

O projeto deve usar somente recursos estudados ou demonstrados até o Encontro 26.

### HTML

- estrutura completa do HTML5;
- `header`, `nav`, `main`, `section`, `article` e `footer`;
- títulos em ordem coerente;
- parágrafos, listas, links e, quando fizer sentido, tabela ou imagem;
- navegação interna com pelo menos três links;
- identificadores para as áreas atualizadas pelo JavaScript;
- textos próprios e relacionados ao tema.

### CSS

- arquivo externo `styles.css`;
- variáveis de cores declaradas em `:root`;
- seletores por elemento, classe e identificador;
- tipografia, cores e contraste adequados;
- uso intencional de `margin`, `padding`, bordas e unidades relativas;
- largura máxima e conteúdo centralizado;
- Flexbox ou Grid para organizar cards ou resultados;
- adaptação básica a telas estreitas com quebra dos elementos ou media query.

### JavaScript

- arquivo externo `script.js` conectado com `defer`;
- variáveis `const` e `let` usadas adequadamente;
- pelo menos uma `string`, um `number`, um `boolean` e um array;
- operadores aritméticos, de comparação e lógicos;
- pelo menos uma estrutura com `if`, `else if` e `else`;
- pelo menos uma estrutura de repetição `for` ou `while`;
- no mínimo três funções com parâmetros e retorno;
- template literals;
- resultados com rótulos claros no Console;
- pelo menos três resultados apresentados em elementos do HTML usando `textContent`;
- ausência de erros no Console.

Não são obrigatórios formulários, eventos, objetos, armazenamento de dados, APIs ou bibliotecas externas.

## 3) Estrutura de pastas

```text
nome-do-projeto/
├── index.html
├── styles.css
├── script.js
└── imagens/
    └── arquivos-utilizados
```

Todos os caminhos devem funcionar quando a pasta for aberta em outro computador.

## 4) Estrutura mínima da página

Independentemente do tema, o site deverá conter:

1. cabeçalho com nome e apresentação do projeto;
2. menu de navegação interna;
3. seção que explique o propósito da aplicação;
4. seção com informações, cards ou orientações relacionadas ao tema;
5. seção de resultados calculados pelo JavaScript;
6. seção que apresente ou explique os dados processados;
7. rodapé com nomes dos integrantes e turma.

## 5) Ideias de projeto

### Ideia 1 - Painel de rotina de estudos

**Responsáveis:** Ana Elisa e Larissa.

Crie um site para acompanhar as horas estudadas em seis disciplinas. A página deve apresentar cards com dicas de organização, uma lista das disciplinas e uma área de resultados. No JavaScript, armazene as horas em um array, calcule total e média, conte quantas disciplinas atingiram uma meta mínima e classifique a rotina como **Excelente**, **Regular** ou **Precisa melhorar**.

### Ideia 2 - Acompanhamento de leitura

**Responsáveis:** Maria Helena e Anna Alice.

Desenvolva um site para registrar páginas lidas em seis sessões de leitura. Inclua apresentação do livro, benefícios da leitura e cards de progresso. O JavaScript deve calcular páginas lidas, média por sessão, sessões que alcançaram a meta e uma classificação como **Leitura intensa**, **Bom ritmo** ou **Ritmo inicial**.

### Ideia 3 - Controle diário de hidratação

**Responsáveis:** Luiz Felipe e Liana Maria.

Crie uma página educativa sobre hidratação com seis registros de copos ou mililitros consumidos. O programa deve calcular o consumo total, a média por período, quantos registros atingiram uma meta e classificar o acompanhamento como **Meta atingida**, **Quase lá** ou **Atenção à hidratação**. Deixe claro que o projeto é apenas didático e não oferece orientação médica.

### Ideia 4 - Diário de atividades físicas

**Responsáveis:** Luis Henrique Santos Sousa; Anthony Gabriel e Vívian.

Produza um site com orientações gerais sobre movimento e um acompanhamento de minutos praticados em seis dias. O JavaScript deverá calcular o total, a média diária, a quantidade de dias acima de uma meta e classificar a regularidade como **Muito ativa**, **Ativa** ou **Pouco ativa**.

### Ideia 5 - Planejador de economia pessoal

**Responsáveis:** Antônio Carlos e Gabriel Lucas.

Monte uma página com dicas de organização financeira e seis valores economizados. Calcule o total guardado, a média, quantos depósitos atingiram um valor mínimo e a diferença até uma meta. Classifique o progresso como **Meta alcançada**, **Em andamento** ou **Início da economia**.

### Ideia 6 - Monitor de gastos de uma viagem

**Responsáveis:** a definir.

Crie um site de planejamento de viagem com seis categorias de despesas representadas no HTML e seus valores no JavaScript. Calcule o gasto total, a média, quantas categorias ultrapassaram um limite e o saldo em relação ao orçamento. Classifique a situação como **Dentro do orçamento**, **Próximo do limite** ou **Acima do orçamento**.

### Ideia 7 - Catálogo de filmes avaliados

**Responsáveis:** Nycolle e Guilherme.

Desenvolva uma página com seis filmes ou categorias cinematográficas e notas correspondentes. Apresente recomendações e informações sobre critérios de avaliação. O script deverá calcular média das notas, maior quantidade de avaliações acima de uma referência e classificar o catálogo como **Muito recomendado**, **Recomendado** ou **Seleção em revisão**.

### Ideia 8 - Painel de músicas de uma playlist

**Responsáveis:** Geovana Mohales e Vitor Pereira.

Crie um site que apresente uma playlist temática e a duração, em minutos, de seis músicas. O JavaScript deve calcular duração total, média por faixa, quantidade de músicas curtas ou longas conforme um limite e classificar a playlist como **Longa**, **Média** ou **Curta**.

### Ideia 9 - Guia de pontos turísticos

**Responsáveis:** Geovana Matos Borges e Rikelison Gabriel Pinheiro Silva.

Monte um site com informações sobre seis pontos turísticos e use no JavaScript os tempos estimados de visita. Calcule tempo total, média de duração, quantos locais exigem mais tempo que uma referência e classifique o roteiro como **Dia completo**, **Meio período** ou **Passeio rápido**.

### Ideia 10 - Organizador de receitas

**Responsável:** João de Deus.

Crie um site de receitas com seis etapas ou preparações e seus tempos. Inclua ingredientes, orientações e cuidados de organização. O JavaScript deve calcular tempo total, média por etapa, quantas etapas ultrapassam um limite e classificar a receita como **Demorada**, **Moderada** ou **Rápida**.

### Ideia 11 - Painel da feira de ciências

**Responsáveis:** Victor e Javan.

Desenvolva uma página para divulgar seis projetos de uma feira e suas pontuações de avaliação. Inclua programação, orientações ao público e cards dos projetos. Calcule total e média das notas, quantidade de projetos acima de uma referência e classifique o resultado geral como **Destaque**, **Bom desempenho** ou **Em desenvolvimento**.

### Ideia 12 - Campeonato de jogos digitais

**Responsáveis:** Grazielle e Thierry.

Crie um site para apresentar seis rodadas ou partidas de um campeonato e os pontos obtidos por uma equipe. Calcule pontuação total, média por rodada, quantidade de vitórias segundo um limite e classifique o desempenho como **Campeã**, **Competitiva** ou **Em treinamento**.

### Ideia 13 - Campanha de arrecadação solidária

**Responsáveis:** Layse e Arthur.

Produza um site para divulgar uma campanha e registrar seis quantidades arrecadadas. Apresente objetivo, itens aceitos e formas de participação. O programa deve calcular total, média por coleta, quantidade de coletas acima da meta parcial e classificar a campanha como **Meta alcançada**, **Próxima da meta** ou **Precisamos de apoio**.

### Ideia 14 - Controle de empréstimos da biblioteca

**Responsável:** Lucas Gabriel Pereira de Araújo.

Crie uma página sobre a biblioteca com seis registros numéricos de empréstimos por categoria ou período. Calcule total, média, quantidade de registros acima de uma referência e classifique o movimento como **Alto**, **Moderado** ou **Baixo**. Inclua seções sobre serviços e cuidados com os livros.

### Ideia 15 - Avaliação do cardápio escolar

**Responsáveis:** Dayonn Thiago e Ícaro Miguel.

Monte um site para apresentar seis opções ou dias de cardápio e suas notas de avaliação. Calcule média, total das notas, quantidade de avaliações positivas e classifique a aceitação como **Ótima**, **Boa** ou **Precisa melhorar**. Não inclua recomendações médicas ou nutricionais.

### Ideia 16 - Consumo de energia de uma residência fictícia

**Responsáveis:** Davi e Jonathan.

Crie uma página educativa sobre economia de energia e seis registros fictícios de consumo. O JavaScript deve calcular consumo total, média, quantidade de períodos acima de um limite e classificar o uso como **Econômico**, **Moderado** ou **Elevado**.

### Ideia 17 - Campanha de coleta seletiva

**Responsáveis:** a definir.

Desenvolva um site sobre reciclagem com seis registros de materiais coletados. Calcule total, média por coleta, quantidade de registros que alcançaram a meta e classifique a campanha como **Excelente resultado**, **Bom resultado** ou **Vamos ampliar**. Inclua orientações sobre separação de materiais.

### Ideia 18 - Progresso em um curso on-line

**Responsáveis:** Marcus Vinicius e Nivaldo Junior.

Crie uma página para acompanhar o percentual ou os pontos obtidos em seis módulos. Calcule total, média, módulos concluídos segundo uma nota mínima e classifique a trajetória como **Concluída com destaque**, **Em progresso** ou **Precisa revisar**.

### Ideia 19 - Guia de segurança digital

**Responsáveis:** a definir.

Produza um site com orientações de segurança digital e seis pontuações fictícias relacionadas a boas práticas. O JavaScript deve calcular total, média, quantidade de práticas que atingiram um nível seguro e classificar o resultado como **Proteção forte**, **Proteção intermediária** ou **Proteção básica**.

### Ideia 20 - Agenda de eventos do campus

**Responsáveis:** João Gabriel e Daniel.

Crie um site para divulgar seis eventos e use no JavaScript suas durações ou quantidades previstas de participantes. Calcule total, média, quantidade de eventos acima de uma referência e classifique a programação como **Intensa**, **Equilibrada** ou **Compacta**.

### Ideia 21 - Cuidados com animais de estimação

**Responsáveis:** a definir.

Monte uma página educativa sobre uma rotina fictícia de cuidados e seis durações ou pontuações de tarefas. Calcule total, média, tarefas que atingiram o tempo planejado e classifique a organização como **Rotina completa**, **Rotina parcial** ou **Rotina a organizar**. O site não deve substituir orientações de profissionais de saúde animal.
