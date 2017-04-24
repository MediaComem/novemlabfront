/**
 * Created by Romain on 14.03.2017.
 */

angular.module('novemlab').controller('QuizController', function(apiUrl, $scope, $state) {
    var quizCtrl = this;

    quizCtrl.joueur = {};

    console.log("coucou");
    console.log(apiUrl);

    quizCtrl.lol = function(){
        console.log(quizCtrl.joueur);
    }

});