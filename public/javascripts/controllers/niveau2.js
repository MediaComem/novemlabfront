angular.module('novemlab').controller('N2Controller', function(JoueurService, EtapeService, NovemService, apiUrl, $scope, $state, $http, $window) {
    var n2Ctrl = this;

    n2Ctrl.score ={};

    var r1;
    var r2;
    var r3;


    n2Ctrl.etape = {};
    n2Ctrl.niveau = "2";
    $('button.versNiveau').hide();

    EtapeService.show(n2Ctrl.niveau).then(function(){
        n2Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n2Ctrl.etape.question);
        showMessage();
    });

    $(document).ready(function () {
        $(document).on("click", 'a.list-group-item', function(e){
            $('.active').removeClass('active');
            // add active class to clicked element
            $(this).addClass('active');
            $('.versNiveau').fadeIn("slow");

        })
    });
    

    $(".versNiveau").on("click",function(){
        choix = $("a.list-group-item.active");
        score = choix.attr('value');
        save(score);
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

