/* eslint-disable quotes */
export default function initForm() {
  const contato = document.querySelector("#contato");
  // const texto = document.querySelector(".texto");

  const dados = {};
  function handleChanged(event) {
    // console.log([event.target.name]);
    dados[event.target.name] = event.target.value;
  }

  // function handleKeyUp(event) {
  //   const target = event.target;
  //   const verificTarget = event.target.checkValidity();
  //   texto.innerHTML = event.target.value;

  //   document.body.style.backgroundColor = event.target.value;
  //   document.body.style.backgroundColor = event.target.checked;

  //   if(event.target.checked){
  //     console.log(event.target.value)
  //   }

  //   if (!verificTarget) {
  //     target.classList.add("invalid");
  //     contato.nome.setCustomValidity("Esse campo é importante");
  //     target.nextElementSibling.innerHTML = target.validationMessage;
  //   }

  //   // console.log(event.target.value)
  //   // console.log(verificTarget)
  // }
  contato.addEventListener("change", handleChanged);

  /* Em casos de assistente de audio o 'keyup' não funcionará, o change pode ser uma boa opção */

  /* Opção de usar um evento semelhante é recomendado que utilize o 'new MutationObserver' */

  // contato.addEventListener('keyup', handleKeyUp)
  // console.log(document.forms[0].elements.nome);
  // console.log(contato);
}
