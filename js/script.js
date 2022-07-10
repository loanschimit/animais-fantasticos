/* eslint-disable import/extensions */
// Efeito ao scroll de surgimento dos itens da pagina
// Clicando na imagem surge o texto correspondente.
// Scroll suave ao clicar em um link interno
import ScrollSuave from "./modules/scroll-suave.js";
// Efeito ao clicar nas perguntas as respostas aparecem de forma suave
// Abre um modal com uma tela de login
// Cria uma caixa de texto ao passar o mouse por cima
// Menu down
// Menu Mobile
// Verifica a data e hora de funcionamento com a data atual

import Accordion from "./modules/accordion-list.js";

import TabNav from "./modules/nav-tab.js";

import InitModal from "./modules/modal.js";

import InitTooltip from "./modules/tooltip.js";

import fetchAnimais from "../animais-fetch.js";

import fetchBitcoin from "../bitcoin-fetch.js";

import ScrollAnima from "./modules/scroll-anima.js";

import InitDropDownMenu from "./modules/dropdown-menu.js";

import InitMenuMobile from "./modules/menu-mobile.js";

import InitDateObject from "./modules/date-object.js";

import SlideNav from "./modules/slide.js";

const scrollSuave = new ScrollSuave(".js a[href^='#']");

scrollSuave.init();

// accordionList();
// "[data-anime='accordion'] dt"
const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();
const tabNav = new TabNav(
  "[data-tab='menu'] li img",
  // eslint-disable-next-line comma-dangle
  "[data-tab='content'] section"
);
tabNav.init();
const initModal = new InitModal(
  "a[data-modal='abrir']",
  ".fechar",
  // eslint-disable-next-line comma-dangle
  "[class='modal-container']"
);
initModal.init();

const initTooltip = new InitTooltip("[data-tooltip]");
initTooltip.init();

const scrollAnima = new ScrollAnima(
  "[data-tab='scroll']",
  window.innerHeight * 0.6,
  "ativo"
);
scrollAnima.init();

const initDropDownMenu = new InitDropDownMenu("[data-dropdown]", "active", [
  "touchstart",
  "click",
]);
initDropDownMenu.init();

const initMenuMobile = new InitMenuMobile(
  "[data-menu='button']",
  "[data-menu='list']",
  ["click", "touchstart"]
);
initMenuMobile.init();

const initDateObject = new InitDateObject("[data-semana]", "aberto");
initDateObject.init();

fetchAnimais("./arquivo.json", ".numeros-grid");
fetchBitcoin("https://www.blockchain.com/ticker", ".btc-preco");

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
// slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");
