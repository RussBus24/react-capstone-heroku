var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Title = React.createClass({
    
    render: function() {
        
        return (
        <div>
            <h1>The RussBus Movie App</h1>
        </div>
        );
    }
});

module.exports = Title;