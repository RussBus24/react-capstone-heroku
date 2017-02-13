var fetch = require('isomorphic-fetch');
var imdb = require('imdb-api');

var IMDB_QUERY = 'IMDB_QUERY';
var imdbQuery = function(query) {
    return {
        type: IMDB_QUERY,
        query: query
    };
};

var VIOLENCE_RATING = 'VIOLENCE_RATING';
var violenceRating = function(rating) {
    return {
        type: VIOLENCE_RATING,
        rating: rating
    };
};

var LANGUAGE_RATING = 'LANGUAGE_RATING';
var languageRating = function(rating) {
    return {
        type: LANGUAGE_RATING,
        rating: rating
    };
};

var SENSUALITY_RATING = 'SENSUALITY_RATING';
var sensualityRating = function(rating) {
    return {
        type: SENSUALITY_RATING,
        rating: rating
    };
};

var IMDB_TEST_API = 'IMDB_TEST_API';
var imdbTestAPI = function(query) {
    return function(dispatch) {
       imdb.get('Braveheart').then(console.log);
    };
};

exports.IMDB_QUERY = IMDB_QUERY;
exports.imdbQuery= imdbQuery;
exports.VIOLENCE_RATING = VIOLENCE_RATING;
exports.violenceRating = violenceRating;
exports.LANGUAGE_RATING = LANGUAGE_RATING;
exports.languageRating = languageRating;
exports.SENSUALITY_RATING = SENSUALITY_RATING;
exports.sensualityRating = sensualityRating;
exports.IMDB_TEST_API = IMDB_TEST_API;
exports.imdbTestAPI = imdbTestAPI;