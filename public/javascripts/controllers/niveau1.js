
angular.module('novemlab').controller('N1Controller', function('EtapeService', apiUrl, $scope, $state, $http) {
    var n1Ctrl = this;

    EtapeService.show();
    EtapeService.showAll();
    EtapeService.create();
    EtapeService.delete();
    
});