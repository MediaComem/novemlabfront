
angular.module('novemlab', [
    'ui.router'
]);


angular.module('novemlab')
    .constant('apiUrl', '/api-proxy')
;


angular.module('novemlab').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    // This is the abstract state for the tabs directive.
    .state('niveau2', {
        url: '/n2',
        controller: 'EtapeController',
        controllerAs: 'etapeCtrl',
        templateUrl: 'views/niveau2.jade'
    })

});