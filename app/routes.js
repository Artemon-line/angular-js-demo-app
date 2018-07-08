(function () {
    'use strict';
    angular.module('notesApp', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.
                when('/', {
                    templateUrl: './notes/notes.view.html'
                })
                .when('/register', {
                    templateUrl: './users/user.form.html',
                    controller: 'UsersController as uc',
                    resolve: { usersService: 'UsersService' }
                })

                .when('/section/:name', {
                    templateUrl: './notes/notes.view.html',
                    controller: 'ViewSectionController as sc'
                })
                .otherwise({ redirectTo: '/' })
        });
})();