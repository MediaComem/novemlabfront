angular.module('novemlab').controller('N2Controller', function(JoueurService, EtapeService, NovemService, apiUrl, $scope, $state, $http, $window) {
    var n2Ctrl = this;

    n2Ctrl.algoName1 = "Algo1.js";
    n2Ctrl.algoName2 = "Algo2.js";
    n2Ctrl.algoName3 = "Algo3.js";
    n2Ctrl.score ={};

    var divCode = $(".code");
    var divInnerCode = $("code");
    var labelCode = $(".code label");

    var algo1;
    var algo2;
    var algo3;


    n2Ctrl.etape = {};
    n2Ctrl.niveau = "2";

    EtapeService.show(n2Ctrl.niveau).then(function(){
        n2Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        algo1 = n2Ctrl.etape.propositions[0].reponse;
        algo2 = n2Ctrl.etape.propositions[1].reponse;
        algo3 = n2Ctrl.etape.propositions[2].reponse;
        $("#novemText").html(n2Ctrl.etape.question);
        showMessage();
        init();
    });

    init = function(){

            labelCode.html(n2Ctrl.algoName1);
            divInnerCode.html(algo1);

            setTimeout(function(){
                divCode.fadeIn();
                divInnerCode.fadeIn();
            },2000);
        }




    $("#algo1").on("click",function(){
        divInnerCode.html(algo1);
        labelCode.html(n2Ctrl.algoName1);
        $(".active").attr("class","");
        $("#algo1").attr("class","active");
    })
    $("#algo2").on("click",function(){
        divInnerCode.html(algo2);
        labelCode.html(n2Ctrl.algoName2);
        $(".active").attr("class","");
        $("#algo2").attr("class","active");
    })
    $("#algo3").on("click",function(){
        divInnerCode.html(algo3);
        labelCode.html(n2Ctrl.algoName3);
        $(".active").attr("class","");
        $("#algo3").attr("class","active");
    });

    $(".versNiveau").on("click",function(){
        choix = $("li.active");
        n2Ctrl.score = choix.attr('value')
        save(n2Ctrl.score)
    });

    var save =function(score){
            JoueurService.updateScorePhase1(score).then(function(res) {
                $window.sessionStorage.setItem("score", JSON.stringify(res.data));
                console.log("Score updated !");
                $window.location.href = "/n3";
            }).catch(function() {
                n2Ctrl.error = 'Could not edit score';
            })
    }




});

