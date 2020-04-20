
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
    })


    /**
     * GENERATE FRONT
     */
    var limit = 2;

    $(document).on("click", '.cards__item', function(e){
        e.preventDefault();

        if ($('.cards__item.active').length>= limit) {
            if($(this).hasClass("active")){
                $(this).toggleClass("active");
                document.querySelector('button.versNiveau').setAttribute("disabled", "");
            }
        }else{
            $(this).toggleClass("active");
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



}).filter('removeAccent', function(){
        return function (source) {
            var accent = [
                    /[\300-\306]/g, /[\340-\346]/g, // A, a
                    /[\310-\313]/g, /[\350-\353]/g, // E, e
                    /[\314-\317]/g, /[\354-\357]/g, // I, i
                    /[\322-\330]/g, /[\362-\370]/g, // O, o
                    /[\331-\334]/g, /[\371-\374]/g, // U, u
                    /[\321]/g, /[\361]/g, // N, n
                    /[\307]/g, /[\347]/g, // C, c
                ],
                noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

            for (var i = 0; i < accent.length; i++){
                source = source.replace(accent[i], noaccent[i]);
            }

            return source;
        };
    });
