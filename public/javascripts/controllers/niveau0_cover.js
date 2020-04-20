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

    iCtrl.start = function() {
        JoueurService.create(iCtrl.joueur).then(function (res) {
            console.log("Register done !");
            $window.sessionStorage.setItem("joueur", JSON.stringify(res.data.pseudo));
            $window.sessionStorage.setItem("joueurId", JSON.stringify(res.data._id));

            JoueurService.createScore(res.data._id).then(function (res) {
                $window.sessionStorage.setItem("score", JSON.stringify(res.data));
                $window.location.href = "/n/1";

            }).catch(function () {
                iCtrl.error = 'Could not create score';
            });
        }).catch(function () {
            iCtrl.error = 'Erreur : Veuillez vérifier le champ';
        });
    };
});
