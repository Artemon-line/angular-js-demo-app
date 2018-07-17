(function() {
  "use strict";
  angular.module("notesApp").factory("SectionsService", [
    "$http",
    function($http) {
      var sections = [];

      var refresh = function() {
        return $http.get("/sections").then(function(res) {
          sections = res.data;
        });
      };

      var getData = function() {
        return sections;
      };

      var addData = function(data) {
        return $http
          .post("/sections", data)
          .then(function(res) {
            sections = res.data;
          })
          .then(function() {
            refresh();
          });
      };
      return {
        getData: getData,
        addData: addData,
        refresh: refresh
      };
    }
  ]);
})();
