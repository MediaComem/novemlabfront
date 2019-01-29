
angular.module('novemlab').controller('SaveController', function(EtapeService, JoueurService, apiUrl, $scope, $state, $http, $window) {
    var sCtrl = this;

    sCtrl.update = {};
    sCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    sCtrl.etape = {};
    /*$(".endButton").on("click",function(){
        $window.location.href = "/profile";
    });*/

    /*insére dans la liste les réponse possible*/
    sCtrl.niveau = "8";

    EtapeService.show(sCtrl.niveau).then(function(){
        sCtrl.etape = EtapeService.getEtape();
    }).then(function(){ 
        $("#novemText").html(sCtrl.etape.question);
        showMessage()
    });

    sCtrl.save = function(){
        sCtrl.update.email = sCtrl.email;
        JoueurService.modify(sCtrl.update).then(function(){
            $window.location.href = "/profile";
        }).catch(function(){
            sCtrl.error = "Email invalide ou joueur introuvable";
        })
    }


});