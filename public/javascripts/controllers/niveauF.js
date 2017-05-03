angular.module('novemlab').controller('NFController', function(EtapeService, apiUrl, $scope, $state, $http) {
    var nfCtrl = this;

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
        data: [26, 4, 18, 2, 8, 11],
        pointPlacement: 'on'
    }]

});
  
});