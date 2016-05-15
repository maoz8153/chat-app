/*jslint node:true*/
var Message = require('../model/messageCRUD');
var User = require('../model/userCRUD');
var io = require('../bin/www');
var Q = require("q");

var sokcetFunction = function (socket) {
    socket.on('send message', function (message) {
        Message.newMassege(message).then(function (data) {
            console.log(data);
            message.date = data.created_at;
            io.sockets.emit('new message', message);
        })
            .catch(function (error) {
                socket.emit('error', error);
            });

    });

    socket.on('new user', function (user, index) {

        User.createUser(user).then(function (data) {
            console.log(data);
            socket.emit('new user confirm', data);
        })
            .catch(function (error) {
                socket.emit('error', error);
            });

    });


};
module.exports = sokcetFunction;



