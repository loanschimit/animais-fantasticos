// Efeito ao scroll de surgimento dos itens da pagina
import scrollWindow from "./modules/animacao-scroll.js";
// Clicando na imagem surge o texto correspondente.
import navtab from "./modules/nav-tab.js";
// Scroll suave ao clicar em um link interno
import ScrollSuave from "./modules/scroll-suave.js";
// Efeito ao clicar nas perguntas as respostas aparecem de forma suave
import accordionList from "./modules/accordion-list.js";
// Abre um modal com uma tela de login
import initModal from "./modules/modal.js";
// Cria uma caixa de texto ao passar o mouse por cima
import initTooltip from "./modules/tooltip.js";
// Menu down
import initDropDownMenu from "./modules/dropdown-menu.js";
// Menu Mobile
import initMenuMobile from "./modules/menu-mobile.js";
// Verifica a data e hora de funcionamento com a data atual
import initDateObject from "./modules/date-object.js";

import initAnimaisFetch from "../animais-fetch.js";

import initBitcoinFetch from "../bitcoin-fetch.js";

const scrollSuave = new ScrollSuave(".js a[href^='#']");
scrollSuave.init();

initBitcoinFetch();
scrollWindow();
navtab();
accordionList();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initDateObject();
initAnimaisFetch();

// Intervalos;
// import initSetTimeOut from "./modules/settimeout-setinterval.js";
//  initSetTimeOut();

// #####
// import initForm from "./modules/form.js";
// initForm();

// Verifica a data e hora de funcionamento com a data atual
// import initButtonCreator from "./modules/button-creator.js";
// initButtonCreator();
