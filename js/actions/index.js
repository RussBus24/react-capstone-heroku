var fetch = require('isomorphic-fetch');

var IMDB_QUERY = 'IMDB_QUERY';
var imdbQuery = function(query) {
    return {
        type: IMDB_QUERY,
        query: query
    };
};

var RATE_RESULT = 'RATE_RESULT';
var rateResult = function(query) {
    return {
        type: RATE_RESULT,
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

var RESULT_QUOTE = 'RESULT_QUOTE';
var resultQuote = function(quote) {
    return {
        type: RESULT_QUOTE,
        resultQuote: quote
    };
};

var MOVIE_INFO = 'MOVIE_INFO';
var movieInfo = function(title, year, rating) {
    return {
        type: MOVIE_INFO,
        title: title,
        year: year,
        rating: rating
    };
};

var IMDB_TEST = 'IMDB_TEST';
var imdbTest = function(query) {
  return function(dispatch) {
    var url = 'https://www.omdbapi.com/?t=' + query + '&y=&plot=short&r=json';
    //var url = 'http://www.omdbapi.com/?t=Braveheart&y=&plot=short&r=json';
    //var url = 'https://api.themoviedb.org/3/movie/550?api_key=07fa12fbf410b578cb104c44a8eb42e6';
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
        var title = data.Title;
        var year = data.Year;
        var rating = data.Rated;
        console.log(data.Title);
        console.log(data.Year);
        console.log(data.Rated);
        return dispatch(
          movieInfo(title, year, rating)
        );
      });
  };
};

var RETRIEVE_QUOTE = 'RETRIEVE_QUOTE';
var retrieveQuote = function(query) {
    return function(dispatch) {
      var url = '/retrieve-quote';
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
    };
};

exports.IMDB_QUERY = IMDB_QUERY;
exports.imdbQuery= imdbQuery;
exports.RATE_RESULT = RATE_RESULT;
exports.rateResult = rateResult;
exports.VIOLENCE_RATING = VIOLENCE_RATING;
exports.violenceRating = violenceRating;
exports.LANGUAGE_RATING = LANGUAGE_RATING;
exports.languageRating = languageRating;
exports.SENSUALITY_RATING = SENSUALITY_RATING;
exports.sensualityRating = sensualityRating;
exports.IMDB_TEST = IMDB_TEST;
exports.imdbTest = imdbTest;
exports.RETRIEVE_QUOTE = RESULT_QUOTE;
exports.retrieveQuote = retrieveQuote;
exports.MOVIE_INFO = MOVIE_INFO;
exports.movieInfo = movieInfo;
