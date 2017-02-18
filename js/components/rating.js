var React = require('react');
var connect = require('react-redux').connect;
//var ReactBootstrapSlider = require("react-bootstrap-slider");
//var Slider = require('bootstrap-slider');
var Ratings = require('react-rating');
var Nouislider = require('react-nouislider');

var actions = require('../actions/index');

var Rating = React.createClass({
    componentDidMount: function() {

    },

    getInitialState() {
      return {
        violence: 0,
        language: 0,
        sensuality: 0
      };
    },

    violenceRate: function(event) {
        console.log(event.target.value);
        this.setState({
          violence: event.target.value
        });
        this.props.setViolenceRate(this.state.violence);
    },

    languageRate: function(event) {
        console.log(event.target.value);
        this.setState({
        language: event.target.value
      });
    },

    sensualityRate: function(event) {
      console.log(event.target.value);
      this.setState({
        sensuality: event.target.value
      });
    },

    render: function() {

        return (
            <div className="movie-rating">
            <h1>Braveheart (1995)</h1>
            <h2>Rated: R</h2>
              <h2 color="#fff">Rate movie below on each category</h2>
              <h3><span id="ex18-label-1" className="hidden">Violence</span></h3>
              <form>
                <input type="radio" name="violence" value="1" onChange={this.violenceRate} />Low
                <input type="radio" name="violence" value="2" onChange={this.violenceRate} />Medium
                <input type="radio" name="violence" value="3" onChange={this.violenceRate} />High
                <input type="radio" name="violence" value="4" onChange={this.violenceRate} />OMG!
              </form>
              <h3><span id="ex18-label-1" className="hidden">Language</span></h3>
              <form>
                <input type="radio" name="violence" value="1" onChange={this.languageRate} />Low
                <input type="radio" name="violence" value="2" onChange={this.languageRate} />Medium
                <input type="radio" name="violence" value="3" onChange={this.languageRate} />High
                <input type="radio" name="violence" value="4" onChange={this.languageRate} />OMG!
              </form>
              <h3><span id="ex18-label-1" className="hidden">Sensuality</span></h3>
              <form>
                <input type="radio" name="violence" value="1" onChange={this.sensualityRate} />Low
                <input type="radio" name="violence" value="2" onChange={this.sensualityRate} />Medium
                <input type="radio" name="violence" value="3" onChange={this.sensualityRate} />High
                <input type="radio" name="violence" value="4" onChange={this.sensualityRate} />OMG!
              </form>
              <p><input type="submit" name="Submit" value="Submit Rating"/></p>
            </div>
        );
    }
});

var mapStateToProps = function(state, props) {
  return {
    violenceRating: state.violenceRating,
    languageRating: state.languageRating,
    sensualityRating: state.sensualityRating
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    setViolenceRate: function(rating){dispatch(actions.violenceRating(rating))},
    setLanguageRate: function(rating){dispatch(actions.languageRating(rating))},
    setSensualityRate: function(rating){dispatch(actions.sensualityRating(rating))}
  };
};

var Container = connect(mapStateToProps, mapDispatchToProps)(Rating);

module.exports = Container;

//module.exports = Rating;
