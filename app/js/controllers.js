'use strict';

var userControllers = angular.module('userControllers', []);

userControllers.controller('ListController', ['$location', '$scope', 'Data',
    function ($location, $scope, Data) {
        $scope.users = Data.query();

        $scope.editUser = function (id) {
            $location.path('edit/' + id);
        };

        $scope.deleteUser = function (id) {
            Data.remove(id);
        };
    }]);

userControllers.controller('EditUserController', ['$location', '$scope', '$routeParams', 'Gender', 'Data',
    function ($location, $scope, $routeParams, Gender, Data) {
        $scope.enumGender = Gender;
        var id = $routeParams.id;
        $scope.isNewUser = false;
        $scope.user = Data.get(id);
        $scope.errVisible = false;

        $scope.submit = function () {
            if (!isValidEmail($scope)) {
                return;
            }
            Data.update(id, $scope.user);
            $location.path('list');
        };
    }]);

userControllers.controller('NewUserController', ['$location', '$scope', 'Gender', 'Data',
    function ($location, $scope, Gender, Data) {
        $scope.enumGender = Gender;
        $scope.isNewUser = true;
        $scope.errVisible = false;

        $scope.submit = function () {
            if (!isValidEmail($scope)) {
                return;
            }
            Data.add($scope.user);
            $location.path('list');
        };
    }]);

function isValidEmail(scope) {
    if (scope.user.email == null) {
        scope.errorMsg = "Email is not valid!";
        scope.errVisible = true;
        return false;
    }
    return true;
}