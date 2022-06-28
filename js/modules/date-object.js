/* eslint-disable quotes */
export default function initDateObject() {}
// Seletores
const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

const dataAgora = new Date(); // Data atual
const diaAgora = dataAgora.getDay(); // Dia atual
const horarioAgora = dataAgora.getHours(); // hora atual

// Verifica se o horario atual está de acordo com o horario de funcionamento
const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

// Verifica se o dia atual é um dia de funcionamento
const EstaAberto = diasSemana.indexOf(diaAgora) !== -1;

// Condição true, adiciona a classe que é responsavél pela mudançã no pseudo elemento informativo
if (EstaAberto && horarioAberto) {
  funcionamento.classList.add("aberto");
}
