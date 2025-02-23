//* readFile is asynchronous in nature it will first read the file and then call the callback function

// const fs = require('fs')
// fs.readFile('./demo.txt','utf-8' ,(err,data) => {
//        if(err){
//         console.log(err);
//        }
//        else{
//         console.log(data); //* it gives data in binary format without using the second parameter 'utf-8'
//         console.log(data.toString());
//        }
// })


//* readFileSync is synchronous in nature
//* in this no callback functin directly it converts into string
// const fs = require('fs')
// const data = fs.readFileSync('./demo.txt','utf-8');
// console.log(data);



// const fs = require('fs')
// try{
// const data = fs.readFileSync('./demo.txt','utf-8');
// console.log(data);
// }
// catch{
//     console.log(error);
// }









//* if data is already available in fille it will overwrite the data in it or otherwise it will create new file
//* writeFile is asyncronous in nature
//* writeFIleSync is syncronous in nature and it has no callback function
// const fs = require('fs')
// fs.writeFile('./demo.txt',"New data",(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('write operation completed');
//     }
// })



//* appendFile take path,data,callback with only one parameter(err)
//* it will create new file and write the content in it


// const fs = require('fs');

// fs.appendFile('./dm.txt','data after appending',(err) => {
//     if(err) throw err;
//     console.log('Data appended');
// })



//* deleting a file will take two paramters filepath,callback with one paramter(err)

// const fs = require('fs')
// fs.unlink('./dm.txt',(err)=> {
//     if(err) throw err;
//     console.log('FIle deleted');
// })




//* rename three paramters oldfile,newfile,callback
// const fs = require('fs')
// fs.rename('./dem.txt','./dummy.txt',(err)=> {
//     if(err) throw err;
//     console.log('file renamed');
// })



//* creating a directory

// const fs = require('fs');
// fs.mkdir('./newdir',(err) => {
//     if(err) throw err;
//     console.log("directory created");
// })




// const fs = require('fs');
// const path = require('path');

// fs.readdir('./bee lab',(err,files)=> {
//     fs.mkdir('./rohan new',(err) => {
//         files.forEach((file) => {
//             const source = path.join('./bee lab',file);
//             const destination = path.join('./rohan new',file);
//             fs.copyFile(source,destination,(err)=> {
//                 console.log("DONE!");
//             })
//         })
//     })
   
// })





//* copying all subdirectories with files
// const fs = require('fs');
// const path = require('path');

// function copyData(src,dest){
//     if (!fs.existsSync(dest)){
//         fs.mkdirSync(dest,{recursive:true});
//     }
//          fs.readdir(src,(err,files)=> {
//             if(err) throw err;
//             files.forEach(file => {
//                 const srcPath = path.join(src,file);
//                 const destPath = path.join(dest,file);
//                 const stats = fs.statSync(srcPath);
//                 if(stats.isDirectory()){
//                     fs.mkdirSync(destPath,{recursive:true});
//                     copyData(srcPath,destPath);
//                 }
//                 else{
//                     fs.copyFileSync(srcPath,destPath);
//                 }
//             })
//          })
// }
// copyData('./bee lab','./rohan')






// const fs = require('fs');
// const path = require('path');

// function copyFile(srcDir, destDir, fileName) {
//     if(!fs.existsSync(destDir)){
//         fs.mkdirSync(destDir,{recursive:true})
//     }
//     const srcPath = path.join(srcDir, fileName);
//     const destPath = path.join(destDir, fileName);

//     // Check if the file exists in the source directory
//     if (fs.existsSync(srcPath)) {
//         // Copy the file to the destination directory
//         fs.copyFileSync(srcPath, destPath);
//         console.log(`File "${fileName}" copied successfully.`);
//     } else {
//         console.log(`File "${fileName}" does not exist in the source directory.`);
//     }
// }

// // Example usage:
// copyFile('./bee lab', './rohan', './demo.js');









//* removing a directory

// const fs = require('fs');
// fs.rmdir('./rohan',(err) => {
//     if(err) throw err;
//     console.log("directory removed");
// })




//* read dir and return string
// const fs = require('fs');
// fs.readdir('./',(err,files) => {
//     if(err) throw err;
//     console.log(files);
// })



// const fs = require('fs');
// fs.readdir(__dirname,(err,files) => {
//     if(err) throw err;
//     console.log(files);
// })




//* returns directory name
// const fs = require('fs');
// console.log(__dirname);






//* joins path with file path
// const fs = require('fs');
// const path = require('path')

// const pathname = path.join(__dirname,'a','b','c');
// console.log(pathname);
// console.log(typeof(pathname));



//* task: creating 3 to 4 files in directory and creating other new folder then copying all files into it 