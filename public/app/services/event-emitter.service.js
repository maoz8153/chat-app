(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('eventEmitter', eventEmitter);

    function eventEmitter() {

        var listeners_newMessage = [];
        var service = {
            subscribe_newMessage: subscribe_newMessage,
            publish_newMessage: publish_newMessage
        };

        return service;

        function subscribe_newMessage(callback) {
            listeners_newMessage.push(callback);
        }

        function publish_newMessage(obj) {
            angular.forEach(listeners_newMessage, function(value, key) {
                value(obj);
            });
        }


    }

})();

