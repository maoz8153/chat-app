(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('randomUserAvatar', randomUserAvatar);

    randomUserAvatar.$inject = ['$http' , '$q'];

    function randomUserAvatar($http, $q) {



        var service = {
            getRandomAvatar : getRandomAvatar
        };

        return service;


        function getRandomAvatar() {
            return getAvatar().then(function (data) {
                return data.data.results[0].picture.thumbnail;
            });
        }

        function getAvatar() {
            return $http({
                url: 'https://randomuser.me/api/',
                method: "GET",
                dataType: 'json'
                })
                .then(function (res) {
                    if(!res){
                        return $q.reject('error');
                    }
                            return res;
                    });
            }



    }

})();


