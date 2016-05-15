/*jslint node:true*/
var Massage = require('../model/message.js');

var Action = {
    getAllMessages : function (callback, limit) {
        Massage.find(callback).limit(limit);
    },

    newMassege : function (message, callback) {
        Massage.create(message, callback);
    }

};

module.exports = Action;
