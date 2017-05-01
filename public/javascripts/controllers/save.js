
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http) {
    var sCtrl = this;

    sCtrl.test = "coucou";

    //appel au service//
    JoueurService.showAll().then(function(){    console.log(JoueurService.getJoueurs());
    });


});