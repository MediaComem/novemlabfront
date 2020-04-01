/**
 * Created by Romain on 14.03.2017.
 */

angular.module('novemlab').controller('IntroControler', function(EtapeService,JoueurService, apiUrl, $scope, $state, $http, $window) {

    /**
     * Définition des variables
     */
    var iCtrl = this;
    iCtrl.niveau = 0;
    iCtrl.etape ={};

    /**
     * Déclarations MOJS
     * @type {*}
     */
    const meteors = new mojs.Burst({
        zIndex:100,
        left: 0, top: 0,
        count:    5,
        radius:   { 0: 250 },
        children: {
            shape:        'line',
            stroke:       ['#92b5f9', '#b7e1fc', '#c7daff','#cefef2','#b7e1fc'],
            duration:     500,
            radius:       60,
            strokeWidth:  5,
            isForce3d:    true
        }
    });
    meteors.el.style.zIndex = 101;

    iCtrl.init = function(){
        $(".button").on("click", function(e){
                EtapeService.show(iCtrl.niveau).then(function(){
                    iCtrl.etape = EtapeService.getEtape();
                }).then(function(){
                    setTimeout(function(){
                    $(".stage").show();
                    $("#novemText").html(iCtrl.etape.question);
                        showMessage();
                    },5000);
                });
        });

    };

    iCtrl.start = function() {
        JoueurService.create(iCtrl.joueur).then(function (res) {
            console.log("Register done !");
            $window.sessionStorage.setItem("joueur", JSON.stringify(res.data.pseudo));
            $window.sessionStorage.setItem("joueurId", JSON.stringify(res.data._id));

            JoueurService.createScore(res.data._id).then(function (res) {
                $window.sessionStorage.setItem("score", JSON.stringify(res.data));
                $window.location.href = "/welcome";

            }).catch(function () {
                iCtrl.error = 'Could not create score';
            });
        }).catch(function () {
            iCtrl.error = 'Erreur : Veuillez vérifier le champ';
        });
    };


    iCtrl.init();

});
