var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Rating = React.createClass({
    
    apiQuery: function(event) {
        event.preventDefault();
    },
    
    render: function() {
        
        return (
        <div className="movie-rating">
            <h1>Braveheart (1995)</h1>
            <h2>Rated: R</h2>
            <p><span id="ex18-label-1" className="hidden">Violence</span></p>
            <input id="ex19" type="text"
                   data-provide="slider"
                   data-slider-ticks="[1, 2, 3]"
                   data-slider-ticks-labels='["Low", "Moderate", "High"]'
                   data-slider-min="1"
                   data-slider-max="3"
                   data-slider-step="1"
                   data-slider-value="3"
                   data-slider-tooltip="hide" />
            <p><span id="ex18-label-1" className="hidden">Language</span></p>
            <input id="ex19" type="text"
                   data-provide="slider"
                   data-slider-ticks="[1, 2, 3]"
                   data-slider-ticks-labels='["short", "medium", "long"]'
                   data-slider-min="1"
                   data-slider-max="3"
                   data-slider-step="1"
                   data-slider-value="3"
                   data-slider-tooltip="hide" />
            <p><span id="ex18-label-1" className="hidden">Sensuality</span></p>
            <input id="ex19" type="text"
                   data-provide="slider"
                   data-slider-ticks="[1, 2, 3]"
                   data-slider-ticks-labels='["short", "medium", "long"]'
                   data-slider-min="1"
                   data-slider-max="3"
                   data-slider-step="1"
                   data-slider-value="3"
                   data-slider-tooltip="hide" />
        </div>
        );
    }
});

module.exports = Rating;