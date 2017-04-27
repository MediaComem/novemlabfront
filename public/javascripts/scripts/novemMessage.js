function novemCall (message, nodeDom) {
        nodeDom.empty();
        indChar = 0;
        function changeMessage(){
            nodeDom.append(message.substr(indChar, 1));
            indChar++;
            if (indChar < message.length) setTimeout(changeMessage, 70);
        }
        setTimeout(function(){
            setTimeout(changeMessage, 70);
        },800);
	}

function showMessage(){
    var message = $("#novemText").html();
    console.log("novem dit salut");
    /*$("#novemText").empty();*/	
    novemCall(message, $('#novemText'));
}

