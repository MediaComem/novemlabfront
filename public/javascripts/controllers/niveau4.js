
angular.module('novemlab').controller('N4Controller', function(JoueurService, EtapeService, $scope, $state, $http, $window) {
    var n4Ctrl = this;

    n4Ctrl.etape = {};
    n4Ctrl.niveau = "4";

    EtapeService.show(n4Ctrl.niveau).then(function(){
        n4Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n4Ctrl.etape.question);
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
        JoueurService.updateScorePhase1(score).then(function(res){
            $window.location.href = "/n5";
        })

    }

});