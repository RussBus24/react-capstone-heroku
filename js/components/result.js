var React = require('react');
var connect = require('react-redux').connect;
var Quotes = require('./quotes');

var actions = require('../actions/index');
var Link = require('react-router').Link;

var Result = React.createClass({

  componentDidMount() {
      this.resultQuote();
  },

    resultQuote: function() {
        var resultValue = +this.props.result;
        console.log(this.props.result);
        if (this.props.result == 0) {
            return Quotes.quotesLow[Math.floor(Math.random() * 3)];
        } else if (this.props.result >= 0 && this.props.result < 1) {
            return Quotes.quotesMed[Math.floor(Math.random() * 3)];
        } else if (this.props.result >= 2 && this.props.result < 3) {
            return Quotes.quotesHigh[Math.floor(Math.random() * 3)];
        } else if (this.props.result >= 3 && this.props.result <= 4) {
            return Quotes.quotesOmg[Math.floor(Math.random() * 3)];
        }
    },

  render: function() {

    return (
      <div className="movie-result">
        <h2>Based on your rating versus the movie's actual rating...</h2>
        <h3><p>{this.resultQuote}</p></h3>
        <p><Link to={'/movie'}>Back</Link></p>
        <p><Link to={'/'}>Start Over</Link></p>
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
    omgValue: state.randomValueOmg,
    result: state.result
  };
};

var Container = connect(mapStateToProps, null)(Result);

module.exports = Container;

//Used for testing purposes.

//module.exports = Result;

