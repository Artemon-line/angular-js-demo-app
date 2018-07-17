const Section = require("../model/section");
const Utils = require("../utils.js");
var defauldSections = ["Work", "Vacations", "Children", "Other"];

var sections = new Array();

for (let index = 0; index < defauldSections.length; index++) {
  sections.push(new Section(index, defauldSections[index], null));
}

module.exports = function(app) {
  app.get("/sections", function(req, res) {
    var userr = req.session.user || Utils.getUserUUID(req);
    var result = sections.filter(x => x.user == null || x.user === userr);
    res.send(result);
  });

  app.post("/sections", function(req, resp) {
    if (req.body.length == 0) resp.end();
    var newSection = new Section(
      sections.length + 1,
      req.body.title + "",
      req.session.user || Utils.getUserUUID(req)
    );
    sections.push(newSection);

    resp.send({
      success: sections.indexOf(newSection) > -1
    });
  });
};
