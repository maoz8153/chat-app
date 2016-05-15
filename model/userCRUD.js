/*jslint node:true*/
var User = require('../model/user.js');
var Q = require("q");

var Action = {
    findUsers : function (callback, limit) {
       return User.find(callback).limit(limit).exec();
    },

    findUserById : function (id, callback) {
       return User.findById(id, callback).exec();
    },

    createUser : function (user) {

                        var la = new User();
                        la.username = user.name;
                        var promise = la.save();
                        return promise;

    }

};

module.exports = Action;


