const {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// var id = "5af9e87eb1d22751a6e91c60";
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo by id', todo)
// }).catch((error) => console.log(error));

var userId = '5af9d614daaaa06e9948f758';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  } else {
    console.log(user);
  }
}).catch((error) => console.log("Invalid ID\n", error));
