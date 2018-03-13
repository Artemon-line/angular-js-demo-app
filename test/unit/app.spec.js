describe('NotesController', function () {

    beforeEach(module('notesApp'));

    it('should create a `phones` model with 3 phones', inject(function ($componentController) {
        var ctrl = $componentController('NotesController');

        expect(ctrl.phones.length).toBe(3);
    }));

});