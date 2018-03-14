angular.module('novemlab').controller('NFController', function(EtapeService, apiUrl, $scope, $state, $http, $window) {
    var nfCtrl = this;

    nfCtrl.test = "coucou";
    nfCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    nfCtrl.score = JSON.parse($window.sessionStorage.getItem("score"));
    console.log(nfCtrl.score);

    var scoreTab = [];
    scoreTab[0] = {y:nfCtrl.score.business,color:'#148D82',fillColor:'#148D82'};
    scoreTab[1] = {y:nfCtrl.score.gestion,color:'#148D82',fillColor:'#148D82'};
    scoreTab[2] = {y:nfCtrl.score.communication,color:'#E79043',fillColor:'#E79043'};
    scoreTab[3] = {y:nfCtrl.score.marketing,color:'#E79043',fillColor:'#E79043'};
    scoreTab[4] = {y:nfCtrl.score.technique,color:'#8DC357',fillColor:'#8DC357'};

    console.log(scoreTab);

    nfCtrl.etape = {};

/* Dessine le graph de fin */
Highcharts.chart('profil', {

    chart: {
        polar: true,
        height: 700
    },

    pane: {
        size: '80%',

    },

    xAxis: {
        categories: ['business', 'gestion', 'communication', 'marketing',
                'technique'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels:{
            formatter: function () {
                switch(this.value) {
                    case 'business':
                        return '<span style="color:#148D82">'+this.value+'</span>';
                    case 'gestion':
                        return '<span style="color:#148D82">'+this.value+'</span>';
                    case 'communication':
                        return '<span style="color:#E79043">'+this.value+'</span>';
                    case 'marketing':
                        return '<span style="color:#E79043">'+this.value+'</span>';
                    case 'technique':
                        return '<span style="color:#8DC357">'+this.value+'</span>';
                    default:
                        return '<span style="color:#fff">'+this.value+'</span>';
                }
            }
        }
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
        layout: 'vertical',
    },

    series: [{
        type:'area',
        name: 'Points',
        data: scoreTab,
        pointPlacement: 'on',
        color:'#fff'
    }]

});

    $(".versNiveau").on("click",function(){
        $window.location.href = "/";
    });

});