//------------------ Nr.1 --------------------//
abstract class Animal{
  abstract makeSound(): string
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string{
    return "Meow"
  }
}

const animals: Animal[] = [new Dog(), new Cat(), new Cat(), new Dog(), new Cat()];

animals.forEach(animal =>{
  console.log(animal.makeSound());
})

//------------------ Nr.2 --------------------//

abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(name: string, radius: number, color: string) {
    super(name);
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(name: string, width: number, height: number, color: string) {
    super(name);
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const shapes: ColoredShape[] = [
  new ColoredCircle("Circle1", 5, "red"),
  new ColoredRectangle("Rectangle1", 4, 6, "blue"),
  new ColoredCircle("Circle2", 3, "green")
];

shapes.forEach(shape => {
  console.log(`${shape.name}: Area = ${shape.getArea().toFixed(2)}, Color = ${shape.color}`);
});

//------------------ Nr.3 --------------------//


abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing machine is now ON.");
  }

  turnOff(): void {
    console.log("Washing machine is now OFF.");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is now ON.");
  }

  turnOff(): void {
    console.log("Refrigerator is now OFF.");
  }
}

const appliances: Appliance[] = [
  new WashingMachine(),
  new Refrigerator(),
];

appliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});

//------------------ Nr.4 --------------------//

abstract class Account {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Savings Account: Deposited ${amount}. Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Savings Account: Insufficient funds.");
    } else {
      this.balance -= amount;
      console.log(`Savings Account: Withdrew ${amount}. Balance: ${this.balance}`);
    }
  }
}

class CheckingAccount extends Account {
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Checking Account: Deposited ${amount}. Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Checking Account: Insufficient funds.");
    } else {
      this.balance -= amount;
      console.log(`Checking Account: Withdrew ${amount}. Balance: ${this.balance}`);
    }
  }
}

// Test
const savings = new SavingsAccount(100);
savings.deposit(50);
savings.withdraw(70);

const checking = new CheckingAccount(200);
checking.deposit(100);
checking.withdraw(150);
checking.withdraw(200);  

//------------------ Nr.5 --------------------//


abstract class Media {
  abstract play(): void;
}

class MyAudio extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const mediaArray: Media[] = [
  new MyAudio(),
  new Video(),
  new MyAudio(),
];

mediaArray.forEach(media => media.play());
