//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const {mongoHost} = require('./local');
MongoClient.connect(`mongodb://${mongoHost}/TodoApp`, (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }
  console.log('Connected to MongoDB server');

  // filter, update, options, callback

  //docs.mongodb.com/manual/reference/operator/update/
  // 확인
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59b7ec23df95f7b3ee4a8cdc')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b7ec176c5a92b3e5d15465')
  }, {
    $set: {
      name: 'Junghyun'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });




  //db.close();
});


