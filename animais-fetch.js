// Mostra os numeros com animação
// eslint-disable-next-line import/extensions
import AnimaNumeros from "./js/modules/numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // cria div contendo informações das especies animais e total animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  // anima os numeros de cada animal
  function animaAnimaisNummeros() {
    const animaNumeros = new AnimaNumeros(
      "[data-numero]",
      ".numeros",
      // eslint-disable-next-line comma-dangle
      "ativo"
    );
    animaNumeros.init();
  }
  // puxa animais através do url mencionado(atual é ./arquivo.json) e da os valores do fetch na div
  async function criarAnimais() {
    try {
      // ↑ async é uma função assincrona.
      // ↓ await é o que deve ser esperado
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => preencherAnimais(animal));
      // Inicia números só apois o fetch()
      animaAnimaisNummeros();
    } catch (erro) {
      // eslint-disable-next-line no-console
      console.log(erro);
    }
  }
  return criarAnimais();
}
