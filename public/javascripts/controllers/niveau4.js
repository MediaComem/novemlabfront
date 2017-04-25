
angular.module('novemlab').controller('N4Controller', function(apiUrl, $scope, $state, $http) {
    var n4Ctrl = this;

    n4Ctrl.test = "coucou";

    console.log(n4Ctrl.test);

});