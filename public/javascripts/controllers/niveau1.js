
angular.module('novemlab').controller('N1Controller', function(EtapeService, JoueurService, $scope, $state, $http, $window) {
    var n1Ctrl = this;
    niveau = 1;

   n1Ctrl.etape = {};
   n1Ctrl.niveau = "1";

    init = function(){

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

        $('.tools .col-xs-6.col-md-4').click(function(e){
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
                        });
                    });
                }
            }})
    };

    function save(){
        JoueurService.updateScorePhase1
    }

    init();



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