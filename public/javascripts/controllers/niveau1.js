
angular.module('novemlab').controller('N1Controller', function(EtapeService, $window, JoueurService, $scope, $state, $http, $window) {
    var n1Ctrl = this;
    niveau = 1;

    n1Ctrl.etape = {};
    n1Ctrl.niveau = "1";
    n1Ctrl.scores = [];

    /**
     * GET DATA
     */
    EtapeService.show(n1Ctrl.niveau).then(function(){
        n1Ctrl.etape = EtapeService.getEtape();
    })

    /**
     * GENERATE FRONT
     */
    $('button.versNiveau').hide();
    var limit = 3;

    $(document).on("click", '.tools .col-xs-6.col-md-4', function(e){
        e.preventDefault();

        if($(".tools .col-xs-6.col-md-4.active").length >= limit) {
            if($(this).hasClass("active"))
            {
                $(this).toggleClass("active");
                $('button.versNiveau').hide();
            }

        }else{
            $(this).toggleClass("active");

            var occ = $('.active').length;
            if (occ == 3){
                $('button.versNiveau').show();

                // Lors de l'envoi récupère les trois outils choisis
                $('button.versNiveau').click(function(){
                    $( ".col-xs-6.col-md-4.active" ).each(function( index ) {
                        console.log( index + ": " + $( this ).text() );
                        //Récupère le score de l'élément sélectionné
                        elementScore = $(this).attr('value');

                        n1Ctrl.scores.push(elementScore);

                        console.log(n1Ctrl.scores);
                    });

                    var result = n1Ctrl.scores.reduce(function(r, e, i) {
                        if (i == 0) r = r.concat(e)
                        else  {
                            e.forEach(function(a, j) {
                                Object.keys(a).forEach(function(key) {
                                    if (!r[j][key]) r[j][key] = a[key]
                                    else {
                                        Object.keys(a[key]).forEach(function(k) {
                                            r[j][key][k] += a[key][k]
                                        })
                                    }
                                })
                            })
                        }
                        return r;
                    }, [])

                    console.log(result);
                });
            }
        }})


    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(){

            //$window.location.href = "/n2";
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
