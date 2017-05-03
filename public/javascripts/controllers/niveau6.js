angular.module('novemlab').controller('N6Controller', function(EtapeService,JoueurService, $window, apiUrl, $scope, $state, $http) {
    var n6Ctrl = this;

    n6Ctrl.etape = {};
    n6Ctrl.score = {};

    n6Ctrl.niveau = "6";

    EtapeService.show(n6Ctrl.niveau).then(function(){
      n6Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
      $("#novemText").html(n6Ctrl.etape.question);
      showMessage();
      for (i=0;i<=3;i++){
        var cmpt = i+1;
        var prop = n6Ctrl.etape.propositions[i].reponse;
        var elem=$("#prop"+cmpt);
        elem.append(prop);
        elem[0].setAttribute('value',n6Ctrl.etape.propositions[i].competence);
      }
      //init();
    });

      /* Sortable niveau 6 */
    $("#sortable1 li").addClass('green');
    $("#sortable2 li").addClass('red');
    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable",
        stop: function () {
            var lis = $('#sortable1 li').add('#sortable2 li');
            $(lis).each(function () {
                if ($(this).index('li') <= 1) {
                    $(this).removeClass('red ui-state-highlight').addClass('green ui-state-default');
                } else {
                    $(this).removeClass('green ui-state-default').addClass('red ui-state-highlight');
                }
            });
        }
    }).disableSelection();

  

  $(".versNiveau").on("click",function(){
      var reverse_i =  $('#sortable1 li').length;

      $('#sortable1 li').each(function(){
          var choice = $(this).attr('value'); // This is your rel value
          n6Ctrl.score[choice] = reverse_i;
          reverse_i--;
      });
      save(n6Ctrl.score);

    });

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(){
            $window.location.href = "/nF/7";
        })
    }

});