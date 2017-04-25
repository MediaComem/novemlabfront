angular.module('novemlab').service('NovemService', function() {

    var service = {
        novemCall: function(message) {
                console.log("Novem is calling");
            var chaine = message;
            var nb_car = chaine.length;
            var tableau = chaine.split("");
            texte = new Array;
            var txt = '';
            var nb_msg = nb_car - 1;
            for (i=0; i<nb_car; i++) {
                texte[i] = txt+tableau[i];
                var txt = texte[i];
            }

            actual_texte = 0;
            function changeMessage(){
                document.getElementById("novemText").innerHTML = texte[actual_texte];
                actual_texte++;
                if(actual_texte >= texte.length)
                    actual_texte = nb_msg;
            }
            /*if(document.getElementById)

                setTimeout(function(){
                    setInterval("changeMessage()",70);
                },800);*/
        }
    };

    return service;
});