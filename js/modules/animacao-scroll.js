/* eslint-disable quotes */
export default function scrollWindow() {
  /* ↓ selecionou o objeto ↓ */
  const sections = document.querySelectorAll('[data-tab="scroll"]');
  /* ↓ calculo para pre-determinar um posicionamento ↓ */
  const windowMetade = window.innerHeight * 0.6;
  /* ↓ verifica se sections existe ↓ */

  function animaScroll() {
    /* ↓ seleciona o item dentro do objeto e determina quando deve ocorrer a ação ao scroll ↓ */
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      /* ↓ determina o que deve ocorrer atraves de uma condição ↓ */
      if (sectionTop < 0) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    /* ↓ ativa função ↓ */
    animaScroll();
    /* ↓ determina que a função de cima ocorrerá atraves de scroll ↓ */
    window.addEventListener("scroll", animaScroll);
  }
}
