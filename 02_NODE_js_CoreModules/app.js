//core module (os)

//load/import any module
const os=require('os');
const  fs=require('fs');
const path=require('path');
//__dirname
console.log(`dir name:${__dirname}`);
//__file name
console.log(`file name: ${__filename}`);

//total memory
let totalMemory=os.totalmem();

console.log(`total memory is${totalMemory}`);
//free memory
let freeMemory=os.freemem();
console.log(`free memory is : ${freeMemory}`);
//home directory
let homeDirectory = os.homedir();
console.log(`home directory is : ${homeDirectory}`);
//host name
console.log(`host name ${os.hostname()}`);
//user info
console.log(os.userInfo().username);


/////fs module example
//write a file
let fileContent='Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.';
fs.writeFile('message.txt',fileContent,'utf-8',(error)=>{
   if(error) throw error;
   console.log('data is saved');
});
//read the file
fs.readFile('message.txt','utf-8',(err,data)=>{
   if(err) throw err;
   console.log(data);
});

//path module
/*
two global variable in node js are-
1) __dirname
2)--filename
 */
let dirPath=path.join(__dirname,'data','employee','data.txt');
console.log(`dir path :${dirPath}`);
//create a file inside /data/employee folder
fs.writeFile(dirPath,fileContent,'utf-8',(error)=>{
   if(error) throw error;
   console.log('file written');
});

//crete file program.txt in employee to import app_local.js
//read the app_local.js file content
fs.readFile(path.join(__dirname,"app_local.js"),'utf-8',(err,data)=>{
 if(err) throw err;
 fs.writeFile(path.join(__dirname,'data','employee','program.txt'),data,'utf-8',(error)=>{
    if(error)throw error;
    console.log('Data of app_local.js is saved');
 });
});
