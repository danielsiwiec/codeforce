'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Match', ['$resource',
    function ($resource) {
        return $resource('http://pubsub.pubnub.com/history/sub-c-32127d56-0f84-11e4-baa3-02ee2ddab7fe/redwood/0/1', {}, {
            query: {method: 'GET', isArray: true}
        });
    }]);