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
    var removedUser;
    this.users = this.users.filter((user) => {
      if (user.id === id) {
        removedUser = user;
        return false;
      }
      return true;
    })
    return removedUser;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(roomName) {
    var users = this.users.filter((user) => user.room === roomName);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};
