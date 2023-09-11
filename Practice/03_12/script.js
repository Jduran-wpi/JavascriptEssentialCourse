/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Thermo from "./Thermo.js";

const thermo = new Thermo("Yeti", "yellow", 10, 3, 18, "clear");

console.log(`My thermo:`, thermo);

thermo.toggleLid();
thermo.toggleLid();

thermo.lid.closeLatch();
thermo.lid.openLatch();

thermo.lid.insertStraw();
thermo.lid.removeStraw();
