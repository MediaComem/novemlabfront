/**
 * Created by Romain on 14.03.2017.
 */

angular.module('novemlab').controller('IntroControler', function(JoueurService, apiUrl, $scope, $state, $http, $window) {

    /**
     * Définition des variables
     */
    var iCtrl = this;

    /**
     * Déclarations MOJS
     * @type {*}
     */
    const meteors = new mojs.Burst({
        zIndex:100,
        left: 0, top: 0,
        count:    5,
        radius:   { 0: 250 },
        children: {
            shape:        'line',
            stroke:       ['#92b5f9', '#b7e1fc', '#c7daff','#cefef2','#b7e1fc'],
            duration:     500,
            radius:       60,
            strokeWidth:  10,
            isForce3d:    true
        }
    });
    meteors.el.style.zIndex = 101;

    iCtrl.init = function(){

        $(".button").on("click", function(e){
            meteors
                .tune({ x: e.pageX, y: e.pageY })
                .setSpeed(2)
                .replay();

            $(".button").rotate({
                angle: 0,
                animateTo:360,
                duration:2000
            });
            setTimeout(function(){
                //Button slide right
                $(".button").animate({
                    right: '-51%'
                },2000)
                //Door slide left
                $(".left").animate({
                    left: '-51%'
                },2000)
                //Door slide right
                $(".right").animate({
                    right: '-51%'
                },2000)
                setTimeout(function(){
                    $(".button").fadeOut("fast")
                },1000);
            },2000);

            setTimeout(function(){
                $(".intro").fadeIn('slow');
            },3500);

        });

    };

    iCtrl.start = function(){
        JoueurService.create(iCtrl.joueur).then(function(res) {
            JoueurService.createScore(res._id);
        }).then(function(){
                $window.location.href = "/welcome";
               /* console.log($window.sessionStorage.getItem("joueur"));
                console.log($window.sessionStorage.getItem("joueurId"));
                console.log($window.sessionStorage.getItem("score"));*/
            })
        };

    iCtrl.init();

});