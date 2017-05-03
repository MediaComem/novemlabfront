
angular.module('novemlab').controller('N3Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n3Ctrl = this;


    n3Ctrl.etape = {};
    n3Ctrl.niveau = "3";
    n3Ctrl.score = {};

    EtapeService.show(n3Ctrl.niveau).then(function(){
        n3Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n3Ctrl.etape.question);
        showMessage();
    });

    $(".reps").hide();
    $(".choix").hide();

    setTimeout(function(){
            $(".reps").fadeIn("slow");
    },3000);
    setTimeout(function(){
            $(".choix").fadeIn("slow");
    },3500);
    

    $("#1").on('click',function(){
       $("#1").addClass("selected")
       $("#2").removeClass("selected")
       $("#3").removeClass("selected")
       $(".valider").fadeIn("slow");  
    });

     $("#2").on('click',function(){
       $("#2").addClass("selected")
       $("#1").removeClass("selected")
       $("#3").removeClass("selected")
        $(".valider").fadeIn("slow"); 
    });

    $("#3").on('click',function(){
       $("#3").addClass("selected")
       $("#1").removeClass("selected")
       $("#2").removeClass("selected") 
        $(".valider").fadeIn("slow");
    });

    console.log(n3Ctrl.test);

    showMessage();

    $(".versNiveau").on("click",function(){
        choix = $(".choix.selected");
        score = choix.attr('value');
        save(score);
    });

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(){
           $window.location.href = "/n4";
        })

    }

});

