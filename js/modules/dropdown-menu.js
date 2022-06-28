/* eslint-disable quotes */
import removeActive from "./outside-click.js";

export default function initDropDownMenu() {}
const dropdownMenus = document.querySelectorAll("[data-dropdown]");
function handleClick(event) {
  event.preventDefault(); // previne o padrão
  this.classList.add("active");
  // 6) Remove a classe  de this através callback
  removeActive(this, ["touchstart", "click"], () => {
    this.classList.remove("active");
  });
}

// 1) Adiciona o loop de click + touch
dropdownMenus.forEach((item) => {
  ["touchstart", "click"].forEach((userEvent) => {
    // forEach com array de eventos
    item.addEventListener(userEvent, handleClick); // add events coma array
  });
});

// 2) Adiciona a classe para estilizar
