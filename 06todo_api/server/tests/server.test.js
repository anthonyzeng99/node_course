const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {todos, populateTodos, users, populateUsers} = require('./seed/seed')

beforeEach(populateUsers);
beforeEach(populateTodos);

describe("POST /todos", () => {
  it("should create a new todo", (done) => {
    var text = "third test todo";
    request(app)
      .post("/todos")
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(3);
          expect(todos[2].text).toBe(text);
          done();
        }).catch((error) => done(error));
      });
  });

  it("should not create new todo with invalid body data", (done) => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((error) => done(error));
      });
  });
});

describe("GET /todos", () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2)
      })
      .end(done);
  });
});

describe("GET /todos/:id", () => {
  it("should return todo doc", (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it("should return a 404 if todo not found", (done) => {
    var id = new ObjectId().toHexString();
    request(app)
      .get(`/todos/${id}`)
      .expect(404)
      .expect((res) => {
        res == null;
      })
      .end(done);
  });

  it("should return a 404 if non-object ids", (done) => {
    request(app)
      .get('/todos/123')
      .expect(404)
      .expect((res) => {

      })
      .end(done)
  })
});

describe("DELETE /todos/:id", () => {
  it("should remove a todo", (done) => {
    var hexId = todos[1]._id.toHexString();
    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId).then((todo) => {
          expect(todo).toNotExist();
          done();
        }).catch((error) => done(error));
      });

  });

  it("should return 404 if todo not found", (done) => {
    var id = new ObjectId().toHexString();
    request(app)
      .delete(`/todos/${id}`)
      .expect(404)
      .expect((res) => {
        res == null;
      })
      .end(done);

  });
  //
  it("should return 404 if object id is invalid", (done) => {
    request(app)
      .delete('/todos/123')
      .expect(404)
      .expect((res) => {

      })
      .end(done)
  });
});

describe('PATCH /todos/:id', () => {
  it('should update todo', (done) => {
    var hexId = todos[0]._id.toHexString();
    var text = 'this should be the new text'

    request(app)
      .patch(`/todos/${hexId}`)
      .send({
        completed: true,
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
        expect(res.body.todo.completedAt).toBeA('number');
      })
      .end(done);
  });

  it('should update todo to false and clear completed at', (done) => {
    var hexId = todos[1]._id.toHexString();
    var body = {
      'completed': false
    }

    request(app)
      .patch(`/todos/${hexId}`)
      .send(body)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.completedAt).toEqual(null);
      })
      .end(done);
  });
});
