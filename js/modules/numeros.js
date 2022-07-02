export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
    // bind(this) do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com numero em seu texto e incrementa ele até o valor total
  static incrementarNumero(numero) {
    let start = 0;
    const total = +numero.innerHTML;
    const incremento = Math.floor(total / 100);
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        clearInterval(timer);
        numero.innerText = total;
      }
    }, 100 * Math.random());
  }

  // Ativa incrementar número para cada número escolhido do dom
  animaNumeros() {
    this.numeros.forEach((item) => this.constructor.incrementarNumero(item));
  }

  // Ocorre quando a mutação ocorrer, disconecita e anima os numeros
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar quando a classe ativo é adicionada ao target
  addObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass) {
      this.addObserver();
    }
    return this;
  }
}
