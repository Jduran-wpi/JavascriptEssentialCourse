/**
 * Challenge on creating a Book Class
 */

import Book from "./Book.js";

//Book constructor params: title, author, pages

let book1 = new Book("horror1", "Me", 100);
// let book2 = new Book("horror2", "him", 150);
// let book3 = new Book("horror3", "her", 200);
// let book4 = new Book("comedy1", "rich", 10);
// let book5 = new Book("comedy2", "mary", 40);

console.log(
  `Book1 is ${book1.getTitle()} by ${book1.getAuthor()} and costs $${book1.getPrice()}`
);
book1.setCurrentPage(1);
console.log(`Book1 current page ${book1.getCurrentPage()}`);
