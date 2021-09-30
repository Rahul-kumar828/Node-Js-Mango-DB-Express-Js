const fs = require("fs");
const path = require("path");

let mapRoute=function (request,response){
    let url=request.url;
    response.statusCode=200;
    response.setHeader('content-type','text/html');
    //this is for index page(node js routing)
    if(url==='/'){
        fs.readFile(path.join(__dirname,'..','views','index.html'),'utf-8',(error,data)=>{
            if (error) throw error;
            response.end(data);

        });
    }
    else if(url==='/about'){
        fs.readFile(path.join(__dirname,'..','views','about.html'),'utf-8',(error,data)=>{
            if (error) throw error;
            response.end(data);

        });
    }
    else if(url==='/profile'){
        fs.readFile(path.join(__dirname,'..','views','profile.html'),'utf-8',(error,data)=>{
            if (error) throw error;
            response.end(data);

        });
    }
    else if(url ==='/contact'){
        fs.readFile(path.join(__dirname,'..','views','contact.html'),'utf-8',(error,data)=>{
            if (error) throw error;
            response.end(data);

        });

    }
    else {
        fs.readFile(path.join(__dirname,'..','views','404.html'),'utf-8',(error,data)=>{
            if (error) throw error;
            response.end(data);

        });
    }
};
module.exports={
    mapRoute
};