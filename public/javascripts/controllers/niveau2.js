angular.module('novemlab').controller('N2Controller', function(JoueurService, EtapeService, NovemService, apiUrl, $scope, $state, $http, $window) {
    var n2Ctrl = this;

    n2Ctrl.score ={};

    var r1;
    var r2;
    var r3;


    n2Ctrl.etape = {};
    n2Ctrl.niveau = "2";

    EtapeService.show(n2Ctrl.niveau).then(function(){
        n2Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        n2Ctrl.r1 = n2Ctrl.etape.propositions[0].reponse;
        n2Ctrl.r2 = n2Ctrl.etape.propositions[1].reponse;
        n2Ctrl.r3 = n2Ctrl.etape.propositions[2].reponse;
        $("#novemText").html(n2Ctrl.etape.question);
        showMessage();
    });


    $('.onglets').on('click', 'li', function() {
        $('.onglets li.active').removeClass('active');
        $(this).addClass('active');
        $("button.versNiveau").fadeIn(2000);
    });

    $(".versNiveau").on("click",function(){
        choix = $("li.active");
        n2Ctrl.score = choix.attr('value')
        save(n2Ctrl.score)
        console.log(n2Ctrl.score);
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

