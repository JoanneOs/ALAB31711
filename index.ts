// @ts-check
type VehicleStatus = 'started' | 'stopped';

class Vehicle {
    status: VehicleStatus = 'stopped';
    make: string;
    model: string;
    wheels: number;

    constructor(make: string, model: string, wheels: number) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    // ... rest of Vehicle class
}


class Vehicle {
  status = "stopped";

  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
      super(make, model, 4); // Changed from "four" to number
  }
}

class MotorCycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle): void {
  if (vehicle.status === 'started') { // Fixed 'running' to 'started'
      console.log("The vehicle is running.");
  } else {
      console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUppercase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.mdl);


/////adding NCycle class

class NCycle<T>{
  make:T|T[];
  model:T|T[];
  wheels: number;
  status:VehicleStatus='stopped';

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;


}

print(index: number = 0): void {
  if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
  } else if (Array.isArray(this.make) && Array.isArray(this.model)) {
      if (this.make[index] && this.model[index]) {
          console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
      } else {
          console.log('This NCycle was not created properly.');
      }
  } else {
      console.log('This NCycle was not created properly.');
  }
}

printAll(): void {
  if (!Array.isArray(this.make) || !Array.isArray(this.model)) {
      this.print();
      return;
  }

  const minLength = Math.min(this.make.length, this.model.length);
  for (let i = 0; i < minLength; i++) {
      console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
  }
  if (this.make.length !== this.model.length) {
      console.log('Warning: Make and model arrays have different lengths');
  }
}
}