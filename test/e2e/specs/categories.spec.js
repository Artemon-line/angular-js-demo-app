var categoriesPage = require('../po/categories.page');
var notesPage = require('../po/notes.page');
describe('iteractions with categories', function () {

    beforeEach(function () {
        browser.get('');
    })

    it('should add a category', function () {
        var catName = 'TestCat';
        categoriesPage.addCategory(catName);
        notesPage.addNote('TestNote');
        expect(categoriesPage.getCategories()).toContain({ name: catName, count: '1' });
    })

    it('should navigate by categories', function () {
        var catNameSelect = 'TestCatSelect';
        categoriesPage.addCategory(catNameSelect);
        categoriesPage.selectCategory(catNameSelect);

        for (let index = 0; index < 3; index++) {
            notesPage.addNote(`${catNameSelect} ${index}`);
        }

        //categoriesPage.filterActiveSection();
        //expect(categoriesPage.getURL()).toContain(catNameSelect);

        expect(notesPage.getNotes())
            .toEqual([
                `${catNameSelect} 0`,
                `${catNameSelect} 1`,
                `${catNameSelect} 2`]);

    })
});