/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

//let lidStatus = everydayPack.lidOpen ? "Open" : "Closed"; // if true left side is assigned, if false right side.

const content = `
<main>
  <article>
    <h1>Everyday Backpack</h1>
    <ul>
      <li>Volume: ${everydayPack.volume}</li>
      <li>Color: ${everydayPack.color}</li>
      <li>Age: ${everydayPack.backpackAge()} Days</li>
      <li>Number of pockets: ${everydayPack.pocketNum}</li>
      <li>Left strap length: ${everydayPack.strapLength.left}</li>
      <li>Right strap length: ${everydayPack.strapLength.right}</li>
      <li>Lid status: ${everydayPack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </article>
</main>
`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
