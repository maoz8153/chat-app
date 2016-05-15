(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('socketFactory', socketFactory);

    socketFactory.$inject = ['$q', 'eventEmitter'];
    function socketFactory($q, eventEmitter) {

        var promise_array = [];
        var socket = io.connect();
        var service = {
            emitNewMessageToServer : emitNewMessageToServer,
            emitNewUserToServer : emitNewUserToServer
        };

        return service;


        function emitNewMessageToServer(message) {
            socket.emit('send message', message);
        }

        function emitNewUserToServer(user) {
            var newUserPromise = $q.defer();
            var userPromiseIndex = savePromiseAndReturnIndex(newUserPromise);
            socket.emit('new user', user, userPromiseIndex);
            return newUserPromise.promise;
        }

        function savePromiseAndReturnIndex(promiseObj) {
            promise_array.push(promiseObj);
            return (promise_array.length - 1);
        }

        function sendNewUserConfrimation(index) {
            var confrimPromise = promise_array.splice(index , 1);
            confrimPromise.resolve();
        }

        socket.on('new message', function (message) {
            eventEmitter.publish_newMessage(message);
        });

        socket.on('confirm new user', function (userPromiseIndex) {
            sendNewUserConfrimation(userPromiseIndex);
        });



    }

})();

