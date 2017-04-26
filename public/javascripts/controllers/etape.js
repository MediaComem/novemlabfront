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
    etapeCtrl.show = function(){
        $http({
            method: 'GET',
            url: apiUrl + '/etapes/'+ $stateParams.etapeId,
        }).then(function(res){
            etapeCtrl.etape = res.data;
        }).catch(function(){
            etapeCtrl.error = 'Could not find etape';
        });
    }

    etapeCtrl.create = function(){
    	$http({
    		method: 'POST',
    		url: apiUrl + '/etapes/',
            data: etapeCtrl.etape
    	}).then(function(res){
    		console.log("Register done !")
    	}).catch(function(){
    		etapeCtrl.error = 'Could not create etape';
    	});
    }
    etapeCtrl.delete = function(){
        $http({
            method: 'DELETE',
            url: apiUrl + '/etapes/'+ $stateParams.etapeId,
        }).then(function(res){
            console.log("Delete done !")
        }).catch(function(){
            etapeCtrl.error = 'Could not delete etape';
        });
    }

});