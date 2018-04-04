(function () {
    'use strict';
    angular.module('notesApp')
        .factory('NotifyingService', ['$rootScope', function ($rootScope) {

            var subscribe = function (scope, event, callback) {
                var handler = $rootScope.$on(event, callback);                                
                $rootScope.$new(true).$on('$destroy', handler);               
            }

            var notify = function (event) {
                $rootScope.$emit(event);
            }

            return {
                subscribe: subscribe,
                notify: notify
            }
        }]);
})();