
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http) {
    var sCtrl = this;

    sCtrl.test = "coucou";

    console.log(sCtrl.test)

    JoueurService.modify();


});