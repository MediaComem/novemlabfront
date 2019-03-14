angular.module('novemlab').controller('NFController', function(EtapeService, apiUrl, $scope, $state, $http, $window) {
    var nfCtrl = this;
    var step = 1;
    var totSteps = 3;
    var chart;
    nfCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    nfCtrl.score = JSON.parse($window.sessionStorage.getItem("score"));
    nfCtrl.titre = "Profil de " + nfCtrl.joueur;
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
    }).then(function(){ 
        setTimeout(function(){
            $('.end-step1').fadeIn("slow");
            setTimeout(function(){
                chart = drawChart();
                setTimeout(function(){
                    $('.end-step2').fadeIn("slow");
                    setTimeout(function(){
                        $('.versNiveau').fadeIn("slow");
                    },2500)
                },2500)
            },1000)

        },1000)
    });

    var graph = document.getElementById('profil');
    var drawChart = function() {
        var myChart = new Chart(graph, {
            type: 'radar',
            data: {
                labels: ["Management de contenus", "Communication & Marketing digital", "Stratégie et Modèles d'affaire", "Gestion de projet numérique", "Conception UX & Design Thinking", "Programmation web et mobile"],
                datasets: [{
                    label: 'Votre profil',
                    data: scoreTab,
                    borderWidth: 1,
                    backgroundColor:'rgba(255,255,255,0.6)',
                    pointBackgroundColor:'rgba(255,255,255,1)',
                    pointRadius:2
                    }]
            },
            options: {
                startAngle: 30,
                elements:{
                    line: {
                        tension:0,

                    }
                },
                legend:{
                    labels:{
                        fontSize:24,
                        fontColor: 'white'
                    },
                },
                scale: {
                    angleLines:{
                        color:"white"
                    },
                    beginAtZero:true,
                    ticks: {
                        min:0,
                        max:20,
                        display:false,
                        stepSize:10,
                        fontColor:"white"
                    },
                    gridLines:{
                        color:"white"
                    },
                    pointLabels: {
                        fontColor:"white",
                        fontSize: 16		
                    },
                    yAxes: [{
                    }],
                    xAxes: [{
                    }]
                },
                animation:{
                    duration:1000,
                    easing:'easeInQuart'
                }
            }
        });
        return myChart;
    }
    /*function makeid() {
        var text = "";
        var possible = "ABDEFGHIJLMNOPQRSTVWXYZ0123456789";
    
        for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }*/

    $(".versNiveau").on("click",function(){
        if(step <= totSteps){
            switch(step){
                case 1:
                    $('.versNiveau').hide();
                    $('.end-step1').fadeOut("fast");
                    $('.end-step2').fadeOut("fast");
                    $('#endTitle').text("Profil de l'ingénieur·e des médias");
                    setTimeout(function(){
                        $('.end-step3').fadeIn("slow");
                    },1000);
                    //chart.data.datasets.splice(0);
                    chart.options.scale.ticks.max = 40;
                    chart.data.datasets.push(dataSetIM);
                    chart.update();
                    setTimeout(function(){
                        $('.versNiveau').fadeIn("slow");
                    },2500)
                    step++;
                    break;
                case 2:
                    $('.versNiveau').hide();
                    $('#endTitle').text("Perspectives professionnelles");
                    $('.end-step3').fadeOut("fast");
                    chart.data.datasets.splice(0,1);
                    dataSetIM.label = "Évolutions";
                    chart.update();
                    var dataLoop = window.setInterval(randomizeData, 2000);
                    setTimeout(function(){
                        $('.end-step4').fadeIn("slow");
                    },1000);
                    setTimeout(function(){
                        $('.versNiveau').fadeIn("slow");
                    },2500)
                    step++;
                    break;
                case 3:
                    $('.versNiveau').hide();
                    window.clearInterval(dataLoop);
                    $('#profil').hide();
                    $('.end-step4').hide();
                    $('.formSup').fadeIn("slow");
                    $('.end-step5').fadeIn("slow");
                    $('.versNiveau').html("Fin");
                    setTimeout(function(){
                        $('.versNiveau').fadeIn("slow");
                    },2500)
                    step++;
                    break;
                default:
                    break;
            }
        }else{
            $window.location.href = "/end";
        }
    });


    function randomizeData() {
        let newData = dataSetIM.data.map(x => Math.floor(Math.random() * (38-18)+18));
        dataSetIM.data = newData
        chart.update();
      };

});