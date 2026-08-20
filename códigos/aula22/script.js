// 1. Dados do painel: variáveis e tipos primitivos.
const nomeEstudante = "Ana"; // string
const totalAulas = 10; // number
let aulasConcluidas = 7; // number: pode mudar durante o curso
const entregouExercicio = true; // boolean
const proximaAula = "Condicionais e laços"; // string
const observacao = null; // ausência intencional de valor

// 2. Operadores aritméticos.
const percentual = (aulasConcluidas / totalAulas) * 100;
const pontosPorAula = 10;
const pontos = aulasConcluidas * pontosPorAula;
const aulasRestantes = totalAulas - aulasConcluidas;

// 3. Operadores de comparação e lógicos.
const atingiuMeta = percentual >= 70;
const estaEmDia = atingiuMeta && entregouExercicio;

// 4. Textos produzidos com template literals.
const textoProgresso = `${percentual}%`;
const textoAulas = `${aulasConcluidas} de ${totalAulas}`;
const textoPontos = `${pontos} pontos`;
const textoSituacao = estaEmDia ? "Em dia" : "Precisa revisar";

// 5. Saída no Console do navegador.
console.log("Nome:", nomeEstudante);
console.log("Tipo do nome:", typeof nomeEstudante);
console.log("Percentual:", percentual);
console.log("Tipo do percentual:", typeof percentual);
console.log("Está em dia?", estaEmDia);
console.log("Aulas restantes:", aulasRestantes);
console.log("Observação:", observacao);

// 6. Exibição dos resultados na página.
// A manipulação do DOM será estudada em detalhes nos próximos encontros.
document.querySelector("#nome-estudante").textContent = nomeEstudante;
document.querySelector("#progresso").textContent = textoProgresso;
document.querySelector("#situacao").textContent = textoSituacao;
document.querySelector("#aulas-concluidas").textContent = textoAulas;
document.querySelector("#pontos").textContent = textoPontos;
document.querySelector("#proxima-aula").textContent = proximaAula;

if (estaEmDia) {
  document.querySelector("#situacao").classList.add("sucesso");
}
