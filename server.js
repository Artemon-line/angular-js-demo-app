var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');
var port = 3000;

var sections = [
    { title: 'Work' },
    { title: 'Vacations' },
    { title: 'Children' },
    { title: 'Other' }
]

var users = [
    { user: { userName: 'admin' } }
]

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'angular_tutorial',
    resave: 'true',
    saveUninitialized: true
}))

app.get('/notes', function (req, res) {
    res.send(req.session.notes || []);

});

app.post('/notes', function (req, res) {
    if (!req.session.notes) {
        req.session.notes = [];
        req.session.last_note_id = 0;
    }
    var note = req.body;
    note.id = req.session.last_note_id;
    req.session.last_note_id++;
    req.session.notes.push(note);
    res.end();
})

app.delete('/notes', function (req, res) {
    var id = req.query.id;
    var notes = req.session.notes || [];
    var updatedNotesList = [];
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id != id) {
            updatedNotesList.push(notes[i]);
        }
    }
    req.session.notes = updatedNotesList;
    res.end();

});

app.get('/sections', function (req, res) {
    res.send(sections);
});

app.post('/sections', function (req, resp) {
    if (req.body.length == 0) {
        resp.end();
    }
    sections.push({ title: req.body.title + "" });
    resp.send(sections);
})

app.get('/users', function (req, res) {
    res.send(users);
});

app.post('/users', function (req, resp) {
    if (req.body.length == 0) {
        resp.end();
    }
    users.push({ user: req.body.user });
    resp.send(users);
})


app.listen(port, () => console.log('Server runnig on %s', port));
