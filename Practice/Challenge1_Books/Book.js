/**
 *
 * Book Class
 *
 */

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = 0;
    this.price = 1;
  }

  //getter methods
  getAuthor() {
    let auth = this.author;
    return auth;
  }
  getTitle() {
    let title = this.title;
    return title;
  }
  getCurrentPage() {
    let page = this.currentPage;
    return page;
  }
  getPrice() {
    let price = this.price;
    return price;
  }

  //setter methods
  setCurrentPage(pageNum) {
    if (typeof pageNum === "number") {
      this.currentPage = pageNum;
      console.log(`Current Page changed to ${this.currentPage}`);
    } else {
      console.log("Enter a number!");
    }
  }
  setBookPrice(price) {
    if (typeof price === "number") {
      this.price = price;
      console.log(`Current book price changed to ${this.price}`);
    } else {
      console.log("Enter a number!");
    }
  }
}

export default Book;
