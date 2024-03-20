const top7 = [
  "Coliseu",
  "Panteão",
  "Vaticano",
  "Pizza Venezia",
  "Trevi Fountain",
];

//a partir do rest operator é como se cada elemento pedido virasse uma variável nova
const [first, second, third, ...secondVisit] = top7;
// first => Coliseu
// second => Panteão
// third => vaticano
// second visit => ["Pizza Venezia", "Trevi Fountain"]

const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // Concatena os objetos
console.log(fruitsAndBerries); // mostra só 1
// ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar);
// {wings: 2, wheels: 4}

let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);
// como se fosse um .push

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
//String virando um array

const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };

car1.speed = 201;

console.log(car1.speed, car2.speed);
//201, 200

const meal = ["soup", "steak", "ice cream"];
let [starter] = meal;
console.log(starter);
//soup
