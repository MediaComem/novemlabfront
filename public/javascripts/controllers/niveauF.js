angular.module('novemlab').controller('NFController', function(EtapeService, apiUrl, $scope, $state, $http, $window) {
    var nfCtrl = this;

    nfCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    nfCtrl.score = JSON.parse($window.sessionStorage.getItem("score"));

    var scoreTab = [];
    scoreTab[0] = {y:nfCtrl.score.management,color:'#E79043',fillColor:'#E79043'};   
    scoreTab[1] = {y:nfCtrl.score.communication,color:'#E79043',fillColor:'#E79043'};       
    scoreTab[2] = {y:nfCtrl.score.business,color:'#148D82',fillColor:'#148D82'};
    scoreTab[3] = {y:nfCtrl.score.gestion,color:'#148D82',fillColor:'#148D82'};
    scoreTab[4] = {y:nfCtrl.score.conception,color:'#8DC357',fillColor:'#8DC357'};
    scoreTab[5] = {y:nfCtrl.score.technique,color:'#8DC357',fillColor:'#8DC357'};

    nfCtrl.etape = {};
 
    /*insére dans la liste les réponse possible*/
    nfCtrl.niveau = "9";

    EtapeService.show(nfCtrl.niveau).then(function(){
        nfCtrl.etape = EtapeService.getEtape();
    }).then(function(){ 
        $("#novemText").html(nfCtrl.etape.question);
        showMessage()
    });

    var graph = document.getElementById('profil');
    var myChart = new Chart(graph, {
        type: 'bar',
        data: {
            labels: [nfCtrl.score, "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: scoreTab,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    /*function makeid() {
        var text = "";
        var possible = "ABDEFGHIJLMNOPQRSTVWXYZ0123456789";
    
        for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }*/

    $(".versNiveau").on("click",function(){
        $window.location.href = "/";
    });

});