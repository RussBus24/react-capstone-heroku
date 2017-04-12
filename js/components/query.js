var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var browserHistory = require('react-router').browserHistory;

var Query = React.createClass({

    querySearch: function(event) {
        event.preventDefault();
        var query = this.refs.queryString.value;
        this.props.movieFind(query);
        browserHistory.push('/movie');
    },

    render: function() {

        return (
          <div className="movie-query">
            <p>Please enter a movie of your choice to search for.</p>
            <p>(Type full movie name if possible for best result)</p>
            <section className="webdesigntuts-workshop">
                <form id="movieQuery" onSubmit={this.querySearch}>
                  <input
                    type="search"
                    name="movieQueryInput"
                    placeholder="What movie are we looking for?"
                    ref="queryString"
                  />
                    <button>Find Movie!</button>
                </form>
            </section>
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
    searchMovie: function(title){dispatch(actions.imdbQuery(title))},
    movieFind: function(query){dispatch(actions.imdbTest(query))}
  }
}

var Container = connect(mapStateToProps, mapDispatchToProps)(Query);

module.exports = Container;

//Used for testing purposes

//module.exports = Query;
