var googleAuthApp = angular.module('theGoogles', ['ngRoute', 'nvd3']);

// googleAuthApp.config(function ($routeProvider,  $locationProvider)
googleAuthApp.config(['$routeProvider', function ($routeProvider)
{

  $routeProvider
    .when('/calendar', {
      templateUrl: '/public/views/templates/calendar.html',
      controller: 'CalendarController',
      controllerAs: 'calendar',
    })
    .when('/login', {
      templateUrl: '/public/views/templates/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .when('/intentions', {
    templateUrl: '/public/views/templates/intent.html',
    controller: 'IntentController',
    controllerAs: 'ic',
    })
    .when('/week',{
      templateUrl: '/public/views/templates/viz.html',
      controller: 'WeekController',
      controllerAs: 'wc',
    })
    .otherwise({
      redirectTo: 'login',
    });

    // $locationProvider.html5Mode(true);
}


]);
