// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDb server');
  }
  console.log('Connected to MongoDB server');
//
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b97edae199921179681f08f')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b8911ec866a806d3ebf96a7')
}, {
  $set: {
    name: 'John'
  },
  $inc: {
    age: 2
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

  //db.close();
});
