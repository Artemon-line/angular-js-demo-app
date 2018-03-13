(function () {
    'use strict';

    var UserFormController = function (usersService) {

        this.user = {};

        this.submit = function () {
            usersService.putUser({
                user: this.user
            });
        }
    };

    UserFormController.$inject = ['UsersService'];

    angular.module('notesApp').controller("UserFormController", UserFormController);
})();
