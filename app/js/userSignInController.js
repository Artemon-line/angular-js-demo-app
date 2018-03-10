(function () {
    'use strict';

    var UserSignInController = function (usersService) {

        this.signIn = function () {
            usersService.login(this.username, this.password).then(
                x => this.loggedIn = x
            );
            this.message = "User not registered!";
        }
    };

    UserSignInController.$inject = ['UsersService'];
    angular.module('notesApp').controller("UserSignInController", UserSignInController);
})();
