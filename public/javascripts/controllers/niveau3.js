
angular.module('novemlab').controller('N3Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n3Ctrl = this;


    n3Ctrl.etape = {};
    n3Ctrl.niveau = "3";
    n3Ctrl.score = {};
    n3Ctrl.choices = [];
    
    var liste = $( "#sortable" ).sortable();    
    liste.disableSelection();

    EtapeService.show(n3Ctrl.niveau).then(function(){
        n3Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n3Ctrl.etape.question);
        showMessage();
    }).then(setTimeout(function(){$('button.versNiveau').fadeIn("slow");},6000));
    
    // Lors de l'envoi récupère les trois outils choisis
    $('.versNiveau').click(function(){
        var reverse_i =  3;

        $('.list-group ul#sortable li').each(function(){
            var choice = JSON.parse($(this).attr('value')); // This is your rel value
            if(reverse_i > 0){
                for (var key in choice) {
                    if (choice.hasOwnProperty(key)) {
                        choice[key] *= reverse_i;
                    }
                }                
                n3Ctrl.choices[reverse_i] = choice;
            }
            reverse_i--;
        });

        n3Ctrl.score = sumObjectsByKey(n3Ctrl.choices[1],n3Ctrl.choices[2],n3Ctrl.choices[3])

        save(n3Ctrl.score);
    });

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(res){
            $window.sessionStorage.setItem("score", JSON.stringify(res.data));
            console.log("Score updated !");
            $window.location.href = "/n4";
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

