
angular.module('novemlab').controller('NFController', function(apiUrl, $scope, $state, $http) {
    var nfCtrl = this;

    nfCtrl.test = "coucou";

    console.log(nfCtrl.test);

});