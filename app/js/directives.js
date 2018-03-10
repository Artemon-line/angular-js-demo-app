(function () {
    'use strict';
    var MatchToDirective = function () {
        return {
            require: "ngModel",
            scope: {
                otherValue: "=matchTo"
            },
            link: function (scope, element, attributes, ngModel) {
                ngModel.$validators.matchTo = function (modelValue) {
                    console.log(scope.otherValue)
                    return modelValue == scope.otherValue;
                };
                scope.$watch("otherValue", function () {
                    ngModel.$validate();
                });
            }
        };
    };

    var UserExistDirective = function (usersService, $q) {

        return {
            require: 'ngModel',
            link: function (scope, elem, attr, ngModel) {
                ngModel.$asyncValidators.userExist =
                    function (modelValue, viewValue) {
                        var value = modelValue || viewValue;                        
                        if (usersService.checkUser(value)) {
                            return $q.resolve();     // to mark as valid or
                        } else {
                            return $q.reject(); // to mark as invalid
                        }
                    }
            }
        }
    };
    UserExistDirective.$inject = ['UsersService', '$q'];
    angular.module('notesApp').directive("userExist", UserExistDirective);
    angular.module('notesApp').directive("matchTo", MatchToDirective);
})();