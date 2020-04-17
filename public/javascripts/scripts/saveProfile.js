function saveScreen(i,store){
    html2canvas(document.querySelector("#ng-view")).then( canvas => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/png");
        a.download = 'profile'+i+'.png';

        store.sessionStorage.setItem("joueur.profile"+i, a.href);
    });
}


function downloadImage(i,store){
    html2canvas(document.querySelector("#ng-view")).then( canvas => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = store.sessionStorage.getItem("joueur.profile"+(i-1));
        a.download = 'profile'+(i-1)+'.png';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    });
}
