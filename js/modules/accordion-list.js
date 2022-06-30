export default class Accordion {
  constructor(list) {
    this.accordion = document.querySelectorAll(list);
    this.ativado = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.ativado);
    item.nextElementSibling.classList.toggle(this.ativado);
  }
  // adiciona os eventos ao accordion

  addAccordionEvent() {
    this.accordion.forEach((item) => {
      // eslint-disable-next-line quotes
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordion.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordion[0]);
      this.addAccordionEvent();
    }
  }
}
