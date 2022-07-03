// Mostra os numeros com animação
// eslint-disable-next-line import/extensions
import AnimaNumeros from "./js/modules/numeros.js";

export default function InitAnimaisFetch() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJson.forEach((element) => {
        const divAnimal = createAnimal(element);
        numerosGrid.appendChild(divAnimal);
      });
      // Inicia números só apois o fetch()
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        // eslint-disable-next-line comma-dangle
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      // eslint-disable-next-line no-console
      console.log(erro);
    }
  }

  fetchAnimais("./arquivo.json");
}
