// how do we grab the text typed into an input

// 1. grab the input
const myInput = document.querySelector(".passwordInput");

const myCheckboxInput = document.querySelector(
  ".toggle input[type='checkbox']"
);
console.log("💕😁 ~ myCheckboxInput", myCheckboxInput);

function getPasswordFromInput() {
  console.log("💕😁 ~ myInput", myInput.value);
}
