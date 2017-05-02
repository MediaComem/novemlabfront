
angular.module('novemlab').controller('SaveController', function(JoueurService, $window, apiUrl, $scope, $state, $http) {
    var sCtrl = this;

    sCtrl.test = "coucou";

    //appel au service//
    JoueurService.showAll().then(function(){    console.log(JoueurService.getJoueurs());
    });


    $(".endButton").on("click",function(){
        $window.location.href = "/profile";
    });


});