angular.module('novemlab').controller('N7Controller', function(EtapeService, JoueurService, $window, apiUrl, $scope, $state, $http) {

    var n7Ctrl = this;

    n7Ctrl.etape = {};
    n7Ctrl.score = {};

    n7Ctrl.niveau = "7";

    EtapeService.show(n7Ctrl.niveau).then(function(){
      n7Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
      $("#novemText").html(n7Ctrl.etape.question);
      showMessage();
      for (i=0;i<=5;i++){
        var cmpt = i+1;
        var prop = n7Ctrl.etape.propositions[i].reponse;
          var elem=$("#prop"+cmpt);
          elem.append(prop);
          elem[0].setAttribute('value',n7Ctrl.etape.propositions[i].competence);
      }
      //init();
    });


      /* Sortable niveau 7 */
    $("#sortable1b li").addClass('green');
    $("#sortable2b li").addClass('red');
    $("#sortable1b, #sortable2b").sortable({
        connectWith: ".connectedSortable",
        stop: function () {
            var lis = $('#sortable1b li').add('#sortable2b li');
            $(lis).each(function () {
                if ($(this).index('li') <= 2) {
                    $(this).removeClass('red ui-state-highlight').addClass('green ui-state-default');
                } else {
                    $(this).removeClass('green ui-state-default').addClass('red ui-state-highlight');
                }
            });
        }
    }).disableSelection();


    $(".versNiveau").on("click",function(){
        var reverse_i =  $('#sortable1b li').length;

        $('#sortable1b li').each(function(){
            var choice = $(this).attr('value'); // This is your rel value
            n7Ctrl.score[choice] = reverse_i;
            reverse_i--;
        });

        save(n7Ctrl.score);

    });

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(){
            $window.location.href = "/save";
        })
    }
  
});