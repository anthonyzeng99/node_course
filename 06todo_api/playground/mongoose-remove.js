const {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove().then(result) => {
//
// });

Todo.findByIdAndRemove("5afadd4fb514c3adde75154c").then((todo) => {
  return console.log(todo);
});
