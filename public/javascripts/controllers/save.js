
angular.module('novemlab').controller('SaveController', function(apiUrl, $scope, $state, $http) {
    var sCtrl = this;

    sCtrl.test = "coucou";

    console.log(sCtrl.test)
});