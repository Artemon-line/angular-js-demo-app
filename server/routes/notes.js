var sha1 = require("sha1");

var notes = new Array(
    {
        user: 'admin',
        section: 'Work',
        text: "test"
    }
);

function getUserUUID(req) {
    return sha1(req.get("User-Agent") + req.connection.remoteAddress);
}

module.exports = function (app) {

    app.get('/notes', function (req, res) {

        var result = notes.filter((x) =>
            x.user === (req.session.user || getUserUUID(req))
        );
        res.send(result);
    })

    app.post('/notes', function (req, res) {
        var temnpo = req.session.user || getUserUUID(req);       
        notes.push(
            {
                user: req.session.user || getUserUUID(req),
                section: req.body.section,
                text: req.body.text
            })
        res.end();
    })

    app.delete('/notes', function (req, res) {

        var noteToDelete = notes.find((x) => x.text == req.query.text && x.section == req.query.section);
        if (noteToDelete == undefined) res.end();
        else if (noteToDelete.user === (req.session.user || getUserUUID(req))) { notes.splice(notes.indexOf(noteToDelete), 1); res.end() }
        else { res.end() };
    })
}