angular.module('novemlab').controller('NFController', function(EtapeService, apiUrl, $scope, $state, $http, $window) {
    var nfCtrl = this;

    nfCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    nfCtrl.score = JSON.parse($window.sessionStorage.getItem("score"));
    nfCtrl.joueurName = nfCtrl.joueur;

    var scoreTab = [];
    scoreTab[0] = nfCtrl.score.management;
    scoreTab[1] = nfCtrl.score.communication;
    scoreTab[2] = nfCtrl.score.business;
    scoreTab[3] = nfCtrl.score.gestion;
    scoreTab[4] = nfCtrl.score.conception;
    scoreTab[5] = nfCtrl.score.technique;

    nfCtrl.etape = {};

    /*insére dans la liste les réponse possible*/
    nfCtrl.niveau = "9";

    var dataSetIM =
    {label : 'Profil IM',
    data: [22,22,22,22,22,22],
    borderWidth: 1,
    backgroundColor:'rgba(0,0,255,0.6)',
    pointBackgroundColor:'rgba(0,0,255,1)',
    pointRadius:2};

    EtapeService.show(nfCtrl.niveau).then(function(){
        nfCtrl.etape = EtapeService.getEtape();
    });
});
