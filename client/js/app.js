var app = angular.module('TestTask', ['ngRoute','login','loginService','adminService','admin'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/modules/admin/admin-login.html',
        controller: 'loginController',
        controllerAs: 'vm',
        activetab:'login'
      
      })
     .when('/admin', {
        templateUrl: 'js/modules/admin/admin-home.html',
        controller: 'adminController',
        controllerAs: 'vm',
        activetab:'login'
      })
      .when('/admin/fdashboard', {
        templateUrl: 'js/partials/dashboard.html',
        controller: 'adminController',
        controllerAs: 'vm',
        activetab:'login'
      })
      .when('/admin/dashboard', {
        templateUrl: 'js/modules/admin/admin-dashboard.html',
        controller: 'adminController',
        controllerAs: 'vm',
        activetab:'login'
      })
   
      });
  