angular.module('novemlab').controller('N5Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n5Ctrl = this;

    n5Ctrl.score = {};
    n5Ctrl.niveau = "5";
    /* Sortable niveau 5 */

    EtapeService.show(n5Ctrl.niveau).then(function(){
        n5Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n5Ctrl.etape.question);
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
            $window.location.href = "/n6";
        })

    }

});

