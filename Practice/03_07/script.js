/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const thermo = {
    brand: 'Yeti',
    color: 'black',
    height_inches: 10,
    radius_inches: 2,
    volume_oz: 18,
    lidOn: false,
    lid:{
        color: 'clear',
        latchOpen: false,
        strawIn: false, //is straw inserted into lid latch?
        /*
        * Close lid latch function can always open a closed lid latch
        * but if straw is inserted into latch, you cannot close it.
        */
        closeLatch: function(){
            if(this.strawIn === true){
                console.log('Cannot Close Lid Latch Straw is inserted');
                
            }
            else{
                this.latchOpen = false;
                console.log('Lid Latch Closed');
                
            }
        },
        openLatch: function(){
            if(this.latchOpen === false){
                this.latchOpen = true;
            }
            else{
                console.log('Latch is already open');
            }
            
        },
        //Insert Straw into lid latch while only open
        insertStraw: function(){
            if(this.latchOpen === false){
                console.log('Cannot insert straw while latch is closed');
            }
            else{
                this.strawIn = true;
                console.log('Straw Inserted');
            }
        },
        removeStraw: function(){
            if(this.strawIn === false){
                console.log('There is no straw to remove.');
            }
            else{
                this.strawIn = false;
                console.log('Straw removed.');
            }
        }
    },
    //take lid on/off
    toggleLid: function(){
        this.lidOn = !this.lidOn;
        if(this.lidOn === false){
            console.log('Lid removed.')
        }
        else{
            console.log('Lid put on.')
        }
    },
};

console.log(`Thermo is a ${thermo.volume_oz}oz ${thermo.color} ${thermo.brand}!`);