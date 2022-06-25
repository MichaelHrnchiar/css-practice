// DOM Document Object Model
// kind of like the html + all the JS stuff inside it

// console.dir(myElement) to see the DOM representation
const myImg = document.querySelector("img");
const myBtn = document.querySelector("button.coolTrick");

// add an event listener

// add a click event listener on our button
myBtn.addEventListener("click", function (event) {
  //   myBtn.innerHTML = MyThing();
  myImg.classList.toggle("active");
});

// // React "Component" function
// function MyThing() {

//   return `
//     <div>
//       <button>1</button>
//       <button>2</button>
//     </div>
//   `;
// }
