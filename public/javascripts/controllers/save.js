
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http) {
    var sCtrl = this;

    sCtrl.test = "coucou";

<<<<<<< HEAD
    console.log(sCtrl.test)

    JoueurService.modify();
=======
    //appel au service//
    JoueurService.showAll().then(function(){    console.log(JoueurService.getJoueurs());
    });
>>>>>>> 3f661b82152007f5f3b810b9e20d7b9088b48bd8


});