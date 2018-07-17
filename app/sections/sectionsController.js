(function() {
  "use strict";
  var SectionsController = function(
    sectionService,
    $routeParams,
    notifyingService
  ) {
    this.activeSection = $routeParams.name || undefined;
    this.sections = [];
    sectionService.refresh();

    this.readSections = function() {
      var result = sectionService.getData();
      if (this.sections !== result) this.sections = result;
      if (this.activeSection == undefined && result.length > 0)
        this.activeSection = result[0].title;
      return result;
    };

    this.showSection = function(section) {
      this.activeSection = section.title;
    };

    this.addSection = function() {
      if (this.newSection.length == 0) return;
      var ifExist = false;
      this.sections.forEach(s => {
        if (s.title === this.newSection) {
          ifExist = true;
        }
      });
      if (ifExist) {
        this.newSection = "";
        alert("Duplicated nemes");
        return;
      }

      sectionService.addData({ title: this.newSection });
      this.activeSection = this.newSection;
      this.newSection = "";
    };

    notifyingService.subscribe(this, events.ON_LOGIN, () => {
      sectionService.refresh();
    });
    notifyingService.subscribe(this, events.ON_LOGOUT, () => {
      sectionService.refresh();
    });
  };

  SectionsController.$inject = [
    "SectionsService",
    "$routeParams",
    "NotifyingService"
  ];
  angular
    .module("notesApp")
    .controller("SectionsController", SectionsController);
})();
