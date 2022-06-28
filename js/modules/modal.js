/* eslint-disable quotes */
export default function initModal() {
  const loginBotao = document.querySelector('a[data-modal="abrir"]');
  const fecharBotao = document.querySelector(".fechar");
  const sectionLogin = document.querySelector('[class="modal-container"]');

  function toggleModal(event) {
    event.preventDefault();
    sectionLogin.classList.toggle("ativo");
  }

  function targetModal(event) {
    if (this === event.target) toggleModal(event);
  }
  loginBotao.addEventListener("click", toggleModal);
  fecharBotao.addEventListener("click", toggleModal);
  sectionLogin.addEventListener("click", targetModal);
}
