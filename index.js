var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('./assets'));
var controller = require('./controllers/toDoControllerMongo');
controller(app);
app.listen(3000);
console.log('server started');

