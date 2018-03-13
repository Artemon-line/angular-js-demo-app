(function () {
    var ViewSectionController = function ($routeParams) {
        this.activeSection = $routeParams.name;
        this.$inject = ['NotesService'];
    };
    
    angular.module('notesApp').controller("ViewSectionController", ViewSectionController);        
})();
