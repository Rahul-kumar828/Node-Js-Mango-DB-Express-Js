const http=require('http');
const fs=require('fs')
const path=require('path')
const hostname='127.0.0.1';
const port=3000;
const appRout=require('./routing/appRouting')
const server=http.createServer((request,response)=>{

   //
    //node js routing
    appRout.mapRoute(request,response);


});
server.listen(port,hostname,()=>{
    console.log(`node js serer is started at http://${hostname}:${port}`);
});