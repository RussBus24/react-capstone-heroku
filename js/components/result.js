var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Result = React.createClass({

  render: function() {

    return (
      <div className="movie-result">
        <h2>Based on your review versus the movie's actual rating...</h2>
        <p>You are likely a raging sociopath.</p>
      </div>
    );
  }
});

module.exports = Result;

