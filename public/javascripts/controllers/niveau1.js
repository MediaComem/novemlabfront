
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


    console.log($window.sessionStorage.getItem("joueur"));
    console.log($window.sessionStorage.getItem("joueurId"));
    console.log($window.sessionStorage.getItem("score"));


});