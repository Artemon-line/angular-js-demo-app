(function () {
    'use strict';
    var NotesController = function (notesService, notifyingService) {
        this.text = '';

        this.getNotes = function (activeSection) {
            var result = notesService.getData().filter(n => n.section === activeSection);
            return result;
        }
        this.addNote = function (activeSection, userName) {
            if (this.text != '') {
                var note = {
                    user: userName ? userName : undefined,
                    text: this.text,
                    section: activeSection
                }
                notesService.addData(note)
                this.text = '';
            }
        }
        this.remove = function (note) {
            notesService.deleteData({ text: note.text, section: note.section });
        }

        // notifyingService.subscribe(events.ON_LOGIN, notesService.refresh());
        notifyingService.subscribe(this, events.ON_LOGIN, () => {
            notesService.refresh()
        })
        notifyingService.subscribe(this, events.ON_LOGOUT, () => {
            notesService.refresh()
        });

    };

    NotesController.$inject = ['NotesService', 'NotifyingService'];
    angular.module('notesApp').controller('NotesController', NotesController);

})();