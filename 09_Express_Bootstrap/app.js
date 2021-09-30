const express=require('express');
const app=express();
const path=require('path');
const router=require('./router/appRouting');

const hostname='127.0.0.1';
port=3000;

//configure static file
app.use('/public',express.static('public'));

//Express routing
router.mapRoutes(app);


app.listen(port,hostname,()=>{
   console.log(`Express Server is started at http://${hostname}:${port}`);
});
