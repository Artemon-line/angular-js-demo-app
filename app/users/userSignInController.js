(function () {
    'use strict';

    var UserSignInController = function UserSignInController(usersService, notifyingService) {

        this.message = "User not registered!";

        usersService.isSignedIn().then(x =>
            this.loggedIn = x
        );

        this.signIn = function () {
            usersService.login(this.username, this.password).then(
                (x) => {
                    if (x) {
                        console.log(x + "LOGIN");
                        this.loggedIn = this.username; notifyingService.notify(events.ON_LOGIN)
                    };
                    return x;
                }
            );
        }

        this.logout = function (username) {
            if (username == false) return;
            usersService.logout(username).then(
                (x) => {
                    if (x) {
                    this.loggedIn = false; notifyingService.notify(events.ON_LOGOUT)
                    }
                }
            )
        };
    };

    UserSignInController.$inject = ['UsersService', 'NotifyingService'];

    angular.module('notesApp')
        .controller("UserSignInController", UserSignInController)
        .component("userSignin", {
            templateUrl: "./users/user.signin.html"
        });
})();
