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
                console.log('message in timeout');
                vm.messages.push(message);
                console.log(vm.messages);
            });
        });

        socket.on('confirm new user', function (data) {
            console.log('confirm new user');
            serverEvents.confirmUsername();
        });


        function sendMessage() {
            var messageObj = {
                text : vm.inputMessage,
                username : vm.user.name,
                image : vm.user.image,
                date : Date.now
            };
            serverEvents.emitNewMessageToServer(messageObj);
            $timeout(function () {
                vm.inputMessage = '';
            });
        }


    }
})();
