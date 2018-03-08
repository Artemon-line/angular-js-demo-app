(function () {
    'use strict';
    var NotesController = function (notesService) {
        this.text = '';

        this.getNotes = function (activeSection) {
            return notesService.getData()
                .filter(n => n.section === activeSection);
        }
        this.addNote = function (activeSection) {
            if (this.text != '') {
                var note = {
                    text: this.text,
                    section: activeSection
                }
                console.log(note.text);
                notesService.addData(note)
                this.text = '';
            }
        }
        this.remove = function (id) {
            notesService.deleteData(id);
        }

    };

    NotesController.$inject = ['NotesService'];
    angular.module('notesApp').controller('NotesController', NotesController);

})();