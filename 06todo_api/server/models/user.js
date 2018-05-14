var mongoose = require("mongoose");

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    time: true,
    minlength: 1
  }
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
