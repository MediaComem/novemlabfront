
angular.module('novemlab').controller('SaveController', function(JoueurService, apiUrl, $scope, $state, $http, $window) {
    var sCtrl = this;

    sCtrl.update = {};
    sCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    sCtrl.etape = {};

    sCtrl.save = function(){
        if(sCtrl.email !== ''){
            const form = document.getElementById("saveEmailForm");

            if (form.checkValidity()) {
                sCtrl.update = {
                    email: sCtrl.email,
                    newsletter: sCtrl.newsletter === undefined ? false : true
                }
                JoueurService.modify(sCtrl.update).then(function () {
                    $window.location.href = "/profile";
                })
            }
        }else{
            $window.location.href = "/profile";
        }
    }


});
