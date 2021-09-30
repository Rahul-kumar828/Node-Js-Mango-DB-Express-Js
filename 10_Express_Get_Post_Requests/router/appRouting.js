const path = require("path");
const fs=require('fs');
const {json} = require("express");
const bodyParser=require('body-parser');

let mapRoutes=function(app){

    //configure the body parser
    const urlEncodedBodyParse=bodyParser.urlencoded({extended:false});

  //Express Routing
  //home page
 app.get('/',(request,response)=>{
        response.sendFile(path.join(__dirname,'..','views','index.html'));
    });
   //about page with Normal GET Request

    app.get('/about',(request,response)=>{
        response.sendFile(path.join(__dirname,'..','views','about.html'));
    });
    //services page
    //Get request with Query Strings(http://127.0.0.1:3000/services?service_name=cources)
    //(http://127.0.0.1:3000/services?service_name=cources&year=2021)
    app.get('/services',(request,response)=>{
        let query=request.query;
        response.sendFile(path.join(__dirname,'..','views','services.html'));
    });
    //profile page
    app.get('/profile',(request,response)=>{
        response.sendFile(path.join(__dirname,'..','views','profile.html'));
    });
    //profile page with ID
    //GET with parameters
    app.get('/profile/:id',(request,response)=>{
        let SelectedID=Number.parseInt(request.params.id);
        fs.readFile(path.join(__dirname,'..','database','profile.json'),'utf-8',(error,data)=>{
          if (error)throw error;
          let profiles=JSON.parse(data);
          let selectedProfile=profiles.find(function (profile){
              return profile.id === SelectedID;
          })
            console.log(selectedProfile);
        });
        response.sendFile(path.join(__dirname,'..','views','profile.html'));
    });
    //contact page
    app.get('/contact',(request,response)=>{
        response.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

    //POST:Contact Form
    app.post('/contact-form',urlEncodedBodyParse,(request,response)=>{
        let contactFormData=request.body;
        console.log(contactFormData);
        response.sendFile(path.join(__dirname,'..','views','contact.html'));


    });

    //404 page
    app.use((request,response)=>{
        response.sendFile(path.join(__dirname,'..','views','404.html'));
    });
};
module.exports={
    mapRoutes
};