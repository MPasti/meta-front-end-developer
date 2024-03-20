// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (prop of dairy) {
    console.log(prop);
  }
}
console.log("The dairy log: ");
logDairy();

// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (key of Object.keys(bird)) {
    console.log(`${key}: ${bird[key]}`);
  }
}

console.log("--------------------------------");
console.log("The bird Can?");
birdCan();

// Task 3
function animalCan() {
  for (prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}
console.log("--------------------------------");
console.log("The animal bird prototype Can?");
animalCan();
