export default function removeActive(element, events, callback) {
  // 0.1) Cria constante responsavel pelo clique no html
  const html = document.documentElement;
  const outside = "data-outside";
  // 0.2) Condição, se o elemento não tiver o atributo outside ele adc e executa a função de remoção
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      // Só funciona com setTimeout, sem ele a fase de bubble identifica que está clicando no html
      // ao mesmo tempo do que no elemento, assim a ação de remover acontece instantaneamente
      setTimeout(() => {
        // eslint-disable-next-line no-use-before-define
        html.addEventListener(userEvent, removeOutside);
      }, 0);
    });
    element.setAttribute(outside, "");
  }
  function removeOutside(event) {
    // 0.3) Cria uma condição que verifica se o elemento não é o do clique padrão até aqui
    // não sendo removerá o outside e eventos de removeActive e filhos, por ultimo passa o callback
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, removeOutside);
      });
      callback();
    }
  }
}
