angular.module('novemlab').controller('N2Controller', function(apiUrl, $scope, $state, $http) {
    var n2Ctrl = this;

    n2Ctrl.test = "coucou";

    console.log(n2Ctrl.test);

});