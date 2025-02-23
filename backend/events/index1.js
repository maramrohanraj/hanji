const Emitter = require('./logger1')
const e = new Emitter();
e.on("done", (err) => {
    if(err) throw err;
    console.log("emitter called");
})
e.log();