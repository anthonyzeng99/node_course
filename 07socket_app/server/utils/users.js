[{
  id: '123',
  name: 'James',
  room: 'The Office Fans'
}]

//addUser(id, name, roomName)

//removeUser(id)

//getUser(id)

//getUserList(roomName)

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription() {
//     return `${this.name} is ${this.age} years old`
//   }
// }
//
// var me = new Person('Andrew', 25);
// console.log(me.getUserDescription());

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {

  }

  getUser(id) {

  }

}

module.exports = {Users};
