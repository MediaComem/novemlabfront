angular.module('novemlab').controller('N5Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n5Ctrl = this;

    n5Ctrl.etape = {};
    n5Ctrl.score = {};
    /* Sortable niveau 5 */

    var liste = $( "#sortable" ).sortable();
    liste.disableSelection();

    /*insére dans la liste les réponse possible*/
    n5Ctrl.niveau = "5";

    EtapeService.show(n5Ctrl.niveau).then(function(){
        n5Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n5Ctrl.etape.question);
        showMessage()
    });



    /* Récupère les valeurs de la liste dans l'ordre (niveau 5) */
    $('.versNiveau').click(function(){

        var reverse_i =  $('.projet1 ul#sortable li').length;

        $('.projet1 ul#sortable li').each(function(){
            var choice = $(this).attr('value'); // This is your rel value
            n5Ctrl.score[choice] = reverse_i;
            reverse_i--;
        });

        save(n5Ctrl.score);
    });

    var save =function(score){
        JoueurService.updateScorePhase2(score).then(function(){
            $window.location.href = "/nF/6";
        })

    }

});

