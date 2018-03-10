angular.module('notesApp', ['ngRoute']);

angular.module('notesApp').config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
        when('/', {
            templateUrl: '/routes/notes/notes.html'            
        })
        .when('/register', {
            templateUrl: '/routes/userForm/userForm.html',
            controller: 'UserFormController as ufc',
            resolve: { usersService: 'UsersService' }
        })

        .when('/section/:name', {
            templateUrl: '/routes/viewSection/viewSection.html',
            controller: 'ViewSectionController'
        })
        .otherwise({ redirectTo: '/' })
});