(function () {
    var ViewSectionController = function ($routeParams) {
        this.activeSection = $routeParams.name;
        this.$inject = ['NotesService', '$routeParams'];
    };
    
    angular.module('notesApp').controller("ViewSectionController", ViewSectionController);        
})();
