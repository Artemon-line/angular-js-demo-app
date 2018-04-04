(function () {
    'use strict';

    var UsersController = function (usersService) {
        
        this.submit = function () { usersService.signUp(this.user); }
    }

    UsersController.$inject = ['UsersService'];

    angular.module('notesApp').controller("UsersController", UsersController);
})();
