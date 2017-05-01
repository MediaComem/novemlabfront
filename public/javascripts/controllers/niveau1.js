
angular.module('novemlab').controller('N1Controller', function(EtapeService, apiUrl, $scope, $state, $http) {
    var n1Ctrl = this;
    niveau = 1;

   n1Ctrl.etape = {};
   n1Ctrl.etapeId = "590392eb4989550011c3b8fb";

    init = function(){

        /**
         * GET DATA
         */
        EtapeService.show(n1Ctrl.etapeId).then(function(){
           n1Ctrl.etape = EtapeService.getEtape();
           console.log(n1Ctrl.etape);
        })


        /**
         * GENERATE FRONT
         */
        $('button.versNiveau').hide();
        var limit = 3;

        $('.tools .col-xs-4').click(function(e){
            e.preventDefault();

            if($(".tools .col-xs-4.active").length >= limit) {
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
                        $( ".col-xs-4.active" ).each(function( index ) {
                            console.log( index + ": " + $( this ).text() );
                        });
                    });
                }
            }})
    };

    init();
});