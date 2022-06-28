/* eslint-disable quotes */
import removeActive from "./outside-click.js";

export default function initMenuMobile() {
  // (1) Seletores
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  // Evento de clique

  // (2) Adiciona a classe active

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    // (3) Remove a classe active através de callback
    removeActive(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
  // Condição de existencia

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
