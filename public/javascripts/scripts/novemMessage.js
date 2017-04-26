function novemCall (message, nodeDom) {
        nodeDome.empty();		
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

$(function(){ 
    var message = $("#novemText").html();
    /*$("#novemText").empty();*/	
    novemCall(message, $('#novemText'));
})

