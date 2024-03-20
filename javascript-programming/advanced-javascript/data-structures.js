//Arrays
//arrays methods
// forEach
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

//pode receber funções que vão rodar em cada elemento do array
const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

//normalmente usamos um arrow function
veggies.forEach((veggie, index) => {
  console.log(`${index}. ${veggie}`);
});

//filter method
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  return num > 20; //[30,40,50]
});

//map method
//ele é usado para mapear acada item de uma lista, e trazer um novo array
//baseado no trabalho performado dentro da função que passamos como parametro para o map
let newArray = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
//newArray => [0,1,2,3,4,5]

//Objetos
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

//Trabalhando com Maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
//Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
bestBoxers.get(1);
// 'The Champion'

//Set
//É uma coleção de valores únicos e usamos o construtor de set
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
{
  "apple", "pear", "plum";
}

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
//1,2,3
