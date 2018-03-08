module.controller("UserFormController", function (usersService) {

    this.user = {};

    this.submit = function () {
        console.log(this.user)
        usersService.putUser({
            user: this.user
        });
    }
    module.directive("matchTo", function () {
        return {
            require: "ngModel",
            scope: {
                otherValue: "=matchTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.matchTo = function (modelValue) {
                    return modelValue == scope.otherValue;
                };

                scope.$watch("otherValue", function () {
                    ngModel.$validate();
                });
            }
        };
    });
    module.directive('userExist', function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attr, ngModel) {
                ngModel.$asyncValidators.userExist =
                    function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        return !usersService.getUsers().filter(user => user.userName == value).lengh > 0;
                    }
            }
        }
    });
});
