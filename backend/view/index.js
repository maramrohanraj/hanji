const http = require('http');
const fs = require("fs")
http.createServer((req,res) => {
  let array = []
    let str = ''
  console.log(req.url);
  if(req.url == "/")
  {
    res.setHeader("Content-Type","text/html");
    res.end("<h1>Welcome to the Server</h1>")
  }
  
  else if(req.url == "/getData")
  {
    console.log("hello")
      req.on('data',(chunk)=>{
         str += chunk;
      })
      req.on('end',()=>{
        let obj = JSON.parse(str);
         array =JSON.parse (fs.readFileSync("./demo.json",'utf-8'));
         console.log(array,typeof array)
         array.push(obj);
        fs.writeFileSync('./demo.json',JSON.stringify(array));
        console.log(obj);
      })
  }
      

}).listen(5050,()=> {
    console.log("serve started");
})