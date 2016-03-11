'use strict';

/**
 * @ngdoc overview
 * @name sirApp
 * @description
 * # sirApp
 *
 * Main module of the application.
 */
angular
    .module('sirApp', [
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
          .when('/person', {
            templateUrl: 'views/person.html',
            controller: 'PersonCtrl',
            controllerAs: 'person'
          })
          .when('/addPerson', {
            templateUrl: 'views/addPerson.html',
            controller: 'PersonPost',
            controllerAs: 'person'
          })
          .otherwise({
            redirectTo: '/'
          });
    });
