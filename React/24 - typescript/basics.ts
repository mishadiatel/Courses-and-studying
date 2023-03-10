// Primitives: numbers, strings, boolean
// more complex types : arrays, objects
// Function types, parameters

// Promitives
let age: number;
age = 12;

let usrname: string = "";
usrname = "Max";

let isInstructor: boolean;
isInstructor = true;
// More complex
let hobbies: string[];
hobbies = ["sports", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Max",
  age: 31,
};
// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference

let course: string | number = "React  - The complete guide";
course = 12;

// Function & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');
