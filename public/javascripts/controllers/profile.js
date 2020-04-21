angular.module('novemlab').controller('NFController', function(apiUrl, $scope, $state, $http, $window) {
    var nfCtrl = this;

    nfCtrl.joueur = JSON.parse($window.sessionStorage.getItem("joueur"));
    nfCtrl.score = JSON.parse($window.sessionStorage.getItem("score"));
    nfCtrl.joueurName = nfCtrl.joueur;

    // Score Scale ?

    const scaleScoreMin = 0;
    const scaleScoreMax = 10;


    if (nfCtrl.score !== null) {

        /* Calculate Polygon Points */

        var poly = [
            scoreTransform(nfCtrl.score.communication, '.scale__diagonalpos', 'afterMiddle')
                .toPoint(scaleScoreMin, scaleScoreMax).toPathCoordinates(),
            scoreTransform(nfCtrl.score.management, '.scale__horizontal', 'afterMiddle')
                .toPoint(scaleScoreMin, scaleScoreMax).toPathCoordinates(),
            scoreTransform(nfCtrl.score.business, '.scale__diagonalneg', 'afterMiddle')
                .toPoint(scaleScoreMin, scaleScoreMax).toPathCoordinates(),
            scoreTransform(nfCtrl.score.gestion, '.scale__diagonalpos', 'beforeMiddle')
                .toPoint(scaleScoreMin, scaleScoreMax).toPathCoordinates(),
            scoreTransform(nfCtrl.score.conception, '.scale__horizontal', 'beforeMiddle')
                .toPoint(scaleScoreMin, scaleScoreMax).toPathCoordinates(),
            scoreTransform(nfCtrl.score.technique, '.scale__diagonalneg', 'beforeMiddle')
                .toPoint(scaleScoreMin, scaleScoreMax).toPathCoordinates()
        ].map(function (d) {
            return [d.x, d.y].join(",");
        }).join(" ");

        function scoreTransform(score, axeClass, axePosition){
            var self = this;
            self._score = score;
            self._axeNode = document.querySelector(axeClass);
            self._axePosition = axePosition;

            return {
                toPoint: function (scoreMin, scoreMax, check){
                    var s_length = self._axeNode.getTotalLength();

                    var rangeAxeMin = axePosition === "afterMiddle" ? s_length / 2 : s_length / 2;
                    var rangeAxeMax = axePosition === "afterMiddle" ? s_length : 0;

                    var scale = new Scale().domain(scoreMin, scoreMax).range(rangeAxeMin, rangeAxeMax);
                    self._scorePoint = scale(self._score);

                    return this
                },
                toPathCoordinates: function (){
                    return self._axeNode.getPointAtLength(self._scorePoint);
                }
            }
        }

        /* Draw Polygon Points */

        var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", poly)
        polygon.setAttribute("fill", "rgba(var(--heig-red-rgb), .8)");

        document.querySelector(".schemaProfile__spider_background").appendChild(polygon);
    }

    /* Unwrap text label on desktop */
    var schemaProfile = document.querySelector(".schemaProfile svg");
    window.addEventListener('resize', setViewbox);
    setViewbox();

    function setViewbox() {
        if (window.innerWidth > 768) {
            schemaProfile.setAttribute("viewBox", "-130 0 630 298");
        } else {
            schemaProfile.setAttribute("viewBox", "0 0 370 298");
        }
    }


    /*  Scale function
        Source: https://bl.ocks.org/aubergene/7791133 */

    function Normalizer(min, max) {
        return function (val) {
            return (val - min) / (max - min);
        }
    }

    function Interpolater(min, max, clamp) {
        return function (val) {
            val = min + (max - min) * val;
            return clamp ? Math.min(Math.max(val, min), max) : val;
        }
    }

    function Scale() {
        var domain = new Normalizer(0, 1);
        var range = new Interpolater(0, 1);
        var s = function (val) {
            return range(domain(val));
        };
        s.domain = function (min, max) {
            if (!arguments.length) return domain;
            domain = new Normalizer(min, max)
            return s
        };
        s.range = function (min, max, clamp) {
            if (!arguments.length) return range;
            range = new Interpolater(min, max, clamp)
            return s
        };
        return s;
    }
});
