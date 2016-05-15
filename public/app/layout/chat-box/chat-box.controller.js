(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('chatBox', chatBox);

    chatBox.$inject = ['socketFactory','eventEmitter', 'userSession', '$timeout'];

    function chatBox(socketFactory, eventEmitter, userSession, $timeout) {
        /* jshint validthis: true */
        var vm = this;
        vm.messages = [];
        vm.user = userSession.getUser();
        vm.inputMessage;
        vm.sendMessage = sendMessage;

        eventEmitter.subscribe_newMessage(function(message) {
                $timeout(function () {
                    vm.messages.push(message);
                });
        });

        function sendMessage() {
            var messageObj = {
                message : vm.inputMessage,
                user : vm.user
            };
            socketFactory.emitNewMessageToServer(messageObj);
            $timeout(function () {
                vm.inputMessage = '';
            });
        }


    }
})();
