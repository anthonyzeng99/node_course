var mongoose = require("mongoose");

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: true
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: "hello"
// });

// newTodo.save().then((result) => {
//   console.log(result);
// }, (error) => {
//   console.log(error);
// });

module.exports = {Todo};
