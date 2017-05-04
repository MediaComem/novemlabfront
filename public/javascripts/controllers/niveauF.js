angular.module('novemlab').controller('NFController', function(EtapeService, apiUrl, $scope, $state, $http, $window) {
    var nfCtrl = this;

    nfCtrl.test = "coucou";
    nfCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    nfCtrl.score = JSON.parse($window.sessionStorage.getItem("score"));
    console.log(nfCtrl.score);

    console.log(nfCtrl.score.coding);

    var scoreTab = [];
    scoreTab[0] = nfCtrl.score.business;
    scoreTab[1] = nfCtrl.score.coding;
    scoreTab[2] = nfCtrl.score.communication;
    scoreTab[3] = nfCtrl.score.management;
    scoreTab[4] = nfCtrl.score.marketing;
    scoreTab[5] = nfCtrl.score.multimedia;

    console.log(scoreTab);

    nfCtrl.etape = {};

/* Dessine le graph de fin */
Highcharts.chart('profil', {

    chart: {
        polar: true,
        type: 'line',
        height: 600
    },
    title: {
        text: 'Voici votre profil de superhéros',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Business', 'Coding', 'Communication', 'Management',
                'Marketing', 'Multimédia'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        name: 'Points',
        data: scoreTab,
        pointPlacement: 'on'
    }]

});

    $(".versNiveau").on("click",function(){
        $window.location.href = "/";
    });

});