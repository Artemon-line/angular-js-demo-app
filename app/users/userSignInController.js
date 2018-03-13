(function () {
    'use strict';

    var UserSignInController = function UserSignInController(usersService) {        
        this.loggedIn = false;
        this.signIn = function () {
            usersService.login(this.username, this.password).then(
                x => this.loggedIn = x
            );
            this.message = "User not registered!";
            if(this.rememberMe) ;
        }
    };

    UserSignInController.$inject = ['UsersService'];
    angular
    angular.module('notesApp')
        .controller("UserSignInController", UserSignInController)
        .component("userSignin", {
            templateUrl: "./users/user.signin.html"
        });
})();
