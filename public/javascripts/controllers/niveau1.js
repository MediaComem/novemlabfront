
angular.module('novemlab').controller('N1Controller', function(EtapeService, $window, JoueurService, $scope, $state, $http, $window) {
    var n1Ctrl = this;
    niveau = 1;

    n1Ctrl.etape = {};
    n1Ctrl.niveau = "1";
    n1Ctrl.choices = [];
    n1Ctrl.score = {};

    /**
     * GET DATA
     */
    EtapeService.show(n1Ctrl.niveau).then(function(){
        n1Ctrl.etape = EtapeService.getEtape();
    }).then(() =>{
        $("#novemText").html(n1Ctrl.etape.question);
        n1Ctrl.etape.propositionsRandomised = randomize(n1Ctrl.etape.propositions);
    })


    /**
     * GENERATE FRONT
     */
    var limit = 2;

    $(document).on("click", '.cards__item', function(e){
        e.preventDefault();

        if ($('.cards__item.active').length === limit) {
            // Switch off active element
            if($(this).hasClass("active")){
                $(this).toggleClass("active");
                document.querySelector('button.versNiveau').setAttribute("disabled", "");
            } else{ // Replace last element with new one
                $('.cards__item.last').toggleClass("active").removeClass("last");
                $(this).toggleClass("active").toggleClass("last");
            }
        }else{
            $('.cards__item.last').removeClass("last");
            $(this).toggleClass("active").toggleClass("last");
        }

        if ($('.cards__item.active').length === limit) {
            document.querySelector('button.versNiveau').removeAttribute("disabled");
        }

    })

    // Lors de l'envoi récupère les deux outils choisis
    $('button.versNiveau').click(function () {
        $(".cards__item.active").each(function () {
            //Récupère le score de l'élément sélectionné
            elementScore = $(this).attr('value');
            n1Ctrl.choices.push(elementScore);
        });


        for (i = 0; i < n1Ctrl.choices.length; i++) {  //loop through the array
            $.each(JSON.parse(n1Ctrl.choices[i]), function (k, v) {
                if (!n1Ctrl.score.hasOwnProperty(k)) {
                    n1Ctrl.score[k] = v;
                }
                else {
                    swap = parseInt(n1Ctrl.score[k]);
                    swap += v;
                    n1Ctrl.score[k] = swap;
                }
            }
            )
            //total += n1Ctrl.choices[i].communication;  //Do the math!
        }
        save(n1Ctrl.score);
    });


    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(res){
            $window.sessionStorage.setItem("score", JSON.stringify(res.data));
            $window.location.href = "/n/2";
        }).catch(function() {
            n1Ctrl.error = 'Could not edit score';
        })

    }

    function randomize(array) {
        return array.sort(function () {
            return .5 - Math.random();
        });
    }
})
