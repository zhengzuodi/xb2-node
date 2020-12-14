class Car {
  engine;

  constructor(engine) {
    this.engine = engine;
    console.log('一辆崭新的汽车');
  }

  drive() {
    console.log('呜～～呜～～～');
  }
}

const c1 = new Car('V8');
const c2 = new Car('V12');
c1.drive()

class PickupTruck extends Car { }

const p1 = new PickupTruck('v9');

console.log(p1);