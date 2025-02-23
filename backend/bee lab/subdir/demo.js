const fs = require('fs');
const path = require('path');

fs.readdir('./bee lab',(err,allfiles) => {
  if(err) throw err;
  console.log(allfiles);

  fs.mkdir('./rohan new',(err) => {
    if(err) throw err;

    allfiles.forEach((file) => {
      const p1 = path.join('./bee lab',file);
      const p2 = path.join('./rohan new',file);

      fs.copyFile(p1,p2,(err) => {
        if(err) throw err;
        console.log(`${file} is copied to ${'./rohan new'}`);
      })
    })
  })
})