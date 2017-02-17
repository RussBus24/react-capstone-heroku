var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jsonParser = bodyParser.json();
var cors = require('cors');

var config = require('./config');

var app = express();
app.use(cors());
app.use(express.static('build'));
app.use(bodyParser.json());

var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}

var Quotes = require('./models/quotes');

app.get('/fewest-guesses', function(request, response) {
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
exports.runServer = runServer;

//app.listen(process.env.PORT || 8080, process.env.IP);