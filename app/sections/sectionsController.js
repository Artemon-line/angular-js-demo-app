(function () {
    'use strict';
    var SectionsController = function (sectionService) {
        this.activeSection = undefined;
        this.sections = [];

        this.readSections = function () {
            return sectionService.getData((x) => {
                if (this.sections !== x) this.sections = x;
                if (this.activeSection == undefined && x.length > 0)
                    this.activeSection = x[0].title;
            }
            );
        }

        this.showSection = function (section) {
            this.activeSection = section.title;
        }

        this.addSection = function () {
            if (this.newSection.length == 0) return;
            var ifExist = false;
            this.sections.forEach(s => {
                if (s.title === this.newSection) {

                    ifExist = true;
                };
            });
            if (ifExist) {
                this.newSection = '';
                alert('Duplicated nemes');
                return;
            }

            sectionService.putData({ title: this.newSection });
            this.activeSection = this.newSection;
            this.newSection = '';
        }
    };

    SectionsController.$inject = ['SectionsService'];
    angular.module('notesApp').controller('SectionsController', SectionsController);

})();