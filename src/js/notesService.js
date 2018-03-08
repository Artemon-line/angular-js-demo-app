(function () {
    'use strict';
    angular.module('notesApp')
        .factory('NotesService', ['$http', function ($http) {

            var notes = [];

            var refresh = function () {
                return $http.get('/notes')
                    .then(function (response) {
                        notes = response.data;
                    });
            };

            var getData = function () {
                return notes;
            };


            refresh();

            var addData = function (dataToAdd) {
                return $http.post('/notes', dataToAdd)
                    .then(function (res) {
                        refresh();
                    });
            }
            var deleteData = function (datatoDelete) {
                return $http.delete('/notes', { params: { id: datatoDelete } })
                    .then(function (res) {
                        refresh();
                    });

            }


            return {
                getData: getData,
                addData: addData,
                deleteData: deleteData
            }
        }]);
})();