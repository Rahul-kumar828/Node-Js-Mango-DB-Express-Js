const express=require('express');
const router=express.Router();
const fs=require('fs');
const path=require('path');
const mongo=require('../database/dbOperations');
const mongodb=require('mongodb');
const objectId=mongodb.ObjectId;

//GET(read) All the employee
router.get('/employee',(request,response)=>{
   // fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',( error,data)=>{
   //     if(error) throw error;
   //     let employee=JSON.parse(data);
   //     response.json(employee);
   //
   // });
       //get database connection object
    let db=mongo.getDB();
    db.collection('employees').find().toArray(function (err,docs){
        let employees=docs;
        response.json(employees);
    });

});

//GET(read) a single employee
router.get('/employee/:id',(request,response)=>{
      let empId=request.params.id;

    // fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',( error,data)=>{
    //     if(error) throw error;
    //     let employees=JSON.parse(data);
    //     let selectedEmployee=employees.find(function (employee){
    //        return employee.id === empId;
    //     });
    //     response.json(selectedEmployee);
    //
    // });
    //get db connection object
    let db=mongo.getDB();
    db.collection('employees').find({_id:objectId(empId)}).toArray(function (err,docs){
    let employee=docs[0];
    response.json(employee);
    });
});

//POST CREATE  a new employee
router.post('/employee',(request,response)=>{
    //get employee object from client form
    let newEmployee={
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address
    };
    //get database connection object
    let db=mongo.getDB();
    db.collection('employees').insertOne(newEmployee,function (err,r){
        response.json(newEmployee);
    });
});

//PUT update an existing employee
router.put('/employee/:id',(request,response)=>{
    let empId=request.params.id;
    let updateEmployee={
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address
    };

    //get database connection object
    let  db=mongo.getDB();
    db.collection('employees').updateOne({_id:objectId(empId)},{$set:updateEmployee});
    response.json(updateEmployee);

});

//DELETE: delete an employee
router.delete('/employee/:id',(request,response)=>{
    let empId=request.params.id;
    //get database connection object
    let db=mongo.getDB();
    db.collection('employees').deleteOne({_id:objectId(empId)},function(err,record){
        response.json(`Employee with id :${empId} is deleted`);
    });


});

module.exports=router;