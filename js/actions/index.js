var fetch = require('isomorphic-fetch');

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

var RATING_VISIBLE = 'RATING_VISIBLE';
var ratingVisible = function(visible) {
    return {
        type: RATING_VISIBLE,
        seeRating: visible
    };
};

var IMDB_TEST = 'IMDB_TEST';
var imdbTest = function() {
  return function(dispatch) {
    var url = 'http://www.omdbapi.com/?t=Braveheart&y=&plot=short&r=json'
    //var url = 'https://api.themoviedb.org/3/movie/550?api_key=07fa12fbf410b578cb104c44a8eb42e6'
    return fetch(url).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
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
exports.IMDB_TEST = IMDB_TEST;
exports.imdbTest = imdbTest;
