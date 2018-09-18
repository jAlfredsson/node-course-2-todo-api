const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findOneAndRemove({_id: '5ba141161999211796822091'}).then((todo) => {

});

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ba141161999211796822091').then((todo) => {
  console.log(todo);
})
