angular.module('novemlab').controller('N7Controller', function(EtapeService, JoueurService, $window, apiUrl, $scope, $state, $http) {

    var n7Ctrl = this;

    n7Ctrl.etape = {};
    n7Ctrl.score = {};
    n7Ctrl.choices = [];
    /* Sortable niveau 5 */

    var liste = $( "#sortable" ).sortable();
    liste.disableSelection();

    /*insére dans la liste les réponse possible*/
    n7Ctrl.niveau = "7";

    EtapeService.show(n7Ctrl.niveau).then(function(){
        n7Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n7Ctrl.etape.question);
    }).then(setTimeout(function(){$('button.versNiveau').fadeIn("slow");},1000));



    /* Récupère les valeurs de la liste dans l'ordre (niveau 5) */
    $('.versNiveau').click(function(){

        var reverse_i =  3;

        $('.list-group ul#sortable li').each(function(){
            console.log($(this).attr('value'));
            var choice = JSON.parse($(this).attr('value')); // This is your rel value
            if(reverse_i > 0){
                for (var key in choice) {
                    if (choice.hasOwnProperty(key)) {
                        choice[key] *= reverse_i;
                    }
                }
                n7Ctrl.choices[reverse_i] = choice;
            }
            reverse_i--;
        });

        n7Ctrl.score = sumObjectsByKey(n7Ctrl.choices[1],n7Ctrl.choices[2],n7Ctrl.choices[3])

        console.log(n7Ctrl.score);
        save(n7Ctrl.score);
    });

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(res){
            $window.sessionStorage.setItem("score", JSON.stringify(res.data));
            console.log("Score updated !");
           $window.location.href = "/save";
        })
    }

    function sumObjectsByKey(...objs) {
        return objs.reduce((a, b) => {
          for (let k in b) {
            if (b.hasOwnProperty(k))
              a[k] = (a[k] || 0) + b[k];
          }
          return a;
        }, {});
      }

});
