export default class ScrollAnima {
  /* ↓ selecionou o objeto ↓ */
  constructor(sections, windowDistancia, active) {
    this.sections = document.querySelectorAll(sections);
    /* ↓ calculo para pre-determinar um posicionamento ↓ */
    this.windowDistancia = windowDistancia;
    this.active = active;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    /* ↓ seleciona o item dentro do objeto e determina quando deve ocorrer a ação ao scroll ↓ */
    this.sections.forEach((section) => {
      // eslint-disable-next-line operator-linebreak
      const sectionTop =
        section.getBoundingClientRect().top - this.windowDistancia;
      /* ↓ determina o que deve ocorrer atraves de uma condição ↓ */
      if (sectionTop < 0) {
        section.classList.add(this.active);
      } else if (section.classList.contains(this.active)) {
        section.classList.remove(this.active);
      }
    });
  }
  /* ↓ verifica se sections existe ↓ */

  init() {
    if (this.sections.length) {
      this.animaScroll();
      /* ↓ ativa função ↓ */
      /* ↓ determina que a função de cima ocorrerá atraves de scroll ↓ */
      window.addEventListener("scroll", this.animaScroll);
    }
  }
}
