
angular.module('novemlab').service('JoueurService', function(apiUrl, $state, $http, $stateParams) {

        var joueurServ = this;

        // rend la liste des joueurs
        this.showAll = function(){
        	$http({
        		method: 'GET',
        		url: apiUrl + '/joueurs',
        	}).then(function(res){
        		joueurServ.joueurs = res.data;
        	}).catch(function(){
        		joueurServ.error = 'Could not find user';
        	});
        }

        // rend un joueur par son id 
        this.show = function(){
            $http({
                method: 'GET',
                url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
            }).then(function(res){
                joueurServ.joueur = res.data;
            }).catch(function(){
                joueurServ.error = 'Could not find user';
            });
        }

        this.create = function(){
        	$http({
        		method: 'POST',
        		url: apiUrl + '/joueurs/',
                data: joueurServ.joueur
        	}).then(function(res){
        		console.log("Register done !");
                $stateParams.joueurId = res.data._id;

        	}).catch(function(){
        		joueurServ.error = 'Could not create user';
        	});

            //Create score when user is created
            $http({
                method: 'POST',
                url: apiUrl + '/scores/',
                data: joueurServ.score
            }).then(function(res){
                $stateParams.scoreId = res.data._id;
                console.log("Score created !");
            }).catch(function(){
                joueurServ.error = 'Could not create score';
            });
        }
        this.delete = function(){
            $http({
                method: 'DELETE',
                url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
            }).then(function(res){
                console.log("Delete done !")
            }).catch(function(){
                joueurServ.error = 'Could not delete user';
            });
        }
        this.modify = function() {
            $http({
              method: 'PATCH',
              url: apiUrl+'/joueurs/'+ $stateParams.joueurId,
              data: joueurServ.joueur,
            }).then(function(res) {
                joueurServ.joueur = res.data;
            }).catch(function() {
              joueurServ.error = 'Could not edit user';
            });
        }

        this.updateScorePhase1 = function(){
            $http({
              method: 'PATCH',
              url: apiUrl+'/scores/phase1/'+ $stateParams.scoreId,
              data: joueurServ.score,
            }).then(function(res) {
                joueurServ.score = res.data;
            }).catch(function() {
              joueurServ.error = 'Could not edit score';
            });
        }

        this.updateScorePhase2 = function(){
            $http({
              method: 'PATCH',
              url: apiUrl+'/scores/phase2/'+ $stateParams.scoreId,
              data: joueurServ.score,
            }).then(function(res) {
                joueurServ.score = res.data;
            }).catch(function() {
              joueurServ.error = 'Could not edit score';
            });
        }

});