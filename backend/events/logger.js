const EventEmitter = require('events');
const emitter = new EventEmitter();
function log(){
    console.log("in log")
    emitter.emit("done");
}

module.exports = {
    log,emitter
};