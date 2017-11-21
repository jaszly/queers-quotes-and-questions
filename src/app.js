const express = require('express');
const bodyParser = require('body-parser'); <<
<< << < Updated upstream
const routes = require('./routes');
const cheerio = require('cheerio');
const fs = require('fs');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', routes);

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!'
  })
})

var scrapQoutes = function (artist) {
  var url = "http"
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});