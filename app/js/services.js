'use strict';

var dataServices = angular.module('dataServices', []);

dataServices.factory('Data', ['Gender', function (Gender) {
    var users = [
        {email: 'Mikey@mail.com', pass: "123", gender: Gender.MALE, notification: true},
        {email: 'Sara@mail.com', pass: "456", gender: Gender.FEMALE, notification: false},
        {email: 'Jack@mail.com', pass: "789", gender: Gender.MALE, notification: true},
        {email: 'John@mail.com', pass: "abc", gender: Gender.MALE, notification: false},
        {email: 'Peter@mail.com', pass: "def", gender: Gender.MALE, notification: true}
    ];
    return {
        get: function (i) {
            return users[i]
        },
        query: function () {
            return users
        },
        add: function (user) {
            users.push(user)
        },
        remove: function (i) {
            users.splice(i, 1)
        },
        update: function (i, user) {
            users[i] = user
        }
    };
}]);

dataServices.value('Gender',
    Object.freeze(
        {
            MALE: 'Male',
            FEMALE: 'Female'
        }
    )
);
