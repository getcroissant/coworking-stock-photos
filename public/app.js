var app = angular.module('CoworkingStockPhotos', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false);

  $routeProvider
  .when('/', {
    templateUrl: 'views/directory.html',
    controller: 'DirectoryCtrl'
  })
  .when('/collection/:collectionSlug', {
    templateUrl: 'views/collection.html',
    controller: 'CollectionCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);