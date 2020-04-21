
angular.module('novemlab').controller('N6Controller', function (JoueurService, EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n6Ctrl = this;

    n6Ctrl.etape = {};
    n6Ctrl.niveau = "6";
    n6Ctrl.score = {};
    n6Ctrl.choices = [];

    new Sortable(document.querySelector('.sortable__list'), {
        animation: 150
    });

    EtapeService.show(n6Ctrl.niveau).then(function () {
        n6Ctrl.etape = EtapeService.getEtape();
    }).then(function () {
        $("#novemText").html(n6Ctrl.etape.question);
        $(".sortable").css('visibility', 'visible');
    })

    // Lors de l'envoi récupère les trois outils choisis
    $('.versNiveau').click(function () {
        var reverse_i = 3;

        $('.sortable__item').each(function () {
            var choice = JSON.parse($(this).attr('value')); // This is your rel value
            if (reverse_i > 0) {
                for (var key in choice) {
                    if (choice.hasOwnProperty(key)) {
                        choice[key] *= reverse_i;
                    }
                }
                n6Ctrl.choices[reverse_i] = choice;
            }
            reverse_i--;
        });

        n6Ctrl.score = sumObjectsByKey(n6Ctrl.choices[1], n6Ctrl.choices[2], n6Ctrl.choices[6])

        save(n6Ctrl.score);
    });

    var save = function (score) {
        JoueurService.updateScorePhase1(score).then(function (res) {
            $window.sessionStorage.setItem("score", JSON.stringify(res.data));
            console.log("Score updated !");
            $window.location.href = "/save";
        })
    }

    function sumObjectsByKey(...objs) {
        return objs.reduce((a, b) => {
            for (let k in b) {
                if (b.hasOwnProperty(k))
                    a[k] = (a[k] || 0) + b[k];
            }
            return a;
        }, {});
    }

});
