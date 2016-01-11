app.controller('CollectionCtrl', function ($scope, $routeParams, $anchorScroll, Collection) {

  $anchorScroll();

  $scope.baseUrl = window.location.origin + '/';

  $scope.collection = Collection.getCollectionBySlug($routeParams.collectionSlug);

});