/**
 * Created by Romain on 14.03.2017.
 */

angular.module('novemlab').controller('EndController', function(EtapeService,JoueurService, apiUrl, $scope, $state, $http, $window) {

    /**
     * Définition des variables
     */
    var eCtrl = this;

        $(".button").on("click", function(e){
            
        });


    eCtrl.reload = function(){
        $window.location.href = "/";
    }
});