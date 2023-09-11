/**
 * Practice: Functions
 *
 *
 */
let main = document.querySelector("body main");
console.log(main);

//Function Declaration
function basic() {
  let element = document.querySelector("body main");
  element.innerText = `Hoona`;
  console.log(element);
}
basic();

//Function Expression
const exp = function () {
  let element = document.querySelector("body main");
  element.innerText = `Hoola`;
  console.log(element);
};
exp();

//Arrow function
const arrow = () => {
  let element = document.querySelector("body main");
  element.innerText = `Hooya`;
  console.log(element);
};

arrow();
