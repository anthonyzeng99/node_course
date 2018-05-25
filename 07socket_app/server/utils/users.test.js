const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'James',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jack',
      room: 'Node Course'
    }, {
      id: '3',
      name: 'Evan',
      room: 'React Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Evan',
      room: "Google stuff"
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userToRemove = users.users[1];
    var removedUser = users.removeUser(userToRemove.id);
    expect(removedUser).toBe(userToRemove);
    expect(users.users.filter((user) => user == userToRemove)).toEqual([]);
  });

  it('should not remove user', () => {
    var removedUser = users.removeUser('4');
    expect(removedUser).toBe(undefined);
  });

  it('should find user', () => {
    var userToFind = users.users[2];
    var foundUser = users.getUser(userToFind.id);
    expect(foundUser).toBe(userToFind);
  });

  it('should not find user', () => {
    var foundUser = users.getUser('4');
    expect(foundUser).toBe(undefined)
  });

  it('should return names for node courde', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['James', 'Jack']);
  });

  it('should return names for react courde', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Evan']);
  });
});
