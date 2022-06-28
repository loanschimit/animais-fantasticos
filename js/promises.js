/* Promise =>
      É uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento  for ativado.
*/
const promessa = new Promise((resolve, reject) => {
  let condicao = { nome: "Loan", idade: 29 };
  if (condicao) {
    setTimeout(() => {
      resolve(condicao);
    }, 1000);
  } else {
    reject(Error("ATENÇÃO! Ocorreu um erro"));
  }
});
// console.log(promessa);

const retorno = promessa
  .then((item) => {
    item.profissao = "Designer";
    return item;
  })
  .then((item) => {
    // console.log(item.idade);
    // console.log(item);
  });

// console.log(retorno);
const promessa2 = new Promise((resolve, reject) => {
  resolve("Etapa 1");
});

promessa2
  .then((item) => {
    // console.log(item);
    return "Etapa 2";
  })
  .then((item) => {
    // console.log(item);
    return "Etapa 3";
  })
  .then((r) => r + 4)
  .then((r) => {
    // console.log(r);
  });

/* catch()
       O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada
  */
const promessa3 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto");
  } else {
    reject(Error("Um erro ocorreu"));
  }
});
/*Essa função mostra o reject caso tenha sido rejeitada */
// promessa3
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });
/*Essa função faz o mesmo da anterior mas sem o 'catch' */
promessa3.then(
  (item) => {
    // console.log(item);
  },
  (reject) => {
    // console.log(reject);
  }
);
/* finally()
       Executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.
  */
const promessa4 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject("Um erro ocorreu.");
  }
});
promessa4
  .then(
    (item) => {
      // console.log(item)
    },
    (reject) => {
      // console.log(reject)
    }
  )
  .finally(() => {
    // console.log('Acabou')
  });
/* Promisse.all()
     Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A resposta é uma array com as respostas de cada promise.
*/
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Efetuado");
  }, 1500);
});
const tudoCarregado = Promise.all([login, dados]);
// console.log(tudoCarregado)
tudoCarregado.then((item) => {
  // console.log(item)
});
/* Promise.race()
     Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá resposta da primeira resolvida.
*/
const logar = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuario Logado");
  }, 1000);
});
const cadastrar = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Cadastro Efetuado");
  }, 1500);
});
const carregouPrimeiro = Promise.race([logar, cadastrar]);
console.log(carregouPrimeiro);

carregouPrimeiro.then((item) => {
  console.log(item);
});
