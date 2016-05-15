(function () {
    'use strict';
    angular
        .module('app.config')
        .run(run);

    run.$inject = ['userSession'];
    function run (userSession) {
        userSession.setUser();
    }

})();

