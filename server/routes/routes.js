const notes = require('./notes');
const sections = require('./sections');
const users = require('./users')

module.exports = function (app) {
    notes(app);
    sections(app);
    users(app);
};