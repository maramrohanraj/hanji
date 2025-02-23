// const http = require('http');
// const fs = require('fs')
// http.createServer((req,res) => {
//     let data = fs.readFileSync('./products.json');
//     res.setHeader("Content-Type",'application/json')   // video/mpv4, audio/mp3, image/gif, application/js
//     res.end(data);
// }).listen(8080,()=>{
//     console.log("Server started");
// })



const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
    if (req.url == '/api/products.json') {
        let data = fs.readFileSync('./products.json');
        res.setHeader("Content-Type", 'application/json')   // video/mpv4, audio/mp3, image/gif, application/js, text/plain
        res.setHeader('Access-Control-Allow-Origin', '*') // we can access it is it is *
        res.statusCode = 202;
        res.statusMessage = "data served"
        res.end(data);
    }
    else {
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Data not found</h1>");
    }
}).listen(8080, () => {
    console.log("Server started");
})










// const http = require('http');
// const fs = require('fs')
// http.createServer((req, res) => {
//     if (req.url == '/.mp4') {
//         let data = fs.readFileSync('./demo.mp4');
//         res.setHeader("Content-Type", 'video/mp4')   // video/mpv4, audio/mp3, image/gif, application/js, text/plain
//         res.setHeader('Access-Control-Allow-Origin', '*') // we can access it is it is *
//         res.statusCode = 202;
//         res.statusMessage = "data served"
//         res.end(data);
//     }
//     else {
//         res.setHeader("Content-Type", "text/html")
//         res.write("<h1>Data not found</h1>");
//     }
// }).listen(8080, () => {
//     console.log("Server started");
// })


















// const http = require('http');
// const fs = require('fs');

// const imageArray = {
//     '/0': './images/picture1.jpg',
//     '/1': './images/picture2.jpg',
// };

// http.createServer((req,res) => {
//     const imagePath = imageArray[req.url];
//     let flag=0;
//     if(imagePath){
//         flag=1;
//     }
//     if(flag==1){
//         fs.readFile(imagePath,(err,data) => {
//             if (err) throw err;
//             else {
//                 res.setHeader('Content-Type', 'image/jpg');
//                 res.end(data);
//             }
//         });
//     }
//     else {
//         console.log("Data Not found");
//     }
// }).listen(8080, () => {
//     console.log("Server created");
// });