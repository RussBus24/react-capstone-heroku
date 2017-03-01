var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jsonParser = bodyParser.json();
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.static('build'));
app.use(bodyParser.json());

var Quotes = require('./models/quotes');

app.get('/', function(request, response) {
    Quotes.find(function(err, quote) {
        if (err) {
            return response.status(500).json({
                message: 'A server error occured.'
            });
        }
    response.json(quote);
    });
});

exports.app = app;

app.listen(process.env.PORT || 8080, process.env.IP);