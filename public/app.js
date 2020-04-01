
angular.module('novemlab', [
    'ui.router'
]);

angular.module('novemlab')
    // Retrieve the API URL from the DOM.
    .constant('apiUrl', $('meta[name="apiUrl"]').attr('content') || '/api')
;
