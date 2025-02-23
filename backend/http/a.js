// //* we will create a server using HTTP module 
// //* http is a core moudule which is provided by node js
// //* http.incomingmessage is an object to handle request response
// //* server.listen rake three parameters portno,localhost,callback


// const http = require('http');
// const server = http.createServer((req,res) => {
//     console.log(req);
//     res.write("Hello client"); //* it sends information to client we can send json data,html data  also 
//     res.end("this is using end "); //* we can write only text data we will use this when to stop response cycle
// });
// server.listen(8080,() => {
//     console.log("server started");
// })







// const http = require('http');
// const server = http.createServer((req,res) => {
//     console.log(req);
//     // res.setHeader("content-type","application/javascript")
//     res.setHeader("content-type","text/html")
//  res.write("<h1>this is the response from server</h1>")
//     res.write("<h1>Hello client</h1>"); 
//     res.write("hi");
//     res.end("this is using end ");
// });
// server.listen(8080,() => {
//     console.log("server started");
// })






// const http = require('http');
// const server = http.createServer((req,res) => {
//     console.log(req.url); //* url will return end points like after .com in our websites
//     if(req.url == '/about-us'){
//     res.setHeader("content-type","text/html")
//  res.write("<h1>this is the response from server</h1>")
//     }
//     else if(req.url=='/about'){
//         res.setHeader("content-type","text/html")
//         res.write("<h1>this is the respons</h1>")
//     }
//     else{
//         res.write("page not found");
//     }
// });
// server.listen(8080,() => {
//     console.log("server started");
// })







const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    // console.log(req.url); // returns end point
    console.log(req.url);
    if (req.url == '/home') {
        const data = fs.readFileSync("./view/home.html", "utf-8")
        res.setHeader("Content-Type",'text/html');
        res.write(data);
        // res.write("<h1>Home Page<h1/>") // html , json ,plain text
        // res.write("<h1 color='blue' align='center' >Rohan Maiti<h1/>") //plain text
        res.end();
    }
    else if (req.url == '/about') {
        const data2 = fs.readFileSync("./view/about.html", "utf-8")
        res.setHeader("Content-type", "text/html")
        res.write(data2);
        // res.write("<h1>About Page<h1/>") // html , json ,plain text
        // res.write("<h1 color='blue' align='center' >Rohan Maiti<h1/>") //plain text
        res.end()
    }
    else if (req.url == '/index') {
        res.setHeader("Content-Type", "text/css")
        const data2 = fs.readFileSync('./view/index.css', "utf-8")
        res.write(data2);
        res.end();
    }
    else {
        res.setHeader("Content-type", "text/html")
        res.write("<h1>404<h1/>") // html , json ,plain text
        res.write("<h1 color='blue' align='center'>Page Not Found<h1/>") //plain text
        res.end()
    }
});

server.listen(3030, () => {
    console.log("server started")
})