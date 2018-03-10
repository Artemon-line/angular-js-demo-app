angular.module('notesApp').controller("UserFormController", function (usersService) {

    this.user = {};

    this.submit = function () {
        usersService.putUser({
            user: this.user
        });
    }

});

