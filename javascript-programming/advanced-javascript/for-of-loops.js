const car = {
  engine: true,
  steering: true,
  speed: "slow",
};
//usamos o Object.create para herdar do carro as propriedades
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("sportsCar object: ", sportsCar);

console.log("------- for-in is unrealiable --------");
for (prop in sportsCar) {
  console.log(prop);
}
//aqui ele vai dar um loop das propriedades todas e até no pai
console.log("Iterating over object and its prototype!");

console.log("------- for-of is reliable ------------");
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ": " + sportsCar[prop]);
}
console.log("Iterating over object OWN properties only");
//aqui ele vai dar um loop nas propriedades do objeto específico
//e não no seu prototipo (pai ou super)
