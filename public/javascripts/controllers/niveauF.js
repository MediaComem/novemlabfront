angular.module('novemlab').controller('NFController', function(EtapeService, apiUrl, $scope, $state, $http) {
    var nfCtrl = this;

    nfCtrl.etape = {};

    function init5(){
      nfCtrl.niveau = "5";

      EtapeService.show(nfCtrl.niveau).then(function(){
          nfCtrl.etape = EtapeService.getEtape();
      }).then(function(){
          $("#novemText").html(nfCtrl.etape.question);
          showMessage();
          init();
      });
    }

    function init6(){
      nfCtrl.niveau = "6";

      EtapeService.show(nfCtrl.niveau).then(function(){
          nfCtrl.etape = EtapeService.getEtape();
      }).then(function(){
          $("#novemText").html(nfCtrl.etape.question);
          showMessage();
          init();
      });
    }

    function init7(){
      nfCtrl.niveau = "7";

      EtapeService.show(nfCtrl.niveau).then(function(){
          nfCtrl.etape = EtapeService.getEtape();
      }).then(function(){
          $("#novemText").html(nfCtrl.etape.question);
          showMessage();
          init();
      });
    }


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



/* Dessine le graph de fin */
Highcharts.chart('profil', {

    chart: {
        polar: true,
        type: 'line',
        height: 600
    },

    title: {
        text: 'Voici votre profil de superhéros',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Business', 'Coding', 'Communication', 'Management',
                'Marketing', 'Multimédia'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        name: 'Points',
        data: [26, 4, 18, 2, 8, 11],
        pointPlacement: 'on'
    }]

});
  
});