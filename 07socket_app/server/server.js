const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'sample@example.com',
    text: 'Hello',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from: 'sample@example.com',
    text: 'Hello',
    createdAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail)
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage)
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
