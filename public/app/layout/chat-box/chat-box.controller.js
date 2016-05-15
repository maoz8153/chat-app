(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('chatBox', chatBox);

    chatBox.$inject = ['socket' ,'serverEvents','eventEmitter', 'userSession', '$timeout'];

    function chatBox(socket ,serverEvents, eventEmitter, userSession, $timeout) {
        /* jshint validthis: true */
        var vm = this;
        vm.messages = [];
        vm.user = userSession.getUser();
        vm.inputMessage;
        vm.sendMessage = sendMessage;

        socket.on('new message', function (message) {
            $timeout(function () {
                vm.messages.push(message);
            });
        });


        function sendMessage() {
            var messageObj = {
                text : vm.inputMessage,
                username : vm.user
            };
            serverEvents.emitNewMessageToServer(messageObj);
            $timeout(function () {
                vm.inputMessage = '';
            });
        }


    }
})();
