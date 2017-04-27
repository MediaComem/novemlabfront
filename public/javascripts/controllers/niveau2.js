angular.module('novemlab').controller('N2Controller', function('EtapeService', NovemService, apiUrl, $scope, $state, $http) {
    var n2Ctrl = this;

    n2Ctrl.algoName1 = "Algo1.js";
    n2Ctrl.algoName2 = "Algo2.js";
    n2Ctrl.algoName3 = "Algo3.js";

    var divCode = $(".code");
    var divInnerCode = $("code");
    var labelCode = $(".code label")
    showMessage();

    var algo1 = "if(tamere < 3){<p style='padding-left:2em;'>console.log('je vais t'enculé')</p><p>};";
    var algo2 = "if(tasoeur < 3){<p style='padding-left:2em;'>console.log('je baise ta soeur')</p><p>};";
    var algo3 = "if(tagrandmere < 3){<p style='padding-left:2em;'>console.log('vas te faire enculé saloppe')</p><p>};";

    divCode.hide();
    divInnerCode.hide();
    divInnerCode.html(algo1);
    labelCode.html(n2Ctrl.algoName1);


    setTimeout(function(){
        divCode.fadeIn();
        divInnerCode.fadeIn();
        },4000);



    $("#algo1").on("click",function(){
        divInnerCode.html(algo1);
        labelCode.html(n2Ctrl.algoName1);
        $(".active").attr("class","");
        $("#algo1").attr("class","active");
    })
    $("#algo2").on("click",function(){
        divInnerCode.html(algo2);
        labelCode.html(n2Ctrl.algoName2);
        $(".active").attr("class","");
        $("#algo2").attr("class","active");
    })
    $("#algo3").on("click",function(){
        divInnerCode.html(algo3);
        labelCode.html(n2Ctrl.algoName3);
        $(".active").attr("class","");
        $("#algo3").attr("class","active");
    })



});

