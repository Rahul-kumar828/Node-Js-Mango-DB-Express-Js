const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const url='mongodb://127.0.0.1:27017/employee-portal';
let _db;//database connecting object
const mongoConnect= callback=>{
  MongoClient.connect(url).then(
      client => {
          console.log('connected to mongodb successfully ......');
          _db=client.db();
          callback();
      }
  )  .catch(err => {
      console.log(err);
      throw err;
  })
};
const getDB=()=>{
  if(_db){
      return _db;
  }
  throw 'no database found';
};
module.exports={
  mongoConnect,
  getDB
};
