export default function initNumeros() {
  function animaNumeros() {
    // eslint-disable-next-line quotes
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((item) => {
      let start = 0;
      const total = +item.innerHTML;
      const incremento = Math.floor(total / 100);

      const timer = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start > total) {
          clearInterval(timer);
          item.innerText = total;
        }
      }, 50);
    });
  }
  let observer;

  function handleMutation(mutation) {
    // eslint-disable-next-line quotes
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  // eslint-disable-next-line quotes
  const observerTarget = document.querySelector(".numeros");

  observer.observe(observerTarget, { attributes: true });
}
