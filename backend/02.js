// const http = require('http');
// const fs = require('fs')
// const path = require('path');

// http.createServer((req,res)=>{       
//    sendResponse(req.url,res);
// }).listen(3030,()=>{
//     console.log('server started on port 3030')
// })

// function sendResponse(url,response){
//     try{
//     const extName = path.extname(url);
//     let header = 'text/html'
//     let filePath =''
//     // if(extName == '.css'){
//     //     header = 'text/css' 
//     //     filePath = path.join(__dirname,'',url) //./styles/style.css      
//     // } 
//      if(extName == '.png'){
//         header = 'image/png' 
//         filePath = path.join(__dirname,url) //   
//     }   
//     else{ 
//         filePath = path.join(__dirname,'htmlFiles',url);
//     }       
//     console.log(filePath);
//     response.setHeader('Content-Type',header);
//     let data = fs.readFileSync(filePath)
//     response.write(data);
//     response.end();
//     }
//     catch{
//         response.end();
//         return '';
//     }
// }
// // console.log(__dirname);










// const http = require("http");
// const fs = require('fs');
// const path = require("path")
// http.createServer((req, res) => {
//     doWork(req.url, res)
// }).listen(4000, () => {
//     console.log("server started on port 4000")
// })

// function doWork(url, res) {
//     try {
//         const extention = path.extname(url)
//         let header = "";
//         let pathname = "";
//         if (extention == ".jpg") {
//             header = "image/jpg";
//             pathname = path.join('./', "images", path.basename(url))
//             console.log(path.basename(url));
//             console.log(url);
//         }
//         else {
//             header = "text/html"
//             pathname = path.join('./', "htmlFiles", url)
//         }
//         let data = fs.readFileSync(pathname);
//         res.setHeader("Content-Type", header);
//         res.write(data);
//         res.end();
//     }
//     catch {
//         res.end();
//         return '';
//     }
// }


const http = require('http');
const fs =  require('fs');
const path = require('path');
http.createServer((req,res) => {
    doWork(req.url,res);
}).listen(4040,() => {
    console.log("Server started");
})

function doWork(url,res) {
    try{
    let pathname =""
    let header = "";
    let ext = path.extname(url);
    if(ext == '.jpg'){
        header = 'image/jpg';
        pathname = path.join('./','./images',path.basename(url));
    }
    else{
        header = 'text/html';
        pathname = path.join('./','./htmlFiles',path.basename(url));
    }
    let data = fs.readFileSync(pathname);
    res.setHeader("Content-Type", header);
            res.write(data);
            res.end();   
}
catch{
    res.end();
        return '';
}
}