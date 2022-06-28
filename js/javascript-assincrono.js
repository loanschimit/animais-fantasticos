/* Síncrono =>
      Espera a tarefa acabar para continuar com a próxima
*/
/* Assíncrono =>
      Move para a próxima tarefa antes da anterior terminar. O trabalho será executado no 'fundo' e quando terminado, será colocado na fila (Task Queue)
*/
/* Exemplos Assíncronos =>
      setTimeout, Ajax, Promises, Fetch, Async
*/

setTimeout(() => {
  console.log('Time 1')
});
setTimeout(() => {
  console.log('Time 2')
},100);

console.log('Log 1')

setTimeout(() => {
  console.log('Time 3')
},50);

console.log('Log 2')

// Vantagens
/* Carregamento no Fundo =>
      Não trava o script. É possível utilizar o site enquanto o processamento é realizado no fundo.
*/

/* Função ao término =>
      Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.
*/

/* Requisições ao Servidor =>
      Não precisamos recarregar a página por completo à cada requisição feita ao serviço
*/