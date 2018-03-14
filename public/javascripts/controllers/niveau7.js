angular.module('novemlab').controller('N7Controller', function(EtapeService, JoueurService, $window, apiUrl, $scope, $state, $http) {

    var n7Ctrl = this;

    n7Ctrl.etape = {};
    n7Ctrl.score = {};
    /* Sortable niveau 5 */

    var liste = $( "#sortable" ).sortable();
    liste.disableSelection();

    /*insére dans la liste les réponse possible*/
    n7Ctrl.niveau = "7";

    EtapeService.show(n7Ctrl.niveau).then(function(){
        n7Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n7Ctrl.etape.question);
        showMessage()
    });



    /* Récupère les valeurs de la liste dans l'ordre (niveau 5) */
    $('.versNiveau').click(function(){

        var reverse_i =  $('.projet1 ul#sortable li').length;

        $('.projet1 ul#sortable li').each(function(){
            var choice = $(this).attr('value'); // This is your rel value
            n7Ctrl.score[choice] = reverse_i;
            reverse_i--;
        });

        save(n7Ctrl.score);
    });

    var save =function(score){
        JoueurService.updateScorePhase2(score).then(function(){
            $window.location.href = "/save";
        })
    }
  
});