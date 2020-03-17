
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
    $(".next").hide();
    $(".alert").hide();

    EtapeService.show(sCtrl.niveau).then(function(){
        sCtrl.etape = EtapeService.getEtape();
    }).then(function(){ 
        $("#novemText").html(sCtrl.etape.question);
        showMessage()
    }).then(setTimeout(function(){$('.next').fadeIn("fast");},2));

    sCtrl.save = function(){

        if(sCtrl.allowEmail){
            if(sCtrl.email){
                sCtrl.update.email = sCtrl.email;
                JoueurService.modify(sCtrl.update).then(function(){
                    $window.location.href = "/profile";
                }).catch(function(){
                    sCtrl.error = "E-mail invalide ou joueur introuvable";
                    $(".alert").fadeIn("fast");
                })
            }else{
                sCtrl.error = "Veuillez renseigner votre adresse e-mail"
                $(".alert").fadeIn("fast");
            }
            
        }else{
            $window.location.href = "/profile";
        }
    }


});