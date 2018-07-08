var sha1 = require("sha1");
var id = 0;
var notes = new Array({
  id: id++,
  user: "admin",
  section: "Work",
  text: "test"
});

function getUserUUID(req) {
  return sha1(req.get("User-Agent") + req.connection.remoteAddress);
}

module.exports = function(app) {
  //Read
  app.get("/notes", function(req, res) {
    var result = notes.filter(
      x => x.user === (req.session.user || getUserUUID(req))
    );
    res.send(result);
  });

  // Update
  app.post("/notes", function(req, res) {
    var noteToUpdate = notes.find(x => x.id == req.body.id);
    console.log("!!!!!!!!! " + noteToUpdate);
    if (noteToUpdate == undefined) res.end();
    else {
      var index = notes.indexOf(noteToUpdate);
      console.log("!!!!!!!!! " + index);
      noteToUpdate.text = req.body.text;
      noteToUpdate.section = req.body.section;
      notes[index] = noteToUpdate;
      console.log(notes[index]);

      res.end();
    }
  });

  //Create
  app.put("/notes", function(req, res) {
    var temnpo = req.session.user || getUserUUID(req);
    notes.push({
      id: id++,
      user: req.session.user || getUserUUID(req),
      section: req.body.section,
      text: req.body.text
    });
    res.end();
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
