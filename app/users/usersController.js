(function() {
  "use strict";

  var UsersController = function($window, usersService) {
    this.submit = function() {
      console.log("submit");
      usersService.signUp(this.user);
      $window.location.href = "/";
    };
  };

  UsersController.$inject = ["$window", "UsersService"];

  angular.module("notesApp").controller("UsersController", UsersController);
})();
