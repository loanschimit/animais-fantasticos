export default function fetchBitcoin(url, target) {
  console.log("teste");
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
      // console.log(json.BRL.sell);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
