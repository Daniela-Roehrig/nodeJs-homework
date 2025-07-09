//------------------ Nr.1 --------------------//

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void{
    console.log("The amimal makes a sound")
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string){
    super(name, species);
    this.breed = breed
  }

  override sound(): void {
    console.log("The dog barks")
  }
}

const theAnimal = new Animal('Che', "dog")
theAnimal.sound()

const theDog = new Dog("Blu", "dog", "German Shepherd")
theDog.sound()


//------------------ Nr.2 --------------------//

class Library {
  static totalBooks: number =0;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addBook():void{
    Library.totalBooks ++;

  }
}

const lib1 = new Library("Frontend");
const lib2 = new Library("Backend");
const lib3 = new Library("Fullstack")

lib1.addBook(); 
lib2.addBook(); 
lib1.addBook();
lib3.addBook();

console.log("Total books:", Library.totalBooks);


//------------------ Nr.3 --------------------//

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string){
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle{
  type: string;

  constructor(make: string, model: string, type: string){
    super(make, model)
    this.type = type
  }
}

const moto = new Motorcycle("Yamaha", "MT-07", "naked bike");
console.log(moto);
