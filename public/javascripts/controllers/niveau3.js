angular.module('novemlab').controller('N3Controller', function(apiUrl, $scope, $state, $http) {
    var n3Ctrl = this;

    n3Ctrl.test = "coucou";

    console.log(n3Ctrl.test);

});