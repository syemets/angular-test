'use strict';

var app = angular.module('app', ['ngRoute', 'dataServices', 'userFilters','userControllers']).
    config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/new', {
                    templateUrl: 'views/edit.html',
                    controller: 'NewUserController'
                }).
                when('/list', {
                    templateUrl: 'views/list-users.html',
                    controller: 'ListController'
                }).
                when('/edit/:id', {
                    templateUrl: 'views/edit.html',
                    controller: 'EditUserController'
                }).
                otherwise({
                    redirectTo: 'new'
                });
        }]);





