var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Main = require('./main');

var Modal = React.createClass({

    render: function() {
        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>The RussBus Movie App</h3>
                    <div>
                        <p>This app allows you to search for a movie and rate it yourself to see how you stack
                        up against the MPAA original rating. For entertainment purposes only.</p>
                        <a className="close" href="#" onClick={this.props.close}>Got It!</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Modal;
