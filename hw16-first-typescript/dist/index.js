"use strict";
//------------------ Nr.1 -------------------
function greetUser(name) {
    console.log(`Hi, ${name}!`);
}
console.log("1.)");
greetUser("Alissa");
console.log("");
function printPersonInfo(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}
const person = {
    name: "Alexander",
    age: 30,
    city: "Berlin",
};
console.log("2.)");
printPersonInfo(person);
console.log("");
//------------------ Nr.3 -------------------
function squareNumber(num) {
    return num * num;
}
console.log("Nr.3)");
console.log(squareNumber(5));
console.log("");
//------------------ Nr.4 -------------------
function isEven(num) {
    return num % 2 === 0;
}
console.log("Nr.4)");
console.log(isEven(4));
console.log(isEven(7));
console.log("");
function printStudentInfo(student) {
    console.log(`Student: ${student.name}, Grade: ${student.grade}`);
}
const student = {
    name: "Malina",
    grade: 95,
};
console.log("Nr.5");
printStudentInfo(student);
console.log("");
//------------------ Nr.6 -------------------
function logMessage(message) {
    console.log(message);
}
console.log("Nr.6");
logMessage("Here ends my homework.");
console.log("");
