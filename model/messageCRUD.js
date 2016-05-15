/*jslint node:true*/
var Massage = require('../model/message.js');
var Q = require("q");
var Action = {
    getAllMessages : function (callback, limit) {
        Massage.find(callback).limit(limit);
    },

    newMassege : function (message) {
        var la = new Massage();
        la.username = message.username;
        la.text = message.text;
        var promise = la.save();
        return promise;
        }


};

module.exports = Action;
