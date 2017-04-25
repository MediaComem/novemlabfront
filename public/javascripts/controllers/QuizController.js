angular.module('novemlab').controller('QuizController', function(apiUrl, $scope, $state, $http) {

    /**
     * Définition des variables
     */

    var quizCtrl = this;

    /**
     * Variables de manipulation du DOM
     * @type {Element}
     */
    var intro = document.getElementById("intro");
    var niveau1 = document.getElementById("niveau1");
    var niveau2 = document.getElementById("niveau2");
    var niveau3 = document.getElementById("niveau3");
    var niveau4 = document.getElementById("niveau4");


    /**
     * Initialisation du jeu
     */
    var init = function(){
        angular.element(intro).css('visibility','visible');
    }

    init();

    quizCtrl.start = function(){
        console.log(quizCtrl.joueur);
        $http({
            method: 'POST',
            url: apiUrl + 'joueurs',
            data:quizCtrl.joueur
        }).then(function successCallback(response) {
            console.log("success");
            quizCtrl.changeLevel("niveau1");
        }, function errorCallback(response) {
            console.log("failure");
            quizCtrl.changeLevel(niveau1);

        });
    }



    quizCtrl.changeLevel = function(nextLvl){

        $(".main:visible").hide();
        nextLvl.style.visibility = "visible";


    }


});