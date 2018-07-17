var NotesPage = function() {
  var notes = {
    buttonPost: element(by.buttonText("Post note")),
    input: element(by.model("nc.text")),
    list: element.all(by.repeater("note in nc.getNotes(sc.activeSection)"))
  };

  var noteLocator = 'div p[data-id="note-text"';

  //Notes
  this.addNote = function(noteToadd) {
    notes.input.sendKeys(noteToadd).then(() => {
      notes.buttonPost.click();
    });
  };
  this.getNotes = function() {
    return notes.list.map((x, i) => {
      return x.$(noteLocator).getText();
    });
  };

  this.deleteNote = function(noteText) {
    notes.list
      .filter((elem, index) => {
        return elem
          .$(noteLocator)
          .getText()
          .then(text => text == noteText);
      })
      .first()
      .$("div .btn-warning")
      .click();
  };
};

module.exports = new NotesPage();
