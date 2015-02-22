'use strict';

angular.module('userFilters', [])
    .filter('checkNew', function () {
        return function (condition, expnew, expedit) {
            return condition ? expnew : expedit;
        }
    });
