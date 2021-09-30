const MongoClient=require('mongodb').MongoClient;
//aconst assert=require('assert');
//connection url
const url='mongodb://127.0.0.1:27017'; //local host=127:0:0:1
//database name
const dbName='infos_db'; //which database you are going to insert
//create a new mongodb client
const client=new MongoClient(url);//based ont the url it create new client
//use connect method to connect to the server(database)
client.connect(function (err){
    //assert.equal(null,err);//you use or not it depends on you
    console.log("connected  to local mongodb successfully ");
    const db=client.db(dbName);//using this db we can do CURD operation
    // //insert records(onr by one)
    // // let employeeOne={
    // //     id:2,
    // //     name:'john',
    // //     age:40,
    // //     designation:'manager'
    // // };
    // ////insert many records
    // let employees=[
    //     {
    //        id:3,
    //         name:'Raju',
    //         age:35,
    //         designation:'tech lead'
    //     },
    //     {
    //         id:4,
    //         name:'mahesh',
    //         age:40,
    //         designation:'tech-manager'
    //     }
    // ];
    // db.collection('employee').insertMany(employees,function (err,record){
    //   if(err)throw err;
    //    console.log('record  are inserted');
    // });
    // ///////fetch data from database
    // db.collection('employee').find({id:3}).toArray(function (err,docs){
    //     if(err) throw err;
    //     console.log(docs);
    // });
    //////update
    // db.collection('employee').updateOne({id:1},{$set:{
    //     age:5545,
    //         designation:"delivery manager",
    //     }},function (err,record){
    //     if(err)throw err;
    //     console.log(`updated a record with id:1`)
    // });
    ////delete operation
    db.collection('employee').deleteOne({id:2},function (err,record){
       if(err)throw err;
       console.log('record is deleted');
    });

    //client.close();
});