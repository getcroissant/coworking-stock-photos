var app = angular.module('CoworkingStockPhotos', ['ngRoute', 'matchMedia']);

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

app.run(function($rootScope, screenSize) {

  if (screenSize.is('xs')) {
    $rootScope.isMobile = true;
  } else if (screenSize.is('sm')) {
    $rootScope.isTablet = true;
  } else if (screenSize.is('md, lg')) {
    $rootScope.isDesktop = true;
  }

});