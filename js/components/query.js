var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Query = React.createClass({

    apiQuery: function(event) {
        event.preventDefault();
        var searchQuery = this.refs.queryString.value;
        console.log(searchQuery);
        this.props.searchMovie(searchQuery);
    },

    render: function() {

        return (
          <div className="movie-query">
            <p>Please enter a movie of your choice to search for.</p>
            <form id="movieQuery" onSubmit={this.apiQuery}>
              <input
                type="text"
                name="movieQueryInput"
                ref="queryString"
              />
              <input type="submit" name="Submit" value="Find Movie!"/>
            </form>
          </div>
        );
    }
});

var mapStateToProps = function(state, props) {
  return {
    visibleRating: state.seeRating,
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    searchMovie: function(title){dispatch(actions.imdbQuery(title))}
  }
}

var Container = connect(mapStateToProps, mapDispatchToProps)(Query);

module.exports = Container;

//module.exports = Query;
