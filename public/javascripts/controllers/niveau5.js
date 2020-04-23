angular.module('novemlab').controller('N5Controller', function(JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n5Ctrl = this;

    n5Ctrl.score = {};
    n5Ctrl.niveau = "5";
    /* Sortable niveau 5 */

    EtapeService.show(n5Ctrl.niveau).then(function(){
        n5Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n5Ctrl.etape.question);
    });

    /* Workaround */
    $scope.initGlider = function($last){
        if ($last) {
            const _instance = new Glide('.niveau5_glide', {
                startAt: Math.floor(Math.random() * 4),// returns a random integer from 0 to 3
                breakpoints: {
                    798: {
                        perView: 1
                    },
                    5000: {
                        perView: 3,
                        focusAt: 'center'
                    }
                }
            }).mount();

            let glideClickedIdx = 0;

            $('.glide__slide').attr('role', 'button');

            $('.glide__slide').on('click', function () {
                glideClickedIdx = $(this).index();
                _instance.go(`=${glideClickedIdx}`);
            });
        }
    }

    $('button.versNiveau').click(function () {
        n5Ctrl.score = $('.glide__slide--active').attr('value');
        save(n5Ctrl.score);
    });

    var save =function(score){
        JoueurService.updateScorePhase1(score).then(function(res){
            $window.sessionStorage.setItem("score", JSON.stringify(res.data));
            console.log("Score updated !");
            $window.location.href = "/n/6";
        })

    }

});

