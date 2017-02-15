/**
 * Created by RussBus24 on 2/13/2017.
 */
var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Query = React.createClass({

    apiQuery: function(event) {
        event.preventDefault();
    },

    render: function() {

        return (
          <div className="movie-query">
            <p>Please enter a movie of your choice to search for.</p>
            <form id="movieQuery" ref="queryString">
              <input
                type="text"
                name="movieQueryInput"
              />
              <input type="submit" name="Submit" onSubmit={this.apiQuery} value="Find Movie!"/>
            </form>
          </div>
        );
    }
});

module.exports = Query;
