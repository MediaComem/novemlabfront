/**
 * Created by Romain on 14.03.2017.
 */
angular.module('novemlab').controller('EtapeController', function(apiUrl, $scope, $state, $http, $stateParams) {
    var etapeCtrl = this;


    // rend la liste des etapes
    etapeCtrl.showAll = function(){
    	$http({
    		method: 'GET',
    		url: apiUrl + '/etapes',
    	}).then(function(res){
    		etapeCtrl.etape = res.data;
    	}).catch(function(){
    		etapeCtrl.error = 'Could not find etape';
    	});
    }

    // rend une étape par son id 
    joueurCtrl.show = function(){
        $http({
            method: 'GET',
            url: apiUrl + '/etapes/'+ $stateParams.etapeId,
        }).then(function(res){
            etapeCtrl.etape = res.data;
        }).catch(function(){
            joueurCtrl.error = 'Could not find etape';
        });
    }

    joueurCtrl.create = function(){
    	$http({
    		method: 'POST',
    		url: apiUrl + '/joueurs/' + $stateParams.joueurId,
            data: joueurCtrl.joueur
    	}).then(function(res){
    		console.log("Register done !")
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

});