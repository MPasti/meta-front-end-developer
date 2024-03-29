// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class

class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  var worker1 = new Worker("bob", 21, 110, 0, 10);
  worker1.goToWork();
  return worker1;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager1 = new Worker("Alice", 30, 120, 100, 30);
  manager1.doSomethingFun();
  return manager1;
}
