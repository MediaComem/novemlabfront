
angular.module('novemlab').controller('N3Controller', function('EtapeService', apiUrl, $scope, $state, $http) {
    var n3Ctrl = this;

    EtapeService.show();
    EtapeService.showAll();
    EtapeService.create();
    EtapeService.delete();


    novemText3 =  "lol faten trop bien hjkdajdsak adsjakkajdak ddaksdjas";

    novemCall(novemText3);

});

