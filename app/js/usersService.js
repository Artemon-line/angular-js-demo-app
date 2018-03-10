(function () {
    'use strict';
    angular.module('notesApp')
        .factory('UsersService', ['$http', function ($http) {

            var users = [];
            var update = function () {
                return $http.get('/users')
                    .then(function (res) {
                        users = res.data;
                    })
            }
            update();

            var getUsers = function (callback) {
                if (typeof callback != "undefined") callback(users);
                return users;
            }

            var login = function (login, password) {
                return $http.post("/login", { login: login, password: password })
                    .then(function (res) {
                        return res.data.success;
                    });
            }

            var checkUser = function (name) {
                return $http.get('/check-user?name=' + name)
                    .then(function (res) {
                        return res.data.success;
                    })
            }

            var putUser = function (data) {
                return $http.post('/users', data).then(function (res) {
                    users = res.data;
                })
            }
            return {
                checkUser: checkUser,
                getUsers: getUsers,
                putUser: putUser,
                login: login
            }
        }]);
})();