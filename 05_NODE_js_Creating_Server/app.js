//load http module
const http=require('http');
const fs=require('fs');
const path=require('path');

const hostname='127.0.0.1';
const port=3000;

//creating server
let server=http.createServer((request,response)=>{
    let url=request.url;
    console.log(url);
    response.statusCode=200;
           response.setHeader('content-Type','text/html');
          // response.end(`index.html`);//this access string as a parameter only
           fs.readFile(path.join(__dirname,'index.html'),'utf-8',(error,data)=>{
              if(error)throw error;
              response.end(data);
           });
   });
server.listen(port,hostname,()=>{
      console.log(`server is started at http://${hostname}:${port}`);
});

