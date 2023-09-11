/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

/**
 * challenge code I create
 */
//--------------------------------

//Step1
let arr = [
  "apple",
  "horse",
  "hammock",
  "ginger",
  "melons",
  "pennies",
  "piglets",
  "bags",
];

console.log("\nArray Length:", arr.length);

//Step2
let lastItem = arr.pop();
console.log("Last item in array removed", lastItem, "\n");

//Step3
arr.unshift(lastItem);
console.log("Array after unshift:", arr);

//Step4
arr.sort();
console.log("Array after sort:", arr);

//Step5
let target = arr.find((element) => element === "pennies");
console.log("Target:", target);

//Step6
function removeElement(targetIndex, array) {
  if (targetIndex === array.length - 1) {
    array.pop();
  } else if (targetIndex >= array.length) {
    console.log("Index out of bounds retry!");
    return;
  } else {
    for (let i = targetIndex; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.pop();
  }
  console.log("Array after remove", array);
}

removeElement(arr.indexOf(target), arr);
