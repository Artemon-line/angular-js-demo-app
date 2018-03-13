var notesPage = require('../po/notes.page');
var categoriesPage = require('../po/categories.page');
describe('iteractions with notes list', function () {

    beforeEach(function () {
        browser.get('');
    })

    it('should add a note', function () {

        var noteContent = 'TestNote';
        for (let index = 0; index < 3; index++) {
            notesPage.addNote(`${noteContent} ${index}`);
        }

        expect(notesPage.getNotes())
            .toEqual([
                `${noteContent} 0`,
                `${noteContent} 1`,
                `${noteContent} 2`]);

    });

    it('should remove a note', function () {

        var noteContent = 'TestRemoveNote';
        for (let index = 0; index < 3; index++) {
            notesPage.addNote(`${noteContent} ${index}`);
        }
        notesPage.deleteNote(`${noteContent} 1`);
        expect(notesPage.getNotes())
            .not.toContain(`${noteContent} 1`);

    });

   

    //it('shpuld be able to login', () => { })
});