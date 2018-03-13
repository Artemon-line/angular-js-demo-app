(function () {
    'use strict';
    angular.module('notesApp', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.
                when('/', {
                    templateUrl: './notes/notes.html'
                })
                .when('/register', {
                    templateUrl: './users/user.form.html',
                    controller: 'UserFormController as ufc',
                    resolve: { usersService: 'UsersService' }
                })

                .when('/section/:name', {
                    templateUrl: './sections/sections.template.html',
                    controller: 'ViewSectionController'
                })
                .otherwise({ redirectTo: '/' })
        });
})();