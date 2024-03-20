const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const novoArray = [...array1, ...array2];
console.log(novoArray); // Saída: [1, 2, 3, 4, 5, 6]

function soma(a, b, c) {
  return a + b + c;
}

//em funções é como se cada elemento do array virasse uma variável
const numeros = [1, 2, 3];
console.log(soma(...numeros)); // Saída: 6

const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

const novoObjeto = { ...objeto1, ...objeto2 };
console.log(novoObjeto); // Saída: { a: 1, b: 2, c: 3, d: 4 }

const objetoBase = { a: 1, b: 2 };
const newObj = { ...objetoBase, c: 3 };
console.log(newObj); // Saída: { a: 1, b: 2, c: 3 }
