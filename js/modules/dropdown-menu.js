/* eslint-disable quotes */
import removeActive from "./outside-click.js";

export default class InitDropDownMenu {
  constructor(dropdownMenus, classe, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.classe = classe;
    // bind para this
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    // condição padrão de events
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
  }

  // ativa o dropdown menu e adiciona a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault(); // previne o padrão
    event.currentTarget.classList.add(this.classe);
    // 6) Remove a classe  de this através callback
    removeActive(event.currentTarget, this.events, () => {
      event.target.classList.remove(this.classe);
    });
  }

  // adiciona os eventos ao dropdownmenu
  addEventDropDownMenu() {
    // 1) Adiciona o loop de click + touch
    this.dropdownMenus.forEach((item) => {
      ["touchstart", "click"].forEach((userEvent) => {
        // forEach com array de eventos
        item.addEventListener(userEvent, this.activeDropdownMenu); // add events coma array
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventDropDownMenu();
    }
    return this;
  }
}
