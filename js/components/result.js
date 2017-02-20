var React = require('react');
var connect = require('react-redux').connect;
var Quotes = require('./quotes');

var actions = require('../actions/index');

var Result = React.createClass({

  resultQuote: function() {
    var randomPick = Math.floor(Math.random() * 3);
  },

  render: function() {

    return (
      <div className="movie-result">
        <h2>Based on your rating versus the movie's actual rating...</h2>
        <h1><p>{Quotes.quotesMed[Math.floor(Math.random() * 3)]}</p></h1>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    violenceRating: state.violenceRating,
    languageRating: state.languageRating,
    sensualityRating: state.sensualityRating,
    movieTitle: state.movieTitle,
    movieYear: state.movieYear,
    movieRating: state.movieRating,
    lowValue: state.randomValueLow,
    medValue: state.randomValueMed,
    highValue: state.randomValueHigh,
    omgValue: state.randomValueOmg
  };
};

var Container = connect(mapStateToProps, null)(Result);

module.exports = Container;

//module.exports = Result;

