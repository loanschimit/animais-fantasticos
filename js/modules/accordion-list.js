export default function accordionList2() {
  const accordion = document.querySelectorAll("[data-anime='accordion'] dt");
  // eslint-disable-next-line quotes
  const ativado = "ativo";

  /* ↓ Pega o item identificado através do forEach() e adc ou rm a classe ao clicar ↓ */
  function activeAccordion() {
    this.classList.toggle(ativado);
    this.nextElementSibling.classList.toggle(ativado);
  }

  /* ↓ Condição que verifica se accordion existe ↓ */
  if (accordion.length) {
    /* ↓ Adiciona class em accordion e no primeiro depois dele(dd), serão o padrão aberto ↓ */
    accordion[0].classList.add(ativado);
    accordion[0].nextElementSibling.classList.add(ativado);

    /* ↓ Cria um loop de click, selecionando 1 item dentro de accordion ↓ */
    accordion.forEach((item) => {
      // eslint-disable-next-line quotes
      item.addEventListener("click", activeAccordion);
    });
  }
}
