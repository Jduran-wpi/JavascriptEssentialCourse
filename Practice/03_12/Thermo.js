/*
 *Thermo class
 */

import Lid from "./Lid.js";

class Thermo {
  //define params
  constructor(brand, color, height_inches, radius_inches, volume_oz, lidColor) {
    // Define properties:
    this.brand = brand;
    this.color = color;
    this.height_inches = height_inches;
    this.radius_inches = radius_inches;
    this.volume_oz = volume_oz;
    this.lid = new Lid(lidColor);
    this.lidOn = true;
  }
  //take lid on/off
  toggleLid() {
    this.lidOn = !this.lidOn;
    if (this.lidOn === false) {
      console.log("Lid removed.");
    } else {
      console.log("Lid put on.");
    }
  }
}

export default Thermo;
