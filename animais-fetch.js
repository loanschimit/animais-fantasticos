// Mostra os numeros com animação
import initNumeros from "./js/modules/numeros.js";

export default function initAnimaisFetch() {
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
      initNumeros();
    } catch (erro) {
      // eslint-disable-next-line no-console
      console.log(erro);
    }
  }

  fetchAnimais("./arquivo.json");
}
