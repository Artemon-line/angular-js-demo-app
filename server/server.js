var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');
var port = 3000;




app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'angular_tutorial',
    resave: 'true',
    saveUninitialized: true
}))

require('./routes/routes')(app);

app.listen(port, () => console.log('Server runnig on %s', port));
