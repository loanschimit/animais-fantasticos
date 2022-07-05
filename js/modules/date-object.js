/* eslint-disable quotes */
export default class InitDateObject {
  constructor(funcionamento, active) {
    this.funcionamento = document.querySelector(funcionamento);
    this.active = active;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date(); // Data atual
    this.diaAgora = this.dataAgora.getDay(); // Dia atual
    this.horarioAgora = this.dataAgora.getUTCHours() - 3; // hora atual
  }

  estaAberto() {
    // eslint-disable-next-line operator-linebreak
    this.horarioAberto =
      // eslint-disable-next-line operator-linebreak
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    // Verifica se o dia atual é um dia de funcionamento
    this.EstaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
  }
  // Verifica se o horario atual está de acordo com o horario de funcionamento

  ativaAberto() {
    this.estaAberto();
    if (this.horarioAberto) {
      this.funcionamento.classList.add(this.active);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosAgora();
      this.dadosFuncionamento();
      this.ativaAberto();
    }
    return this;
  }
}
