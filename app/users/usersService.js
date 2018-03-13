(function () {
    'use strict';
    angular.module('notesApp')
        .factory('UsersService', ['$http', function ($http) {

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
                    return res.data.success;
                })
            }
            return {
                checkUser: checkUser,
                putUser: putUser,
                login: login
            }
        }]);
})();