var React = require('react');
var connect = require('react-redux').connect;
//var ReactBootstrapSlider = require("react-bootstrap-slider");
//var Slider = require('bootstrap-slider');
var Ratings = require('react-rating');
var Nouislider = require('react-nouislider');

var actions = require('../actions/index');

var Rating = React.createClass({
    componentDidMount: function() {
      var sliderValue = this.refs.vRating.value;
      console.log(sliderValue);
    },

    getInitialState() {
      return {
        violence: 0,
        language: 0,
        sensuality: 0
      };
    },

    sliderChange: function(event) {
        console.log(event.target.value);
    },

    render: function() {

        return (
            <div className="movie-rating">
            <h1>Braveheart (1995)</h1>
            <h2>Rated: R</h2>
              <p><span id="ex18-label-1" className="hidden">Violence</span></p>
              <input id="ex19" type="text" ref="vRating" onClick={this.sliderChange}
                     data-provide="slider"
                     data-slider-ticks="[1, 2, 3, 4]"
                     data-slider-ticks-labels='["Low", "Moderate", "High", "OMG!"]'
                     data-slider-min="1"
                     data-slider-max="3"
                     data-slider-step="1"
                     data-slider-value="1"
                     data-slider-tooltip="hide" />
              <p><span id="ex18-label-1" className="hidden">Language</span></p>
              <input id="ex19" type="text"
                     data-provide="slider"
                     data-slider-ticks="[1, 2, 3, 4]"
                     data-slider-ticks-labels='["Low", "Moderate", "High", "OMG!"]'
                     data-slider-min="1"
                     data-slider-max="3"
                     data-slider-step="1"
                     data-slider-value="1"
                     data-slider-tooltip="hide" />
              <p><span id="ex18-label-1" className="hidden">Sensuality</span></p>
              <input id="ex19" type="text"
                     data-provide="slider"
                     data-slider-ticks="[1, 2, 3, 4]"
                     data-slider-ticks-labels='["Low", "Moderate", "High", "OMG!"]'
                     data-slider-min="1"
                     data-slider-max="3"
                     data-slider-step="1"
                     data-slider-value="1"
                     data-slider-tooltip="hide" />
              <p><input type="submit" name="Submit" value="Submit Rating"/></p>
              <form>
                <input type="radio" name="violence" value="1" onChange={this.sliderChange} />Low
                <input type="radio" name="violence" value="2" onChange={this.sliderChange} />Medium
                <input type="radio" name="violence" value="3" onChange={this.sliderChange} />High
              </form>
              <Nouislider className="sliders"
                range= {{min: 0, max: 100}}
                start= {[0, 100]} />
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

var Container = connect(mapStateToProps, null)(Rating);

module.exports = Container;

//module.exports = Rating;
