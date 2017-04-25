function novemCall (text){
    var chaine = text
    var nb_car = chaine.length;
    var tableau = chaine.split("");
    texte = new Array;
    var txt = '';
    var nb_msg = nb_car - 1;
    for (i=0; i<nb_car; i++) {
    texte[i] = txt+tableau[i];
    var txt = texte[i];
    }

    if(document.getElementById)
    for(i=0; i<nb_car-1; i++){
        setInterval(changeMessage(texte, nb_msg, nb_car, i),1000);
    }
}

function changeMessage(texte, nb_msg, nb_car, i){
    document.getElementById("novemText").innerHTML = texte[i];
}