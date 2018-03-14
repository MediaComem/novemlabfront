angular.module('novemlab').controller('N6Controller', function(EtapeService,JoueurService, $window, apiUrl, $scope, $state, $http) {
    var n6Ctrl = this;

    n6Ctrl.score = {};
    n6Ctrl.niveau = "6";
    /* Sortable niveau 5 */

    EtapeService.show(n6Ctrl.niveau).then(function(){
        n6Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n6Ctrl.etape.question);
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
            $window.location.href = "/n7";
        })

    }

});