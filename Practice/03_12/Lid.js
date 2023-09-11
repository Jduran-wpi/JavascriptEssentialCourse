/**
 * Lid Class
 */

class Lid {
  constructor(color) {
    this.color = color;
    this.latchOpen = false;
    this.strawIn = false; //is straw inserted into lid latch?
  }
  // Add methods like normal functions:

  /*
   * Close lid latch function can always open a closed lid latch
   * but if straw is inserted into latch, you cannot close it.
   */
  closeLatch() {
    if (this.strawIn === true) {
      console.log("Cannot Close Lid Latch Straw is inserted");
    } else if (this.latchOpen === false) {
      console.log("Latch is already closed.");
    } else {
      this.latchOpen = false;
      console.log("Lid Latch Closed");
    }
  }

  openLatch() {
    if (this.latchOpen === false) {
      this.latchOpen = true;
      console.log("Lid latch opened.");
    } else {
      console.log("Latch is already open");
    }
  }

  //Insert Straw into lid latch while only open
  insertStraw() {
    if (this.latchOpen === false) {
      console.log("Cannot insert straw while latch is closed");
    } else {
      this.strawIn = true;
      console.log("Straw Inserted");
    }
  }

  removeStraw() {
    if (this.strawIn === false) {
      console.log("There is no straw to remove.");
    } else {
      this.strawIn = false;
      console.log("Straw removed.");
    }
  }
}

export default Lid;
