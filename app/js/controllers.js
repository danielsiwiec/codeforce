'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('NeedController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.unpaid = function () {
            $location.path('needMatches')
        }
    }]);

appControllers.controller('NeedMatchesController', ['$scope', 'Match',
    function ($scope, Match) {
        $scope.matches = Match.query();
    }]);

appControllers.controller('JediDetailController', ['$scope',
    function ($scope) {
        $scope.name = "John Doe";
            $scope.reputation = "1320";
            $scope.img = "img/users/3788520.jpeg";
    }]);

appControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);
