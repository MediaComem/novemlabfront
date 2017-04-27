
angular.module('novemlab').controller('N5Controller', function('EtapeService', apiUrl, $scope, $state, $http) {
    var n5Ctrl = this;

    EtapeService.show();
    EtapeService.showAll();
    EtapeService.create();
    EtapeService.delete();

});