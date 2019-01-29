
angular.module('novemlab').controller('N3Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n3Ctrl = this;


    n3Ctrl.etape = {};
    n3Ctrl.niveau = "3";
    n3Ctrl.score = {};
    n3Ctrl.choices = [];
    var nextButton = $('.versNiveau');
    $("button.versNiveau").hide();

    EtapeService.show(n3Ctrl.niveau).then(function(){
        n3Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n3Ctrl.etape.question);
        showMessage();
    });
    
    var limit = 2;
    $(document).on("click touchstart", '.tools .n3-choice', function(e){
        e.preventDefault();
        if($(".tools .n3-choice.active").length >= limit) {
            if($(this).hasClass("active"))
            {
                $("button.versNiveau").fadeIn(2000);
                $(this).toggleClass("active");
            }

        }else{
            $("button.versNiveau").fadeIn(2000);
            $(this).toggleClass("active");

            var occ = $('.active').length;
            if (occ == 2){
                $('button.versNiveau').show();

                // Lors de l'envoi récupère les trois outils choisis
                $('button.versNiveau').click(function(){
                    $( ".n3-choice.active" ).each(function( index ) {
                        //Récupère le score de l'élément sélectionné
                        elementScore = $(this).attr('value');
                        n3Ctrl.choices.push(elementScore);
                    });

                    for (i = 0; i < JSON.parse(n3Ctrl.choices.length); i++) {  //loop through the array
                        $.each(JSON.parse(n3Ctrl.choices[i]), function(k,v)
                            {
                                if(!n3Ctrl.score.hasOwnProperty(k)){
                                    n3Ctrl.score[k] = v;
                                }
                                else{
                                    swap = parseInt(n3Ctrl.score[k]);
                                    swap += v;
                                    n3Ctrl.score[k] = swap;
                                }
                            }
                        )
                    }

                    save(n3Ctrl.score);
                });
            }
        }})

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(){
           $window.location.href = "/n4";
        })

    }

});

