
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http, $window) {
    var sCtrl = this;

    sCtrl.update = {};
    sCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));

    /*$(".endButton").on("click",function(){
        $window.location.href = "/profile";
    });*/

    sCtrl.save = function(){
        sCtrl.update.email = sCtrl.email;
        JoueurService.modify(sCtrl.update).then(function(){
            $window.location.href = "/profile";
        }).catch(function(){
            sCtrl.error = "Email invalide ou joueur introuvable";
        })
    }


});