// // //* we will create a server using HTTP module 
// // //* http is a core moudule which is provided by node js
// // //* http.incomingmessage is an object to handle request response
// // //* server.listen rake three parameters portno,localhost,callback


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







// // const http = require("http");
// // const fs = require("fs")
// // const server = http.createServer((req, res) => {
// //     // console.log(req.url); // returns end point
// //     console.log(req.url);
// //     if (req.url == '/home') {
// //         const data = fs.readFileSync("./view/home.html", "utf-8")
// //         res.setHeader("Content-type", "text/html")

// //         res.write(data)
// //         // res.write("<h1>Home Page<h1/>") // html , json ,plain text
// //         // res.write("<h1 color='blue' align='center' >Rohan Maiti<h1/>") //plain text
// //         res.end()
// //     }
// //     else if (req.url == '/about') {
// //         const data2 = fs.readFileSync("./view/about.html", "utf-8")
// //         res.setHeader("Content-type", "text/html")
// //         res.write(data2);
// //         // res.write("<h1>About Page<h1/>") // html , json ,plain text
// //         // res.write("<h1 color='blue' align='center' >Rohan Maiti<h1/>") //plain text
// //         res.end()
// //     }
// //     else if (req.url == '/index.css') {
// //         res.setHeader("Content-Type", "text/css")
// //         const data2 = fs.readFileSync("./view/index.css", "utf-8")
// //         res.write(data2);
// //         res.end();
// //     }
// //     else {
// //         res.setHeader("Content-type", "text/html")
// //         res.write("<h1>404<h1/>") // html , json ,plain text
// //         res.write("<h1 style={ color:red; align:center;>PageFound<h1/>") //plain text
// //         res.end()
// //     }
// // });

// // server.listen(3030, () => {
// //     console.log("server started")
// // })



// const http = require("http");
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//     // console.log(req.url); // returns end point
//     console.log(req.url);
//     if (req.url == '/home') {
//         const data = fs.readFileSync("./view/home.html", "utf-8")
//         res.setHeader("Content-type", "text/html")

//         res.write(data)
//         // res.write("<h1>Home Page<h1/>") // html , json ,plain text
//         // res.write("<h1 color='blue' align='center' >Rohan Maiti<h1/>") //plain text
//         res.end()
//     }
//     else if (req.url == '/about') {
//         const data2 = fs.readFileSync("./view/about.html", "utf-8")
//         res.setHeader("Content-type", "text/html")
//         res.write(data2);
//         // res.write("<h1>About Page<h1/>") // html , json ,plain text
//         // res.write("<h1 color='blue' align='center' >Rohan Maiti<h1/>") //plain text
//         res.end()
//     }
//     else if (req.url == '/index.css') {
//         res.setHeader("Content-Type", "text/css")
//         const data2 = fs.readFileSync("./view/index.css")
//         res.write(data2);
//         res.end();
//     }
//     else if(req.url == '/sample.jpg'){
//         res.setHeader("Content-Type", "image/jpg")
//         const data3 = fs.readFileSync("./images/sample.jpg")
//         res.write(data3);
//         res.end();   
//     }
//     else {
//         res.setHeader("Content-type", "text/html")
//         res.write("<h1>404<h1/>") // html , json ,plain text
//         res.write("<h1 style={ color:red; align:center;>PageFound<h1/>") //plain text
//         res.end()
//     }
// });

// server.listen(3030, () => {
//     console.log("server started")
// })













// const http = require('http')
// const fs = require('fs');

// http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.setHeader('Content-Type', 'text/html')
//         const data = fs.readFileSync('./view/home.html')
//         res.write(data)
//         res.end()
//     }
//     else if (req.url == '/about.html') {
//         res.setHeader('Content-Type', 'text/html')
//         const data = fs.readFileSync('./view/about.html')
//         res.write(data);
//         res.end()
//     }
//     else if (req.url == '/index.css') {
//         res.setHeader('Content-Type', 'text/css')
//         const data = fs.readFileSync('./view/index.css')
//         res.write(data)
//         res.end()
//     }
//     else if (req.url == '/picture1.jpg') {
//         res.setHeader('Content-Type', 'image/jpg')
//         const data = fs.readFileSync('./images/picture1.jpg');
//         res.write(data);
//         res.end()
//     }
//     else {
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<h1 style="text-align:center; color:red;">404 Error Not Found</h1>');
//         res.end()
//     }
// }).listen((8080), () => {
//     console.log("SERVER STARTED");
// })













// const fs = require('fs');

// let x = JSON.parse(fs.readFileSync('./demo.json',"utf-8"));
// console.log(x,typeof x);

// fs.writeFileSync('../a.txt',JSON.stringify(x));

// let arr2 = [];
// arr2.push(x);
// console.log(JSON.stringify (arr2),typeof arr2);

// let obj = {
//     name: "rohan",
//     age : 15
// }
// let arr = []

// console.log(1000,obj,typeof obj);
// arr.push(obj);
// console.log(2000,arr,typeof arr);
// let ans = JSON.stringify(obj)
// console.log(3000,ans,typeof ans);
// arr.push(ans);
// console.log(4000,arr,typeof arr);
// let ans2 = JSON.parse(arr[1])
// console.log(5000,ans2,typeof ans2);
// arr.push(ans2);
// console.log(6000,arr,typeof arr);
// if(arr[0].name==arr[2].name){
//     console.log(7000,"HURRAH!");
// }








// const http = require('http');
// const fs = require('fs');

// http.createServer((req,res) => {
//     let str = '';
//     let arr=[];
//      console.log(req.url);
//   if(req.url=='/'){
//     res.setHeader('Content-Type','text/html');
//     res.end('<h1>welcome to server </h1>')
//   }
//   else if(req.url == '/getData'){
//      req.on('data',(chunk) => {
//           str += chunk;
//      })
//      req.on('end', () => {
//          let obj = JSON.parse(str);
//          arr = JSON.parse(fs.readFileSync('./demo.json',"utf-8"));
//          arr.push(obj);
//          fs.writeFileSync('./demo.json',JSON.stringify(arr))
//      })
//   }


// }).listen(8080,() => {
//     console.log("SERVER STARTED");
// })











const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    console.log(req.url);
    const parsedurl = url.parse(req.url, true);
    console.log(parsedurl);

    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html');
        let data = fs.readFileSync('./03.html', 'utf-8');
        res.end(data);
    } else if (parsedurl.pathname == '/getData') {
        console.log(parsedurl.query);
        let obj = parsedurl.query;
        
        // Read the existing data from the file
        let arr = JSON.parse(fs.readFileSync('./demo.json', 'utf-8'));
        
        // Push the new object into the array
        arr.push(obj);
        
        // Write the updated array back to the file
        fs.writeFileSync('./demo.json', JSON.stringify(arr));

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');  // Changed to application/json
        console.log("DATA IS SENT");
        
        // Send the updated array as the response
        res.end(JSON.stringify(arr));
    }
}).listen(8080, () => {
    console.log("Server started");
});
