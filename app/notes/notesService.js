(function() {
  "use strict";
  angular.module("notesApp").factory("NotesService", [
    "$http",
    function($http) {
      var notes = [];

      var refresh = function() {
        return $http.get("/notes").then(function(response) {
          notes = response.data;
        });
      };

      var getData = function() {
        return notes;
      };

      refresh();

      var addData = function(dataToAdd) {
        return $http
          .put("/notes", {
            user: dataToAdd.user,
            text: dataToAdd.text,
            section: dataToAdd.section
          })
          .then(function(res) {
            refresh();
          });
      };

      var updateData = function(id, section, text) {
        return $http
          .post("/notes", {
            id: id,
            text: text,
            section: section
          })
          .then(res => refresh());
      };
      var deleteData = function(id) {
        return $http
          .delete("/notes", {
            params: {
              id: id
            }
          })
          .then(function(res) {
            refresh();
          });
      };

      return {
        addData: addData,
        deleteData: deleteData,
        getData: getData,
        refresh: refresh,
        updateData: updateData
      };
    }
  ]);
})();
