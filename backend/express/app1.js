// const express = require('express');
// const app = express();
// app.listen(8080);

// // express is top down approach we want  to write in order 

// app.get('/', (req, res) => {  // first paramter end point
//     // res.setHeader()
//     //  res.write("Sendind data")     // We will send data to client
//     //  res.end();

//     res.send('<h1>hi</h1>')  // the above three lines code in single function
// })


// app.get('/contact', (req, res) => {
//     res.send('<h1>Contact</h1>')
// })


// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

// app.get('*', (req, res) => {  // "*" for handling error casses
//     res.send('<h1>404 Error not Found</h1>')
// })













// const express = require('express');
// const fs = require('fs')
// const app = express();
// app.listen(8080);

// // express is top down approach we want  to write in order 

// app.get('/', (req, res) => {  // first paramter end point
//     // res.setHeader()
//     //  res.write("Sendind data")     // We will send data to client
//     //  res.end();
//     // const data = fs.readFileSync('./app.js','utf-8')
//     res.sendFile('./index.html', { root: './' })  // one is file path and another is root 
// })




// app.get('/style.css', (req, res) => {
//     res.sendFile('./style.css', { root: './' });
// })


// app.get('*', (req, res) => {  // "*" for handling error casses
//     res.send('<h1>404 Error not Found</h1>')
// })










const express = require('express');
const fs = require('fs')
const app = express();
app.listen(8080);



app.use(express.static('./')); // we will use middleware using use() function if request came then first middleware execute and then routing function will execute

// express is top down approach we want  to write in order 

// app.get('/', (req, res) => {  // first paramter end point
//     // res.setHeader()
//     //  res.write("Sendind data")     // We will send data to client
//     //  res.end();
//     // const data = fs.readFileSync('./app.js','utf-8')
//     res.sendFile('./index.html', { root: './' })  // one is file path and another is root 
// })


// app.get('/style.css', (req, res) => {
//     res.sendFile('./style.css', { root: './' });
// })


// app.get('/picture1.jpg', (req, res) => {
//     res.sendFile('./images/picture1.jpg', { root: './' });
// })



// // we use express.static() which handles tatic routers and not changes dynamicallu





app.get('*', (req, res) => {  // "*" for handling error casses
    res.send('<h1>404 Error not Found</h1>')
})
