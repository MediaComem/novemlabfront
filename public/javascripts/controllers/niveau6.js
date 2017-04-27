
angular.module('novemlab').controller('N6Controller', function('EtapeService', apiUrl, $scope, $state, $http) {
    var n6Ctrl = this;

    EtapeService.show();
    EtapeService.showAll();
    EtapeService.create();
    EtapeService.delete();

});