(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('userSession', userSession);

        userSession.$inject = ['serverEvents', 'randomUserAvatar', '$q'];
        function userSession(serverEvents, randomUserAvatar, $q) {


            var user = {
                name : null,
                image : null
            };

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
                var userPromise = $q.defer();
                if (localStorage.chatBoxSession) {
                    user =  JSON.parse(localStorage.chatBoxSession);
                } else {
                    user.name = generateUsername();
                    randomUserAvatar.getRandomAvatar().then(function (data) {
                        user.image = data;
                        serverEvents.emitNewUserToServer(user, userPromise).then(function () {
                         saveUserToLocalstorage();
                         console.log('user save ---- ' + user);
                        });
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

