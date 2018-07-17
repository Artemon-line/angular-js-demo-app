const utils = require("../utils.js");
const Note = require("../model/note");

var id = 0;
var notes = [];

notes.push(new Note(id++, "admin", "Work", "test"));

module.exports = function(app) {
  //Read
  app.get("/notes", function(req, res) {
    var result = notes.filter(
      x => x.user === (req.session.user || utils.getUserUUID(req))
    );
    res.send(result);
  });

  // Update
  app.post("/notes", function(req, res) {
    var noteToUpdate = notes.find(x => x.id == req.body.id);
    if (noteToUpdate == undefined) res.end();
    else {
      var index = notes.indexOf(noteToUpdate);
      noteToUpdate.text = req.body.text;
      noteToUpdate.section = req.body.section;
      noteToUpdate.time = new Date();
      notes[index] = noteToUpdate;
      res.send({ success: notes.indexOf(noteToUpdate) > -1 });
    }
  });

  //Create
  app.put("/notes", function(req, res) {
    var newNote = new Note(
      id++,
      req.session.user || utils.getUserUUID(req),
      req.body.section,
      req.body.text
    );
    notes.push(newNote);
    res.send({ success: notes.indexOf(newNote) > -1 });
  });

  //Delete
  app.delete("/notes", function(req, res) {
    var noteToDelete = notes.find(x => x.id == req.query.id);
    if (noteToDelete == undefined) res.end();
    else {
      notes.splice(notes.indexOf(noteToDelete), 1);
      res.end();
    }
  });
};
