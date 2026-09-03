// 1. Dados usados pelo painel.
const nomeEstudante = "Ana";
const totalAulas = 10;
const aulasConcluidas = 7;
const entregouExercicio = true;
const topicos = ["Variáveis", "Operadores", "Condicionais", "Laços"];

// 2. Cálculo do progresso.
const percentual = (aulasConcluidas / totalAulas) * 100;

// 3. Decisão com duas possibilidades.
let situacao;

if (percentual >= 70) {
  situacao = "Em dia";
} else {
  situacao = "Precisa revisar";
}

// 4. Decisão com três faixas e uma condição composta.
let diagnostico;

if (percentual >= 80 && entregouExercicio) {
  diagnostico = "Ótimo ritmo: avance para o próximo conteúdo.";
} else if (percentual >= 60) {
  diagnostico = "Bom progresso: revise os tópicos pendentes.";
} else {
  diagnostico = "Atenção: reorganize o plano e retome a base.";
}

// 5. Decisão simples com operador ternário.
const textoEntrega = entregouExercicio ? "Entregue" : "Pendente";

// 6. Repetição para produzir os itens da lista.
let textoRevisao = "";

for (let indice = 0; indice < topicos.length; indice += 1) {
  textoRevisao += `<li>${indice + 1}. ${topicos[indice]}</li>`;
}

// 7. Exemplo de while acompanhado pelo Console.
let semana = 1;

while (semana <= 3) {
  console.log(`Semana ${semana}: revisar JavaScript.`);
  semana += 1;
}

// 8. Saídas para teste e acompanhamento.
console.log("Percentual:", percentual);
console.log("Situação:", situacao);
console.log("Diagnóstico:", diagnostico);
console.log("Tópicos:", topicos.length);

// 9. Apresentação dos resultados na página.
document.querySelector("#nome-estudante").textContent = nomeEstudante;
document.querySelector("#progresso").textContent = `${percentual}%`;
document.querySelector("#situacao").textContent = situacao;
document.querySelector("#diagnostico").textContent = diagnostico;
document.querySelector("#entrega").textContent = textoEntrega;
document.querySelector("#lista-revisao").innerHTML = textoRevisao;

if (situacao === "Em dia") {
  document.querySelector("#situacao").classList.add("sucesso");
}
