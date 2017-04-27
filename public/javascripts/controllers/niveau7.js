
angular.module('novemlab').controller('N7Controller', function('EtapeService', apiUrl, $scope, $state, $http) {
    var n7Ctrl = this;

    EtapeService.show();
    EtapeService.showAll();
    EtapeService.create();
    EtapeService.delete();

});