console.log("hello");

//  -- LEVEL 1 --

// variables

// "Declaring a variable"

// unchangeable variable
const unchangeable = "hello"; // we can read JS from right to left

// changeable variable
let reassignMe = "hello";
reassignMe = 2;

// ALWAYS use const (unchangeable) unless you MUST use let (changeable)

// data types

// "primitive"
// string, number, boolean
const string = "hi I'm a string of characters";
const number = 1;
const boolean = true;
// null, undefined (empty)
const myNull = null; // null - a human put "null" here
const myUndefined = undefined; // no one put anything here
let myAlsoUndefined; // no one put anything here

// "complex"
// array = list of things (usually of the same type)
const myArray = [1, 2, 3];
// object: a box full of boxes
const myObject = {
  // key: "value"
  myDog: "floopy",
  myCat: "fluffier",
};
// debugger;
// how do we get "floopy" - we use "dot notation"
const myDogInsideMyObject = myObject.myDog; // "floopy"

// examples at https://jsonplaceholder.typicode.com/ e.g. https://jsonplaceholder.typicode.com/posts
const arrayOfObjects = [
  {
    id: 123,
    name: "boop",
  },
  {
    id: 124,
    name: "bleeop",
  },
];

//  -- LEVEL 2 --

// loops - do something N number of times
for (
  let index = 0; // starting number
  index < arrayOfObjects.length; // "should continue" condition
  index++ // "do this after each loop"
) {
  // the code inside these {curly brackets} will run some number of times
  const element = arrayOfObjects[index];
  console.count("hey");
  console.log("item in arrayOfObjects:", element);
}

// conditions
// > < >= <=
// % -- "what's the remainder after dividing"
// ===
// ==
const two = 7 % 5; // remainder 2
const shouldLog = 3 > 2; // conditions read easily if they're "isSomething" or "hasSomething" or "shouldSomething" "will"
console.log(typeof two);

// if the value of "shouldLog" variable evaluates to true (or is true or "truthy"), then run this code block
if (shouldLog) {
  console.log("IT's TRUE!!");
  //   if shouldLog is false, check if "two > 5" is true, if so, run this code block
} else if (two > 5) {
  console.log("IT's FALSE!!");
  //   if none of the above were true run this code block
} else {
  console.log("IT's FALSE!!");
}

const myEmail = "heiwbge@iuysbei";
const MIN_EMAIL_CHARS = 8; // "CONSTANT_CASE"
const emailContainsAPeriod = myEmail.includes(".");
const isEmailLongEnough = myEmail.length > MIN_EMAIL_CHARS;
const isMyEmailValid = isEmailLongEnough && emailContainsAPeriod; // && "AND"

const isMike = true;

// --------------------------------------
// -- LEVEL 3 --

// functions

// function declaration
function countSomeAnimals(numSheep, animalName) {
  for (let index = 0; index < numSheep; index++) {
    console.log(animalName, " ", index + 1);
  }
}

// to run/execute a function, we "call" it
countSomeAnimals(10, "walrus");

function shout() {
  console.log("LET IT ALL OUT");
  return 123;
}
shout();

// functions can also "return" a value
const myReturnValue = shout();

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const threePlusFour = addTwoNumbers(3, 4);
const onehundred = addTwoNumbers(3, addTwoNumbers(100, -3));

// -- LEVEL 4 --

// DOM interactions
