const fs = require('fs');
const path = require('path');

fs.readdir('./bee lab',(err,files)=>{
    if(err) throw err;
     console.log(files);

    fs.mkdir('./newdirect',(err)=>{
        if(err) throw err;

        files.forEach((file) => {
            const source = path.join('./bee lab',file);
            const destination = path.join('./newdirect',file);

            fs.copyFile(source,destination,(err)=>{
                if(err) throw err;
                console.log(`Copied ${file} to ${'./newdirect'}`);
            });
        });
    });
});
