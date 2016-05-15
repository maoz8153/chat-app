(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('userSession', userSession);

        userSession.$inject = ['socketFactory'];
        function userSession(socketFactory) {


            var user;

            var service = {
                saveUserToLocalstorage: saveUserToLocalstorage,
                setUser : setUser,
                getUser : getUser
            };

            return service;

            function saveUserToLocalstorage() {
                localStorage.chatBoxSession = angular.toJson(user);
            }

            function  setUser() {
                if (localStorage.chatBoxSession) {
                    user =  JSON.parse(localStorage.chatBoxSession);
                } else {
                    user = generateUsername();
                    socketFactory.emitNewUserToServer(user).then(function () {
                         saveUserToLocalstorage();
                         console.log('user save ---- ' + user);
                    });
                }
            }

            function getUser() {
                return user;
            }

            function generateUsername() {
                var text = "";
                    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                    for( var i=0; i < 5; i++ )
                        text += possible.charAt(Math.floor(Math.random() * possible.length));

                    return text;
            }


        }

})();

