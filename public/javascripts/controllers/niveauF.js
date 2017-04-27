
angular.module('novemlab').controller('NFController', function(apiUrl, $scope, $state, $http) {
    var nfCtrl = this;

    nfCtrl.test = "coucou";

    console.log(nfCtrl.test);
    /* Sortable niveau 5 */
 $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
  
  
  /* Récupère les valeurs de la liste dans l'ordre (niveau 5) */
  $('button#send5').click(function(){
  
  var val = [];
  
  $('.projet1 ul#sortable li').each(function(i){
   var text = $(this).text(); // This is your rel value
   val.push(text);
	});
	console.log(val);
  })
  

  /* Sortable niveau 6 */
$("#sortable1 li").addClass('green');
$("#sortable2 li").addClass('red');
$("#sortable1, #sortable2").sortable({
    connectWith: ".connectedSortable",
    stop: function () {
        var lis = $('#sortable1 li').add('#sortable2 li');
        $(lis).each(function () {
            if ($(this).index('li') <= 1) {
                $(this).removeClass('red ui-state-highlight').addClass('green ui-state-default');
            } else {
                $(this).removeClass('green ui-state-default').addClass('red ui-state-highlight');
            }
        });
    }
}).disableSelection();

  /* Récupère les valeurs de la liste dans l'ordre (niveau 6) */
  $('button#send6').click(function(){
  
  var val = [];
  
  $('.projet2 ul li').each(function(i){
   var text = $(this).text(); // This is your rel value
   val.push(text);
	});
	val.splice(2, 3);
	console.log(val);
  })
  
  /* Sortable niveau 7 */
$("#sortable1b li").addClass('green');
$("#sortable2b li").addClass('red');
$("#sortable1b, #sortable2b").sortable({
    connectWith: ".connectedSortable",
    stop: function () {
        var lis = $('#sortable1b li').add('#sortable2b li');
        $(lis).each(function () {
            if ($(this).index('li') <= 2) {
                $(this).removeClass('red ui-state-highlight').addClass('green ui-state-default');
            } else {
                $(this).removeClass('green ui-state-default').addClass('red ui-state-highlight');
            }
        });
    }
}).disableSelection();

  /* Récupère les valeurs de la liste dans l'ordre (niveau 6) */
  $('button#send7').click(function(){
  
  var val = [];
  
  $('.projet3 ul li').each(function(i){
   var text = $(this).text(); // This is your rel value
   val.push(text);
	});
	val.splice(3, 5);
	console.log(val);
  })
  
});