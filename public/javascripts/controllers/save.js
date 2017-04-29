
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http) {
    var sCtrl = this;

    sCtrl.test = "coucou";

    //appel au service//
    JoueurService.showAll().then(function(){    console.log(JoueurService.getJoueurs());
    });

    /*$(".endButton").on("click",function(){
        console.log("ok le bouton");
    });*/

    console.log(sCtrl.test)
});