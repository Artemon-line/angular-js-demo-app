const User = require("../model/user");

var id = 0;
var users = [];
users.push(new User(id++, "admin", "1"));

module.exports = function(app) {
  //check
  app.get("/users/:login", (req, res) => {
    res.send({
      success: users.filter(u => req.params.login == u.getUserName()).length > 0
    });
  });

  //add user
  app.put("/users", (req, res) => {
    if (req.body.length == 0) {
      res.end();
    }
    users.push(new User(id++, req.body.username, req.body.password));
    res.send({ success: true });
  });

  app.get("/users", (req, res) => {
    res.send({
      success: req.session.user != undefined,
      login: req.session.user
    });
  });

  //login
  app.post("/users", (req, res) => {
    var isExist =
      users.filter(
        u =>
          u.getUserName() == req.body.login &&
          u.getPassword() == req.body.password
      ).length > 0;
    if (isExist) {
      req.session.user = req.body.login;
    }
    res.send({
      success: isExist
    });
  });

  app.delete("/users/:login", (req, res) => {
    var result = req.session.user == req.params.login;
    if (result) req.session.user = undefined;

    res.send({
      success: result
    });
  });
};
