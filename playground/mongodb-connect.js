//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

console.log(obj);

/*
let user = {
  name: 'kazikai',
  age: 34
};
let {name} = user;
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }
  console.log('Connected to MongoDB server');

  //db.collection('Todos').insertOne({
  //  text: 'todo...',
  //  completed: false
  //}, (err, result) => {
  //  if (err) {
  //    console.log('Unable to insert todo', err);
  //    return;
  //  }
  //  console.log(JSON.stringify(result.ops, undefined, 2));
  //});
  db.collection('Users').insertOne({
    name: 'kazikai',
    age: 34,
    location: 'SEOUL'
  }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    // timestamp도 찍을 수 있음
    console.log(result.ops[0]._id.getTimestamp());

  });

  db.close();
});


