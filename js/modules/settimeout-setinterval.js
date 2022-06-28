// export default function initSetTimeOut() {}
// // console.log("olá");

// function espera(texto) {
//   // console.log("Passou 0");
// }
// setTimeout(() => {
//   // console.log("testando");
// }, 1000);
// espera();

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     // console.log(i);
//   }, 1000 * i);
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", handleClick);
// function handleClick() {
//   setTimeout(() => {
//     console.log(this);
//     this.classList.add("active");
//   }, 1000);

//   let i = 0;
//   const MeuLoop = setInterval(() => {
//     console.log(i++);
//     if (i > 10) {
//       clearInterval(MeuLoop);
//     }
//   }, 1000);
// }
const body = document.documentElement;


function MudarClasse() {
  document.body.classList.toggle("active");
}
// setInterval(MudarClasse, 2000);

// setInterval(() => {
//   body.style.background = "#ff0000";
// }, 2000);
// setInterval(() => {
//   body.style.background = "blue";
// }, 4000);

const tempo = document.querySelector('#tempo')
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");

iniciar.addEventListener("click", playRelogio);
pausar.addEventListener("click", pausarRelogio);
pausar.addEventListener("dblclick", resetarRelogio);

let i = 0
let timer;

function playRelogio() {
  timer = setInterval(() => {
    tempo.innerHTML = i++
  }, 500);
  iniciar.setAttribute('disabled', '')
}
function pausarRelogio() {
  clearInterval(timer)
  iniciar.removeAttribute('disabled')

}
function resetarRelogio() {
tempo.innerHTML = 0
i = 0
}
