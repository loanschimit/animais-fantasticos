export default function navtab() {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li img");
  const tabcontent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    /* ↓ caminho do dataset(show-down ou show-right) ↓ */
    const direcao = tabcontent[index].dataset.anime;
    /* ↓ remove a classe determinada de todos os itens ↓ */
    tabcontent.forEach((section) => {
      section.classList.remove("ativo", direcao);
    });
    /* ↓ adiciona as classes determinadas ao item clicado ↓ */
    tabcontent[index].classList.add("ativo", direcao);
  }
  /* ↓ verifica se ambos existem ↓ */
  if (tabmenu.length && tabcontent.length) {
    /* ↓ adiciona a classe ao item para ser o padrão ↓ */
    tabcontent[0].classList.add("ativo");

    /* ↓ seleciona o item da foto que for clicada e transfere o index ↓ */
    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
