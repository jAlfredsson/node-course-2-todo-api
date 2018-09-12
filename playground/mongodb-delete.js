// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongoDb server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Users').deleteMany({name: 'John'}).then( (result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// })


//findOneAndDelete
db.collection('Users').findOneAndDelete({_id: ObjectID('5b97deb6f8ca0b6ef6dd5a24')}).then((result) => {
  console.log(result);
});

  //db.close();
});
