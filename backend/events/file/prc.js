// const fs = require('fs');
// const path = require('path');

// fs.readdir('./bee lab',"utf-8",(err,files) => {
//     if(err) throw err;
//     fs.mkdir('./rohan',(err) => {
//         if(err) throw err;
//     })
//     files.forEach((file) => {
//         const src = path.join('./bee lab',file);
//         const dest = path.join('./rohan',file);

//         fs.copyFile(src,dest,(err) => {
//             if(err) throw err;
//             console.log("HELLO DOSTHOM KAISE HO");
//         })
//     })

// })






// const fs = require('fs');
// const path = require('path')

// function copyData(src,dest){

//       if(!fs.existsSync(dest)){
//         fs.mkdir(dest,{recursive:true})
//       }

//       fs.readdir(src,(err,files) => {
//            if(err) throw err;
//            files.forEach((file) => {
//                 const srcPath = path.join(src,file);
//                 const destPath = path.join(dest,file);
//                 const stats = fs.statSync(srcPath);
//                 if(stats.isDirectory()){
//                     fs.mkdirSync(destPath,{recursive:true})
//                     copyData(srcPath,destPath)
//                 }
//                 else{
//                     fs.copyFileSync(srcPath,destPath)
//                 }
//            })
//       })

// }

// copyData('./node_modules','./rohan')




//* to copy all subsdirectories and files of two folders into one folder

// const fs = require('fs');
// const path = require('path');

// function copyData(source,destination){
//     if(!fs.existsSync(destination)){
//         fs.mkdirSync(destination,{recursive:true})
//     }
// fs.readdir(source,(err,files) => {
//     if(err) throw err;
//     files.forEach( file => {
//         const srcPath = path.join(source,file);
//         const destPath = path.join(destination,file);
//         const stats = fs.statSync(srcPath);
//         if(stats.isDirectory()){
//             fs.mkdirSync(destPath,{recursive:true})
//                 copyData(srcPath,destPath)    
//         }
//         else{
//             fs.copyFileSync(srcPath,destPath)
//                 console.log("DONE DONE");
//         }

//     }
// )

// })
// }

// copyData('./bee lab','./rohan');
// copyData('./basics','./rohan');




const fs = require('fs');
const path = require('path');
let flag=0;

function copyData(source, destination) {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true })
    }
    fs.readdirSync(source, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            const srcPath = path.join(source, file);
            const destPath = path.join(destination, file);
            const stats = fs.statSync(srcPath);
            if (stats.isDirectory()) {
                flag=1;
                fs.mkdirSync(destPath, { recursive: true })
                copyData(srcPath, destPath)
                
            }
               if(flag==1){
                fs.copyFileSync(srcPath,destPath,(err) => {
                    if(err) throw err;
                });
               }
        }
        )

    })
}

copyData('./bee lab', './rohan');
copyData('./basics', './rohan');