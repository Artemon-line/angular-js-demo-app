
var users = [
    { user: { username: 'admin', password: 'admin1' } }
]

module.exports = function (app) {
    app.get('/users', function (req, res) {
        res.send(users);
    });

    app.get('/check-user', function (req, res) {
        res.send({ success: users.filter(u => req.query.name == u.user.userName).length > 0 });
    });

    app.post('/users', function (req, res) {
        if (req.body.length == 0) {
            res.end();
        }
        users.push({ user: req.body.user });
        res.send(users);
    })

    app.post('/login', function (req, res) {
        res.send({
            success:
                users
                    .filter(u =>
                        u.user.username == req.body.login
                        && u.user.password == req.body.password
                    ).length > 0
        })
    })
}