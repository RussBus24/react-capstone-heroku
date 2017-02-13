var React = require('react');
var connect = require('react-redux').connect;
var imdb = require('imdb-api');

var actions = require('../actions/index');

var Query = React.createClass({
    
    apiQuery: function(event) {
        event.preventDefault();
    },
    
    render: function() {
        
        return (
        <div className="movie-query">
            <form id="movieQuery" onSubmit={this.apiQuery}>
                <p>Please enter a movie of your choice to search for.</p>
                <form id="movieQuery">
                <input
                    type="text"
                    name="movieQueryInput"
                />
                <input type="submit" name="Submit" value="Find Movie!"/>
                </form>
            </form>
        </div>
        );
    }
});

module.exports = Query;