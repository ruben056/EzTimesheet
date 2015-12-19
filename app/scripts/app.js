'use strict';

angular
  .module('eztimesheetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/timesheet', {
        templateUrl: 'views/timesheet.html',
        controller: 'TimesheetCtrl',
        controllerAs: 'timesheet'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
