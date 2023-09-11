/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  //Open & Close Backpack lid
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  //Change backpack strap lengths
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  //change num of pockets on backpack.
  newPocketNum: function (newPocketNum) {
    if (typeof newPocketNum === "number") {
      this.pocketNum = newPocketNum;
      return `Pocket Num changed to ${newPocketNum}`;
    } else {
      return "NaN please enter a number!";
    }
  },
  //Change backpack color
  newBackPackColor: function (newColor) {
    if (typeof newColor === "string") {
      this.color = newColor;
      return `Backpack color changed to ${newColor}`;
    } else {
      return "Not a string please enter a string!";
    }
  },
};

console.log(backpack);
