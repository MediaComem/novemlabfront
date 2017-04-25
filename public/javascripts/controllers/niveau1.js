
angular.module('novemlab').controller('N1Controller', function(apiUrl, $scope, $state, $http) {
    var n1Ctrl = this;

    n1Ctrl.test = "coucou";

    console.log(n1Ctrl.test);

});