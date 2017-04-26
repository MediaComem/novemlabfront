/**
 * Created by Romain on 14.03.2017.
 */
angular.module('novemlab').controller('JoueurController', function(apiUrl, $scope, $state, $http, $stateParams) {
    var joueurCtrl = this;

    joueurCtrl.joueur = {};

    // rend la liste des joueurs
    joueurCtrl.showAll = function(){
    	$http({
    		method: 'GET',
    		url: apiUrl + '/joueurs',
    	}).then(function(res){
    		joueurCtrl.joueur = res.data;
    	}).catch(function(){
    		joueurCtrl.error = 'Could not find user';
    	});
    }

    // rend un joueur par son id 
    joueurCtrl.show = function(){
        $http({
            method: 'GET',
            url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
        }).then(function(res){
            joueurCtrl.joueur = res.data;
        }).catch(function(){
            joueurCtrl.error = 'Could not find user';
        });
    }

    joueurCtrl.create = function(){
    	$http({
    		method: 'POST',
    		url: apiUrl + '/joueurs/',
            data: joueurCtrl.joueur
    	}).then(function(res){
    		console.log("Register done !");
            $stateParams.joueurId = joueurCtrl.joueur._id;

    	}).catch(function(){
    		joueurCtrl.error = 'Could not create user';
    	});
    }
    joueurCtrl.delete = function(){
        $http({
            method: 'DELETE',
            url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
        }).then(function(res){
            console.log("Delete done !")
        }).catch(function(){
            joueurCtrl.error = 'Could not delete user';
        });
    }
    joueurCtrl.modify = function() {
        $http({
          method: 'PATCH',
          url: apiUrl+'/joueurs/'+ $stateParams.joueurId,
          data: joueurCtrl.joueur,
        }).then(function(res) {
            joueurCtrl.user = res.data;
        }).catch(function() {
          joueurCtrl.error = 'Could not edit user';
        });
    }

});