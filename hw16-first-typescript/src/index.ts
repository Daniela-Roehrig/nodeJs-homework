//------------------ Nr.1 -------------------
function greetUser(name: string): void {
  console.log(`Hi, ${name}!`);
}

greetUser("Alissa");


//------------------ Nr.2 -------------------
interface Person {
  name: string;
  age: number;
  city: string;
};

function printPersonInfo(person: Person): void {
  console.log(
    `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
  );
};

const person: Person = {
  name: "Alexander",
  age: 30,
  city: "Berlin",
};

printPersonInfo(person);


//------------------ Nr.3 -------------------
function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(5));


//------------------ Nr.4 -------------------
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));


//------------------ Nr.5 -------------------
interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Student: ${student.name}, Grade: ${student.grade}`);
}

const student: Student = {
  name: "Malina",
  grade: 98,
};

printStudentInfo(student);

//------------------ Nr.6 -------------------
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Here ends my homework.");

