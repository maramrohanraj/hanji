// const events = require('events');
// const fs = require('fs');
// console.log(events);



const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();  //* creating objects dynamically in js


// emitter.emit() //* it will emit the messages like done
// emitter.on(); //* it will receive and perform actions on emitted mesages 




// emitter.emit('done'); //* if we write before it will not work because after creating on  it will come after 
emitter.on("done",() => {
    console.log("on called");
})

emitter.emit("done");

function testMessage(){
    console.log("func called");
    emitter.emit("done");
}
// testMessage();




















































// class Customer {
//     constructor(n) {
//         this.name = n
//     }
//     hii() {
//         console.log("HIII BROOO HOW ARE YOU ");
//     }
//     getName() {
//         console.log(this.name);
//         this.hii()
//     }
// }

// let customer01 = new Customer("ROHAN"); 
// let customer02 = new Customer("ROAN"); 


// customer02.getName();




// class guest extends Customer{

// }

// let newguest = new guest();
// newguest.hii();