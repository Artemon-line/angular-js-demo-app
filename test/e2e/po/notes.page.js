var NotesPage = function () {
    var notes = {
        buttonPost: element(by.buttonText('Post note')),
        input: element(by.model('nc.text')),
        list: element.all(by.repeater('note in nc.getNotes(sc.activeSection)')),
        activeViewList: element.all(by.repeater('note in nc.getNotes(vc.activeSection)'))
    };

    //Notes
    this.addNote = function (noteToadd) {
        notes.input.sendKeys(noteToadd).then(() => {
            notes.buttonPost.click();
        });
    }
    this.getNotes = function () {
        return notes.list.map(x => {
            return x.$('li').getText();
        })
    }

    this.getNotesFromActiveView = function () {
        return notes.activeViewList.map(x => {
            return x.$('li').getText();
        })
    }

    this.deleteNote = function (noteText) {
        notes.list.filter((elem, index) => {
            return elem.$('li').getText().then((text) =>
                text === noteText
            );
        }).first().$('button').click();
    }
}

module.exports = new NotesPage();
