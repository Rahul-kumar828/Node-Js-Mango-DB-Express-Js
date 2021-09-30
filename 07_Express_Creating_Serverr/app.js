const express=require('express');
const app=express();
const hostname='127.0.0.1';
const port=3000;
const path=require('path');
//configure static files path
app.use('/public',express.static('public'));

//GET a html tag
app.get('/',(request,response)=>{
    response.send(`<h2 style="color: blue">Welcome to express js</h2>`);
});
//GET a html file
app.get('/home',(request,response)=>{
    response.sendfile(path.join(__dirname,'index.html'));
});

//GET json response
app.get(`/json`,(request,response)=>{
   let employee=[
       {
           name:'rahul',
           age:21,
           occupation:'developer'
       },
       {
          name:'ritanshu',
          age:21,
          occupation:"developer"
       },
       {
           name:'adarsh',
           age:16,
           occupation:"doctor"
       }
   ];
    response.json(employee);

});
//to download a file from server
app.get('/download',(request,response)=>{
    response.download(path.join(__dirname,'CAD-WS-3.pdf'));

});

app.listen(port,hostname,()=>{
   console.log(`server is started at http://${hostname}:${port}`);
});

