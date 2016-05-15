/*jslint node:true*/
var User = require('../model/user.js');

var Action = {
    findUsers : function (callback, limit) {
        User.find(callback).limit(limit);
    },

    findUserById : function (id, callback) {
       User.findById(id, callback);
    },

    createUser : function (user, callback) {
        User.create(user, callback);
    }

};

module.exports = Action;
