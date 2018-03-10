angular.module('notesApp').controller("ViewSectionController",
    function ($routeParams) {
        this.activeSection = $routeParams.name;
        this.$inject = ['NotesService'];
    });
