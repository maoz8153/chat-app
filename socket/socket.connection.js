/*jslint node:true*/
var io = require('../bin/www');
var Message = require('../model/messageCRUD');
var User = require('../model/userCRUD');

io.sockets.on('connection', function (socket) {
  socket.on('send message', function (message) {
        Message.newMassege(message ,function (err, message) {
            if (err) {
                throw err;
            }
            io.sockets.emit('new message', message);
        });
    });

    socket.on('new user', function (user, index) {
          User.createUser(user ,function (err, user) {
              if (err) {
                  throw err;
              }
              io.sockets.emit('new user confirm', index);
          });

    });
});
