
angular.module('novemlab').service('JoueurService', function(apiUrl, $state, $http, $window) {

    var joueurServ = this;

    var service = {

        getJoueurs : function(){
            return joueurServ.joueurs;
        },

        getJoueur : function(){
            return joueurServ.joueurActuel;
        },

        // rend la liste des joueurs
        showAll : function(){
            return $http({
                method: 'GET',
                url: apiUrl + '/joueurs',
            }).then(function(res){
                console.log(res.data);
                joueurServ.joueurs = res.data;
            }).catch(function(){
                joueurServ.error = 'Could not find user';
            });
        },
        // rend un joueur par son id
        show : function(){
            $http({
                method: 'GET',
                url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
            }).then(function(res){
                joueurServ.joueur = res.data;
            }).catch(function(){
                joueurServ.error = 'Could not find user';
            });
        },

        create : function(data){
            return $http({
                method: 'POST',
                url: apiUrl + '/joueurs/',
                data: data
            }).then(function(res){
                console.log("Register done !");
                $window.sessionStorage.setItem("joueur",JSON.stringify(res.data.pseudo));
                $window.sessionStorage.setItem("joueurId",JSON.stringify(res.data._id));
                return res.data;
            }).catch(function(){
                joueurServ.error = 'Could not create user';
            });
        },

        createScore : function(data){
            //Create score when user is created
           return $http({
                method: 'POST',
                url: apiUrl + '/scores/',
                data: {
                    "joueur_id":data,
                    "communication":0,
                    "multimedia":0,
                    "coding":0,
                    "marketing":0,
                    "management":0,
                    "business":0
                }
            }).then(function(res){
                $window.sessionStorage.setItem("score", JSON.stringify(res.data));
                console.log("Score created !");
            }).catch(function(){
                joueurServ.error = 'Could not create score';
            });
        },

        delete : function(){
            $http({
                method: 'DELETE',
                url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
            }).then(function(res){
                console.log("Delete done !")
            }).catch(function(){
                joueurServ.error = 'Could not delete user';
            });
        },

        modify : function() {
            $http({
              method: 'PATCH',
              url: apiUrl+'/joueurs/'+ $stateParams.joueurId,
              data: joueurServ.joueur,
            }).then(function(res) {
                joueurServ.joueur = res.data;
            }).catch(function() {
              joueurServ.error = 'Could not edit user';
            });
        },

        updateScorePhase1 : function(data){
            var idScore = $window.sessionStorage.getItem("score")._id;

            $http({
              method: 'PATCH',
              url: apiUrl+'/scores/phase1/'+ idScore,
              data: data,
            }).then(function(res) {
                $window.sessionStorage.setItem("score", JSON.stringify(res.data));
                console.log("Score created !");
            }).catch(function() {
              joueurServ.error = 'Could not edit score';
            });
        },

        updateScorePhase2 : function() {
            $http({
                method: 'PATCH',
                url: apiUrl + '/scores/phase2/' + $stateParams.scoreId,
                data: joueurServ.score,
            }).then(function (res) {
                joueurServ.score = res.data;
            }).catch(function () {
                joueurServ.error = 'Could not edit score';
            });
        }
    };

    return service;

});