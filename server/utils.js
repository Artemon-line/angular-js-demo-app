var sha1 = require("sha1");

module.exports = {
  getUserUUID: function(req) {
    return sha1(req.get("User-Agent") + req.connection.remoteAddress);
  }
};
