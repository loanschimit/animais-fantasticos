export default function linksDeDentro() {
  /* ↓ seleciona os itens que começam com o href "#" ↓ */
  const linksInternos = document.querySelectorAll(".js a[href^='#'");

  function scrollToSection(event) {
    /* ↓ previne que vá direto através de um clique ↓ */
    event.preventDefault();
    /* ↓ pega o href do que foi clicado ↓ */
    const href = this.getAttribute("href");
    /* ↓ seleciona o item através do href que foi clicado ↓ */
    const section = document.querySelector(href);
    /* ↓ define a velocidade 'behavior' e onde vai parar 'block' ↓ */
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    /* ↓ outra maneira diferente do scrollIntoView ↓ */
    // forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }
  /* ↓ cria um evento de clique e uma função ↓ */
  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
