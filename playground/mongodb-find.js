//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }
  console.log('Connected to MongoDB server');
  //db.collection('Todos').find({
  //  _id: new ObjectID('59aff8006f9db3c30a7d377d')
  //}).toArray().then((docs) => {
  //  console.log('Todos');
  //  console.log(JSON.stringify(docs, undefined, 2));
  //}, (err) => {
  //  console.log('Unable to fetch todos', err);
  //});
  //db.collection('Todos').find().count().then((count) => {
  //  console.log(`Todos${count}`);
  //}, (err) => {
  //  console.log('Unable to fetch todos', err);
  //});
  db.collection('Users').find({name: 'kazikai'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });


  //db.close();
});


