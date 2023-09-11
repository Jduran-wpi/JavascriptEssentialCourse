/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu.
 * - A tip: Use either display flex or display grid to create the horizontal menu.
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
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

//-----------------------------------
//challenge stuff

//Nav menu top parent element
const newNav = document.createElement("nav");
newNav.classList.add("page-nav-menu");
newNav.style.display = "grid";
newNav.style.placeItems = "center";

//unordered list element to hold nav menu items
const navList = document.createElement("ul");
//styling
navList.style.listStyle = "none"; // removes bullets before text
navList.style.display = "inline-flex";
navList.style.flexDirection = "row";
navList.style.padding = "10px";
navList.style.border = "solid";
navList.style.borderRadius = "5px";

//insert list into nav menu element
newNav.append(navList);

let arr = ["Home", "About", "Here", "There", "Extra"];

//for loop to create list items
for (let i = 0; i < arr.length; i++) {
  let navItem = document.createElement("li");
  navItem.classList.add("page-nav-menu", "item" + (i + 1));
  navItem.style.padding = "10px";
  navItem.style.margin = "5px";
  navItem.style.border = "solid";
  navItem.style.borderRadius = "5px";
  navItem.style.backgroundColor = "black";

  let navAnch = document.createElement("a");
  navAnch.setAttribute("href", "#");
  navAnch.style.textDecoration = "none"; //removes underline

  //set inner link anchor element text to element from array.
  navAnch.innerText = arr[i];

  //insert anchor to list item
  navItem.append(navAnch);
  //add list item to list
  navList.append(navItem);
}

const header = document.querySelector("header");

header.append(newNav);
