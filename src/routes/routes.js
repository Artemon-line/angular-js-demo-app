var module = angular.module('notesApp', ['ngRoute']);
module.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
        when('/', {
            templateUrl: 'src/routes/notes/notes.html'
        })
        .when('/register', {
            templateUrl: 'src/routes/userForm/userForm.html',
            controller: 'UserFormController as ufc',
            resolve: { usersService: 'UsersService' }
        })

        .when('/section/:name', {
            templateUrl: 'src/routes/viewSection/viewSection.html',
            controller: 'ViewSectionController'
        })
        .otherwise({ redirectTo: '/' })
});