// -- LEVEL 5 --

// fetching data
// HOW TO FETCH DATA https://jsonplaceholder.typicode.com/

fetch("https://jsasdaonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todosArray) => {
    // ! by the time this code runs, the rest of the code (lines 13 and below) have already run
    console.log(todosArray);
  })
  .catch((err) => {
    console.warn(err);
  });

const myDataArray = [];

// -- LEVEL 6 --

// display the data we fetched
// TODO with the fetched array, for each item in the array, put one Box inside myDataDiv

// grab dataDisplay div
const myDataDiv = document.querySelector(".dataDisplay");

// put a box in it
myDataDiv.innerHTML = myDataDiv.innerHTML + Box();

function Box() {
  return `
    <div>
      <button>1</button>
      <button>2</button>
    </div>
  `;
}
