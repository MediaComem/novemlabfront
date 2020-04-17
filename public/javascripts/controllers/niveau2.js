angular.module('novemlab').controller('N2Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n2Ctrl = this;

    n2Ctrl.score ={};

    n2Ctrl.etape = {};
    n2Ctrl.niveau = "2";

    EtapeService.show(n2Ctrl.niveau).then(function(){
        n2Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n2Ctrl.etape.question);
    });

    $(document).ready(function () {
        $(document).on("click", '.listbox__item', function(e){
            $('.active').removeClass('active');
            // add active class to clicked element
            $(this).addClass('active');
            $('.listbox').attr("aria-activedescendant", "listbox__item_" + $(this).attr('id'));
            $('.listbox__item').addClass('faded');
            document.querySelector('button.versNiveau').removeAttribute("disabled");
        })
    });


    $(".versNiveau").on("click",function(){
        choix = $(".listbox__item.active");
        score = choix.attr('value');

        save(score);
    });

    var save =function(score){
            JoueurService.updateScorePhase1(score).then(function(res) {
                $window.sessionStorage.setItem("score", JSON.stringify(res.data));
                console.log("Score updated !");
                $window.location.href = "/n3";
            }).catch(function() {
                n2Ctrl.error = 'Could not edit score';
            })
    }

});

