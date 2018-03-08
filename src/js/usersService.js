(function () {
    'use strict';
    const PATH = '/users';
    angular.module('notesApp')
        .factory('UsersService', ['$http', function ($http) {

            var users = [];
            var update = function () {
                return $http.get(PATH)
                    .then(function (res) {
                        users = res.data;
                    })
            }
            update();

            var getUsers = function (callback) {
                callback(users);
                return users;
            }

            var putUser = function (data) {
                return $http.post(PATH, data).then(function (res) {
                    users = res.data;
                })
            }
            return {
                getUsers: getUsers,
                putUser: putUser
            }
        }]);
})();