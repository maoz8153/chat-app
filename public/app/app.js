(function () {
    'use strict';
    angular.module('app', [

        // 3rd Party modules
        'ngAnimate',
        'btford.socket-io',
        'angularMoment',

        // app code modules
        'app.config',
        'app.services',
        'app.layout'

    ]);
})();
