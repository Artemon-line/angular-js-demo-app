(function () {
    'use strict';
    angular.module('notesApp')
        .factory('SectionsService', ['$http', function ($http) {

            var sections = [];

            var update = function () {
                return $http.get('/sections')
                    .then(function (res) {
                        sections = res.data;
                    })
            }
            update();

            var getData = function (callback) {
                callback(sections);
                return sections;
            }

            var putData = function (data) {
                return $http.post('/sections', data).then(function (res) {
                    sections = res.data;
                })
            }
            return {
                getData: getData,
                putData: putData
            }
        }]);
})();