(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('chatBox', {
            templateUrl : 'app/layout/chat-box/chat-box.template.html',
            controller: 'chatBox',
            controllerAs: 'vm'
        });

})();
