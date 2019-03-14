angular.module('novemlab').controller('N5Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n5Ctrl = this;

    n5Ctrl.score = {};
    n5Ctrl.niveau = "5";
    /* Sortable niveau 5 */

    EtapeService.show(n5Ctrl.niveau).then(function(){
        n5Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n5Ctrl.etape.question);
        showMessage();
    });

    var limit = 1;

    $(document).on("click", '.tools .job', function(e){
        e.preventDefault();

        if($(".tools .job.active").length >= limit) {
            if($(this).hasClass("active"))
            {
                $(this).toggleClass("active");
                $('button.versNiveau').fadeOut(200);
            }

        }else{
            $(this).toggleClass("active");

            var occ = $('.active').length;
            if (occ == limit){
                $('button.versNiveau').fadeIn(200);

                // Lors de l'envoi récupère les deux outils choisis
                $('button.versNiveau').click(function(){
                    $( ".job.active" ).each(function( index ) {
                        //Récupère le score de l'élément sélectionné
                        n5Ctrl.score = $(this).attr('value');
                    });
                    save(n5Ctrl.score);
                });
            }
        }})

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(res){
            $window.sessionStorage.setItem("score", JSON.stringify(res.data));
            console.log("Score updated !");
            $window.location.href = "/n7";
        })

    }

});

