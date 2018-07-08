(function() {
  "use strict";
  var NotesController = function(notesService, notifyingService) {
    var nCtrl = this;

    nCtrl.text = "";
    nCtrl.upd = { id: 0, text: "" };
    nCtrl.getNotes = function(activeSection) {
      var result = notesService
        .getData()
        .filter(n => n.section === activeSection);
      return result;
    };
    nCtrl.addNote = function(activeSection, userName) {
      if (nCtrl.text != "") {
        var note = {
          user: userName ? userName : undefined,
          text: nCtrl.text,
          section: activeSection
        };
        notesService.addData(note);
        nCtrl.text = "";
      }
    };

    nCtrl.remove = function(id) {
      notesService.deleteData(id);
    };

    nCtrl.edit = function(id, text) {
      $("#editModal").modal();
      nCtrl.upd = { id, text };
    };

    nCtrl.updateNote = function(noteupd, option) {
      notesService
        .updateData(noteupd.id, option, noteupd.text)
        .then(ref => {
          $("#editModal").modal("hide");
        })
        .catch(err => {
          console.log("Error:", error);
        });
    };

    // notifyingService.subscribe(events.ON_LOGIN, notesService.refresh());
    notifyingService.subscribe(nCtrl, events.ON_LOGIN, () => {
      notesService.refresh();
    });
    notifyingService.subscribe(nCtrl, events.ON_LOGOUT, () => {
      notesService.refresh();
    });
  };

  NotesController.$inject = ["NotesService", "NotifyingService"];
  angular.module("notesApp").controller("NotesController", NotesController);
})();
