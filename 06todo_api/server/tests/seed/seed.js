const {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user')

const todos = [{
  _id: new ObjectId(),
  text: 'first test todo',
  completed: false,
  completedAt: null
}, {
  _id: new ObjectId(),
  text: 'second test todo',
  completed: true,
  completedAt: 123123
}];

const userOneId = new ObjectId();
const userTwoId = new ObjectId()
const users = [{
  _id: userOneId,
  email: 'sample1@example.com',
  password: 'user1pass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'sample3@example.com',
  password: 'user2pass'
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers}
