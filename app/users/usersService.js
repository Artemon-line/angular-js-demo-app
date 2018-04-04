(function () {
    'use strict';
    angular.module('notesApp')
        .factory('UsersService', ['$http', function ($http) {

            var login = function (login, password) {
                return $http.post("/users",
                    {
                        login: login, password: password
                    })
                    .then(function (res) {
                        return res.data.success;
                    });
            }

            var isSignedIn = function () {
                return $http.get("/users")
                    .then(function (res) {
                        if (res.data.success) return res.data.login;
                        else return false;
                    });
            }

            var checkUser = function (name) {
                return $http.get('/users/' + name)
                    .then(function (res) {
                        return res.data.success;
                    })
            }

            var signUp = function (data) {
                return $http.put('/users', data).then(function (res) {
                    return res.data.success;
                })
            }

            var logout = function (username) {
                return $http.delete('/users/' + username).then(function (res) {
                    return res.data.success;
                })

            }
            return {
                checkUser: checkUser,
                isSignedIn: isSignedIn,
                logout: logout,
                signUp: signUp,
                login: login
            }
        }]);
})();