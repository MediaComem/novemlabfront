
angular.module('novemlab', [
    'ui.router'
]);


angular.module('novemlab')
    .constant('apiUrl', 'https://cryptic-hamlet-61352.herokuapp.com/')
    .constant('mapboxSecret', '@mapboxSecret@')
;

/*angular.module('novemlab').config(['$stateProvider',function($stateProvider) {

    $stateProvider
    // This is the abstract state for the tabs directive.
        .state('index', {
            url: '/',
            views: {
                'index': {
                    // This defines the template that will be inserted into the directive.
                    templateUrl: 'index'
                }}
        })

}])*/