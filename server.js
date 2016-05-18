var root = __dirname;
var express = require('express');
var fs = require('fs');
var app = express();
var dotenv = require('dotenv');
dotenv.load();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var bcrypt = require('bcrypt');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('./db.js');
var router = express.Router();


// app.listen(3000);

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function() {
    console.log("App running on port : ", app.get('port'));
});

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: 'handlebars'
}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');


app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'allthethings',
    saveUninitialized: false,
    resave: false
}));



app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

fs.readdirSync('./controllers').forEach(function(file) {
    if (file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        console.log('this is the route', route);
        route.controller(app, session);
    }
});



//ROOT ROUTE
app.get('/', function(req, res) {
    var user = req.session.currentUser;
    var name = req.session.name;
    var id = req.session.id;
    var vivId;

    if (id === 1) {
      vivId = 1;
    }

    console.log(">>>>>>>>>>>");
    console.log(data);
    var data = {
        user: user,
        name: name,
        id: vivId
    }
    console.log(data);
    res.render('home', data);

});
