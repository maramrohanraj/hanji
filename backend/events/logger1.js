//* usinf inhetitqance 


const EventEmitter = require('events')

class Emitter  extends EventEmitter 
{
   log(){
    console.log("working on log");
    this.emit("done")
   }
}

module.exports=Emitter