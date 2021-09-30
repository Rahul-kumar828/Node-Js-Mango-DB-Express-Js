const express=require('express');
const app=express();
const path=require('path');

const hostname='127.0.0.1';
const port=3000;

//static file configuration
app.use('/public',express.static('public'));

app.get('/' ,(request,response)=>{
    response.send(`<h2 style="color: red">Welcome to express routing</h2>`)

});
app.listen(port,hostname,()=>{
   console.log(`Express server is started at http://${hostname}:${port}`);
});