// const isCool = isMyEmailValid || isMike; // || OR

// --------------------------------------
// TODO
// CLASSIC FIZZBUZZ PROBLEM
// write a program that prints the numbers from 1 to 100 such that:
// (hint: use a for loop and some if/else conditions)

// If the number is a multiple of 3, you need to print "Fizz" instead of that number.
// If the number is a multiple of 5, you need to print "Buzz" instead of that number.
// If the number is a multiple of both 3 and 5, you need to print "FizzBuzz" instead of that number.

// write a program that prints the numbers from 1 to 100

// for (let index = 1; index < 101; index++) {
//   // explanatyory variable
//   const isDivisibleBy5 = index % 5 === 0;
//   const isDivisibleBy3 = index % 3 === 0;
//   const isDivisibleBy15 = index % 15 === 0;

//   if (isDivisibleBy15) {
//     console.log("FizzBuzz");
//   } else if (isDivisibleBy3) {
//     console.log("Fizz");
//   } else if (isDivisibleBy5) {
//     console.log("Buzz");
//   } else {
//     console.log(index);
//   }
// }

// TODO for loop
let numberList = [...Array(100)].map((item, index) => {
  let myValue = undefined;

  const isDivisibleBy5 = index % 5 === 0;
  const isDivisibleBy3 = index % 3 === 0;
  const isDivisibleBy15 = index % 15 === 0;

  if (isDivisibleBy15) {
    myValue = "FizzBuzz";
  } else if (isDivisibleBy3) {
    myValue = "Fizz";
  } else if (isDivisibleBy5) {
    myValue = "Buzz";
  } else {
    myValue = index;
  }

  return myValue;
});

console.log(numberList);
