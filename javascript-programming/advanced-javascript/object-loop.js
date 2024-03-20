//object.keys -> array com as propriedades do obj
const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2));
// ['speed','color']

//array com os valores das propriedades do obj
const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3));
// [300, 'yellow']

//object.entries -> propriedades e valores dos objetos em um array de arrays
const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4));
//[ ['speed', 400], ['color', 'magenta'] ]

//loop em objetos
//basicamente o key serve como chave igual um [0] [1] em um array
//então fazemos o loop na key = a chave do object.key
//e passamos por cada um do objeto
//exemplo: clothingItem[price]
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (const key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}
// price : 50
// color : beige
// material : cotton
// season : autumn
