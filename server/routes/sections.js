var sections = [
    { title: 'Work' },
    { title: 'Vacations' },
    { title: 'Children' },
    { title: 'Other' }
]

module.exports = function (app) {

    app.get('/sections', function (req, res) {
        res.send(sections);
    })

    app.post('/sections', function (req, resp) {
        if (req.body.length == 0) resp.end();
        sections.push({ title: req.body.title + "" });
        resp.send(sections);
    })

}