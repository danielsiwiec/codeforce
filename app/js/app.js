'use strict';

/* App Module */

var codeforceApp = angular.module('codeforceApp', [
    'ngRoute',
    'phonecatAnimations',

    'appControllers',
    'phonecatFilters',
    'phonecatServices'
]);

codeforceApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/need', {
                templateUrl: 'partials/need.html',
                controller: 'NeedController',
                title: 'Post a need'
            }).when('/needMatches', {
                templateUrl: 'partials/needMatches.html',
                controller: 'NeedMatchesController',
                title: 'List of matches'
            }).
            when('/jedi/:stackId', {
                templateUrl: 'partials/jedi-detail.html',
                controller: 'JediDetailController',
                title: 'Jedi\'s details'
            }).
            otherwise({
                redirectTo: '/need'
            });
    }]).run(function ($rootScope, $route) {
    $rootScope.$on("$routeChangeSuccess", function () {

        $rootScope.title = $route.current.title;

    });
});
