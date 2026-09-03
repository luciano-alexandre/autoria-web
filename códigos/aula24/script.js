// 1. Biblioteca simples de funções.
function calcularPercentual(parte, total) {
  if (total <= 0) {
    return 0;
  }

  return (parte / total) * 100;
}

function formatarPercentual(valor) {
  return `${valor.toFixed(0)}%`;
}

function obterDiagnostico(percentual, entregouAtividade) {
  if (percentual >= 80 && entregouAtividade) {
    return "Ótimo ritmo: avance para o próximo conteúdo.";
  }

  if (percentual >= 60) {
    return "Bom progresso: revise os tópicos pendentes.";
  }

  return "Atenção: reorganize o plano e retome a base.";
}

function obterSituacaoEntrega(entregou) {
  return entregou ? "Entregue" : "Pendente";
}

function calcularPontos(aulas, pontosPorAula) {
  return aulas * pontosPorAula;
}

function calcularAulasRestantes(total, concluidas) {
  const restantes = total - concluidas;
  return restantes > 0 ? restantes : 0;
}

function criarListaEmTexto(itens) {
  let texto = "";

  for (let indice = 0; indice < itens.length; indice += 1) {
    texto += `<li>${indice + 1}. ${itens[indice]}</li>`;
  }

  return texto;
}

function exibirTexto(seletor, texto) {
  document.querySelector(seletor).textContent = texto;
}

// 2. Dados do estudante.
const nomeEstudante = "Ana";
const totalAulas = 10;
const aulasConcluidas = 7;
const entregouExercicio = true;
const pontosPorAula = 10;
const topicos = ["Variáveis", "Operadores", "Condicionais", "Laços", "Funções"];

// 3. Processamento: chamadas das funções da biblioteca.
const percentual = calcularPercentual(aulasConcluidas, totalAulas);
const diagnostico = obterDiagnostico(percentual, entregouExercicio);
const textoEntrega = obterSituacaoEntrega(entregouExercicio);
const pontos = calcularPontos(aulasConcluidas, pontosPorAula);
const aulasRestantes = calcularAulasRestantes(totalAulas, aulasConcluidas);
const listaEmTexto = criarListaEmTexto(topicos);

// 4. Testes rápidos no Console.
console.log("Percentual 5 de 10:", calcularPercentual(5, 10));
console.log("Total inválido:", calcularPercentual(0, 0));
console.log("Diagnóstico 90%:", obterDiagnostico(90, true));
console.log("Diagnóstico 40%:", obterDiagnostico(40, false));

// 5. Apresentação dos resultados.
exibirTexto("#nome-estudante", nomeEstudante);
exibirTexto("#progresso", formatarPercentual(percentual));
exibirTexto("#pontos", `${pontos} pontos`);
exibirTexto("#diagnostico", diagnostico);
exibirTexto("#entrega", textoEntrega);
exibirTexto("#aulas-restantes", aulasRestantes);
document.querySelector("#lista-revisao").innerHTML = listaEmTexto;
