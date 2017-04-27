angular.module('novemlab').controller('N2Controller', function( NovemService, apiUrl, $scope, $state, $http) {
    var n2Ctrl = this;

    n2Ctrl.test = "coucou";

    console.log(n2Ctrl.test);

    showMessage();

    n2Ctrl.showAll = function(){
        console.log("coucou xavier");
        $http({
    		method: 'GET',
    		url: 'https://cryptic-hamlet-61352.herokuapp.com/etapes',
    	}).then(function(res){
    		n2Ctrl.etape = res.data;
    	}).catch(function(){
    		n2Ctrl.error = 'Could not find etape';
    	});
    }

    /*
        var choix = 1;
        $(".next").on("click",function(){
            choix++;
            var choixOld = choix-1;
            $(".back").fadeIn();

            if(choix <= 3){
                $("#choix"+choixOld).attr("id","choix"+choix);
            }
            if (choix >= 3){
                $(".next").hide();
            }
        })

        $(".back").on("click",function(){
            choix--;
            var choixOld = choix+1;
            if(choix <= 3){
                $("#choix"+choixOld).attr("id","choix"+choix);
            }
            if (choix <= 1){
                $(".back").hide();
            }
            $(".next").fadeIn();

        })
        */

    var algo1 = "if(tamere < 3){<p style='padding-left:2em;'>console.log('je vais t'enculé')</p><p>};";
    var algo2 = "if(tasoeur < 3){<p style='padding-left:2em;'>console.log('je baise ta soeur')</p><p>};";
    var algo3 = "if(tagrandmere < 3){<p style='padding-left:2em;'>console.log('vas te faire enculé saloppe')</p><p>};";

    $(".algo").hide();
    $(".algo").html(algo1);

    setTimeout(function(){
        $(".algo").fadeIn();
        },8000);



    $("#algo1").on("click",function(){
        $(".algo").html(algo1);
        $(".active").attr("class","");
        $("#algo1").attr("class","active");
    })
    $("#algo2").on("click",function(){
        $(".algo").html(algo2);
        $(".active").attr("class","");
        $("#algo2").attr("class","active");
    })
    $("#algo3").on("click",function(){
        $(".algo").html(algo3);
        $(".active").attr("class","");
        $("#algo3").attr("class","active");
    })



});

