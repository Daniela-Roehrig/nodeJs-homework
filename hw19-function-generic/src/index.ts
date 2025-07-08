//--------------- Nr.1 ----------------//

const sumEvenNumbers = (numbers: number[]): number =>
  numbers.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);

const arrNummber = sumEvenNumbers([1, 2, 3, 5, 6, 8, 9, 12]);
console.log(arrNummber);

//--------------- Nr.2 ----------------//

interface StringToBooleanFunction {
  (input: string): boolean;
}

const isEmptyString: StringToBooleanFunction = (input) => input.trim() === "";

console.log(isEmptyString(""));
console.log(isEmptyString("   "));
console.log(isEmptyString("hello"));

//--------------- Nr.3 ----------------//

type CompareStrings = (a: string, b: string) => boolean;

const areStringsEqual: CompareStrings = (a, b) => a === b;

console.log(areStringsEqual("hello", "hello"));
console.log(areStringsEqual("Hello", "hello"));

//--------------- Nr.4 ----------------//

function getLastElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

const numbers = [1, 2, 3];
const lastNumber = getLastElement(numbers); // 3

const strings = ["Alissa", "Swetlana", "Malina"];
const lastString = getLastElement(strings); // "c"

console.log(getLastElement(numbers));
console.log(getLastElement(strings));

//--------------- Nr.5 ----------------//

const makeTriple = <T>(a: T, b: T, c: T): T[] => {
  return [a, b, c];
};
const numberTriple = makeTriple(1, 2, 3); // number[]
console.log(numberTriple); // [1, 2, 3]

const stringTriple = makeTriple("a", "b", "c"); // string[]
console.log(stringTriple); // ['a', 'b', 'c']

const boolTriple = makeTriple(true, false, true); // boolean[]
console.log(boolTriple); // [true, false, true]
