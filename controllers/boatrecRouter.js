var app = angular
  .module('boatrec', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/admin.html',
        controller: 'boatrecController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
