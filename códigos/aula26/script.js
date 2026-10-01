// 1. Funções.
function somarPontos(pontos) {
  let total = 0;

  for (let indice = 0; indice < pontos.length; indice += 1) {
    total += pontos[indice];
  }

  return total;
}

function calcularMedia(total, quantidade) {
  return total / quantidade;
}

function contarMissoesConcluidas(pontos, pontuacaoMinima) {
  let quantidadeConcluida = 0;

  for (let indice = 0; indice < pontos.length; indice += 1) {
    if (pontos[indice] >= pontuacaoMinima) {
      quantidadeConcluida += 1;
    }
  }

  return quantidadeConcluida;
}

function obterClassificacao(media, entregaRealizada) {
  if (media >= 80 && entregaRealizada) {
    return "Destaque";
  } else if (media >= 60) {
    return "Em progresso";
  } else {
    return "Precisa revisar";
  }
}

// 2. Dados iniciais.
const nomeEstudante = "Nome do estudante";
const pontosMissoes = [80, 90, 70, 100];
const entregaFinalRealizada = true;
const pontuacaoMinima = 70;

// 3. Chamadas das funções e armazenamento dos resultados.
const totalPontos = somarPontos(pontosMissoes);
const media = calcularMedia(totalPontos, pontosMissoes.length);
const missoesConcluidas = contarMissoesConcluidas(
  pontosMissoes,
  pontuacaoMinima
);
const classificacao = obterClassificacao(media, entregaFinalRealizada);
const situacaoEntrega = entregaFinalRealizada ? "Entregue" : "Pendente";

// 4. Apresentação do relatório no Console.
console.log("PAINEL DE MISSÕES DE PROGRAMAÇÃO");
console.log(`Estudante: ${nomeEstudante}`);

for (let indice = 0; indice < pontosMissoes.length; indice += 1) {
  console.log(`Missão ${indice + 1}: ${pontosMissoes[indice]} pontos`);
}

console.log(`Total de pontos: ${totalPontos}`);
console.log(`Média: ${media}`);
console.log(
  `Missões concluídas: ${missoesConcluidas} de ${pontosMissoes.length}`
);
console.log(`Entrega final: ${situacaoEntrega}`);
console.log(`Classificação: ${classificacao}`);
