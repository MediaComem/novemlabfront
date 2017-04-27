
angular.module('novemlab').controller('N3Controller', function(EtapeService, apiUrl, $scope, $state, $http) {
    var n3Ctrl = this;
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

});

