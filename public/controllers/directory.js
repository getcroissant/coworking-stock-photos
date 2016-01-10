app.controller('DirectoryCtrl', function ($scope, Collection) {

  $scope.collections = Collection.getAllCollections();

});