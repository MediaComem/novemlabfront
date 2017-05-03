angular.module('novemlab').controller('N5Controller', function(EtapeService, apiUrl, $scope, $state, $http, $window) {
    var n5Ctrl = this;

    n5Ctrl.etape = {};
    /* Sortable niveau 5 */
 $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

     /*insére dans la liste les réponse possible*/

    n5Ctrl.niveau = "5";

    EtapeService.show(n5Ctrl.niveau).then(function(){
        n5Ctrl.etape = EtapeService.getEtape();
    }).then(function(){
        $("#novemText").html(n5Ctrl.etape.question);
        showMessage()
        console.log(n5Ctrl.etape.propositions[0].reponse);

        for (i=0;i<=5;i++){
          var cmpt = i+1;
          var prop = n5Ctrl.etape.propositions[i].reponse;
          $("#prop"+cmpt).append(prop);
        }
    });

  } );

  /* Récupère les valeurs de la liste dans l'ordre (niveau 5) */
  $('button#send5').click(function(){

  var val = [];

  $('.projet1 ul#sortable li').each(function(i){
   var text = $(this).html(); // This is your rel value
   val.push(text);
	});
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

  $(".versNiveau").on("click",function(){
      console.log("test");
        $window.location.href = "/nf/6";
    });
  
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

