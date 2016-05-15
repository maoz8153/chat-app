
(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('socket', socket);

    socket.$inject = ['socketFactory'];
    function socket(socketFactory) {
        var myIoSocket = io.connect();

            var mySocket = socketFactory({
                ioSocket: myIoSocket
            });

            return mySocket;
    }

})();

