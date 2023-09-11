/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

let page_head_heading = document.querySelector(".page-header__heading");

console.log(page_head_heading.classList);

page_head_heading.setAttribute("title", "Added_by_me");
console.log(page_head_heading.attributes);

page_head_heading.toggleAttribute("title");
console.log(page_head_heading.attributes);

let att = page_head_heading.style;
console.log(att);

page_head_heading.style.color = "red";