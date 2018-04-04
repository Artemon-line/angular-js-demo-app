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
                return $http.post('/notes',
                    {
                        user: dataToAdd.user,
                        text: dataToAdd.text,
                        section: dataToAdd.section
                    })
                    .then(function (res) {
                        refresh();
                    });
            }
            var deleteData = function (data) {
                return $http.delete('/notes',
                    {
                        params: {
                            text: data.text,
                            section: data.section
                        }
                    })
                    .then(function (res) {
                        refresh();
                    });
            }


            return {
                addData: addData,
                deleteData: deleteData,
                getData: getData,
                refresh: refresh
            }
        }]);
})();