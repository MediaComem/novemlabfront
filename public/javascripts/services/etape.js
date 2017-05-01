/**
 * Created by Romain on 14.03.2017.
 */
angular.module('novemlab').service('EtapeService', function(apiUrl, $http, $stateParams, $window) {

    var etapeServ = this;

    var service = {

        getEtape : function(){
            return etapeServ.etape;
        },

        // rend la liste des etapes
        showAll : function(){
        	$http({
        		method: 'GET',
        		url: apiUrl + '/etapes',
        	}).then(function(res){
        		etapeServ.etape = res.data;
        	}).catch(function(){
        		etapeServ.error = 'Could not find etape';
        	});
        },
        // rend une étape par son id 
        show : function(id){
            return $http({
                method: 'GET',
                url: apiUrl + '/etapes/niveau/'+ id,
            }).then(function(res){
                etapeServ.etape = res.data;
            }).catch(function(){
                etapeServ.error = 'Could not find etape';
            });
        },
        create : function(){
        	$http({
        		method: 'POST',
        		url: apiUrl + '/etapes/',
                data: etapeServ.etape
        	}).then(function(res){
        		console.log("Register done !")
        	}).catch(function(){
        		etapeServ.error = 'Could not create etape';
        	});
        },
        delete : function(){
            $http({
                method: 'DELETE',
                url: apiUrl + '/etapes/'+ $stateParams.etapeId,
            }).then(function(res){
                console.log("Delete done !")
            }).catch(function(){
                etapeServ.error = 'Could not delete etape';
            });
        }

       /* joueurCtrl.updateScorePhase1 = function(){
            $http({
              method: 'PATCH',
              url: apiUrl+'/scores/phase1/'+ $stateParams.joueurId,
              data: joueurCtrl.score,
            }).then(function(res) {
                joueurCtrl.score = res.data;
            }).catch(function() {
              joueurCtrl.error = 'Could not edit score';
            });
        },
        joueurCtrl.updateScorePhase2 = function(){
            $http({
              method: 'PATCH',
              url: apiUrl+'/scores/phase2/'+ $stateParams.joueurId,
              data: joueurCtrl.score,
            }).then(function(res) {
                joueurCtrl.score = res.data;
            }).catch(function() {
              joueurCtrl.error = 'Could not edit score';
            });
        }*/
    };

    return service;
});