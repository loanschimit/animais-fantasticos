/* eslint-disable quotes */
// eslint-disable-next-line import/extensions
import removeActive from "./outside-click.js";

export default class InitMenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;
    this.openMenu = this.openMenu.bind(this);
    this.active = "active";
  }

  openMenu(event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);
    // (3) Remove a classe active através de callback
    removeActive(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }

  addEventosMenuMobile() {
    if (this.menuButton) {
      this.eventos.forEach((evento) => {
        this.menuButton.addEventListener(evento, this.openMenu);
      });
    }
  }

  init() {
    // console.log(this);
    if (this.menuButton && this.menuList) {
      this.addEventosMenuMobile();
    }
    return this;
  }
}
