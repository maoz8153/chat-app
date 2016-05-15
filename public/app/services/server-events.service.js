(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('serverEvents', serverEvents);

    serverEvents.$inject = ['$rootScope', '$q', 'eventEmitter', 'socket'];
    function serverEvents($rootScope, $q, eventEmitter, socket) {

        var promise_array = [];

        $rootScope.$on('new message', function (message) {
            console.log('recive new message from server');
            eventEmitter.publish_newMessage(message);
        });

        $rootScope.$on('confirm new user', function (userPromiseIndex) {
            console.log('confirm new user');
            sendNewUserConfrimation(userPromiseIndex);
        });

        var service = {
            emitNewMessageToServer : emitNewMessageToServer,
            emitNewUserToServer : emitNewUserToServer
        };

        return service;


        function emitNewMessageToServer(message) {
            console.log('send message to server');
            socket.emit('send message', message);
        }


        socket.on('new message', function (message) {
            console.log('recive new message from server');
            eventEmitter.publish_newMessage(message);
        });

        socket.on('confirm new user', function (userPromiseIndex) {
            console.log('confirm new user');
            sendNewUserConfrimation(userPromiseIndex);
        });

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
             console.log('confirm new user - remove promise');
            var confrimPromise = promise_array.splice(index , 1);
            confrimPromise.resolve();
        }





    }

})();

