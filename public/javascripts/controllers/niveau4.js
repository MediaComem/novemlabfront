
angular.module('novemlab').controller('N4Controller', function(JoueurService, EtapeService, $scope, $state, $http, $window) {
    var n4Ctrl = this;

    n4Ctrl.etape = {};
    n4Ctrl.niveau = "4";

    EtapeService.show(n4Ctrl.niveau).then(function(){
        n4Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n4Ctrl.etape.question);
    });

    $(document).ready(function () {
        $(document).on("click", '.listbox__item', function (e) {
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
        JoueurService.updateScorePhase1(score).then(function(res){
            $window.sessionStorage.setItem("score", JSON.stringify(res.data));
            console.log("Score updated !");
            $window.location.href = "/n5";
        })

    }

});
