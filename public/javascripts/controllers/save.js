
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http, $window) {
    var sCtrl = this;

    sCtrl.test = "coucou";
    sCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    sCtrl.score = JSON.parse($window.sessionStorage.getItem("score"));
    console.log(sCtrl.score);

    //appel au service//
    JoueurService.showAll().then(function(){    console.log(JoueurService.getJoueurs());
    });


    /*$(".endButton").on("click",function(){
        $window.location.href = "/profile";
    });*/


    sCtrl.email;


    sCtrl.update = {};

    sCtrl.update.email = sCtrl.joueur.email;

    var setEmail = function(){
        JoueurService.modify(sCtrl.update.email).then(function(){
            console.log
        })
    }


});