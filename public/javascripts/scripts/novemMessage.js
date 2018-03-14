function novemCall (message, nodeDom) {
        nodeDom.empty();
        indChar = 0;
        function changeMessage(){
            nodeDom.append(message.substr(indChar, 1));
            indChar++;
            if (indChar < message.length) setTimeout(changeMessage, 20);
        }
        setTimeout(function(){
            setTimeout(changeMessage, 10);
        },400);
	}

function showMessage(){
    var message = $("#novemText").html();
    /*$("#novemText").empty();*/
    novemCall(message, $('#novemText'));
}
$('figure.ball').hide();

$('figure.ball').click(function(){
 	$('p#novemText').fadeToggle( "slow", "linear" );;
 	$('div.novemVoice.animated.slideInUp').toggleClass("transparence");
 	$('figure.ball').hide();
 	$('button.closeNovemVoice').show();
});


$('button.closeNovemVoice').click(function(){
 	$('p#novemText').hide();
 	$('div.novemVoice.animated.slideInUp').toggleClass("transparence");
 	$('button.closeNovemVoice').hide();
 	$('figure.ball').show();
});