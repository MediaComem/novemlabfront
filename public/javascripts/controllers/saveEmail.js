
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http, $window) {
    var sCtrl = this;

    sCtrl.update = {};
    sCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    sCtrl.etape = {};

    sCtrl.save = function(){
        if(sCtrl.email){
            sCtrl.update = {
                email: sCtrl.email,
                newsletter: sCtrl.newsletter === undefined ? false : true
            }
            JoueurService.modify(sCtrl.update).then(function(){
                // $window.location.href = "/profile";
            }).catch(function(){
                sCtrl.error = "E-mail invalide ou joueur introuvable";
            })
        }else{
            $window.location.href = "/profile";
        }
    }


});
