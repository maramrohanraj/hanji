//* asynchronous code is non blocking code it will execute the next coe=des


const express = require('express');
const app = express();
app.get("/", (req, res) => {   //* if we create end point susing routing uring url
    // res.send("Hello user"); //both res.write() and res.end(); it willsenda nd trminate //* by default hhtml
    // res.sendFile('./index.html', { root: __dirname })  //* we will send any files
    res.json('./products.json', { root: __dirname })
})
app.listen(5050, () => {
    console.log("server started");
})