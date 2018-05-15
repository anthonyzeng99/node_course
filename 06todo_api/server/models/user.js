const mongoose = require("mongoose");
const validator = require('validator');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    time: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// var newUser = new User({
//   email: "anthonyzeng99@gmail.com"
// });
//
// newUser.save().then((result) => {
//   console.log(result);
// }, (error) => {
//   console.log(error);
// });

module.exports = {User};
