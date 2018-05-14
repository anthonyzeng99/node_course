var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

var newTodo = new Todo({
  text: "(hello) => {}"
});

// newTodo.save().then((result) => {
//   console.log(result);
// }, (error) => {
//   console.log(error);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    time: true,
    minlength: 1
  }
});

var newUser = new User({
  email: "anthonyzeng99@gmail.com"
});

newUser.save().then((result) => {
  console.log(result);
}, (error) => {
  console.log(error);
});
