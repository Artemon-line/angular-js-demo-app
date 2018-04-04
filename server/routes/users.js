
var users = [
    { username: 'admin', password: '1' }
]

module.exports = function (app) {

    //check
    app.get('/users/:login', (req, res) => {
        res.send({
            success: users.filter(u => req.params.login == u.username).length > 0,
        });
    });

    //add user
    app.put('/users', (req, res) => {
        if (req.body.length == 0) {
            res.end();
        }
        users.push({ username: req.body.username, password: req.body.password });
        res.send({ success: true });
    })

    app.get('/users', (req, res) => {
        res.send({
            success: req.session.user != undefined,
            login: req.session.user
        })
    })

    //login
    app.post('/users', (req, res) => {

        var isExist = users
            .filter(u =>
                u.username == req.body.login
                && u.password == req.body.password
            ).length > 0;
        if (isExist) {
            req.session.user = req.body.login
        };
        res.send({
            success: isExist
        })
    })

    app.delete('/users/:login', (req, res) => {
        var result = req.session.user == req.params.login;
        if (result) req.session.user = undefined;

        res.send({
            success: result
        })
    })
}