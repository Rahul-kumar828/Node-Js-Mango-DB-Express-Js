const fs=require('fs');
const path=require('path');



let printUsers=(users)=>{
    fs.writeFile(path.join(__dirname,'user.json'),JSON.stringify(users),'utf-8',(error)=>{
       if(error)throw error;
       console.log('data is stored');
    });
};
module.exports={
    printUsers
}