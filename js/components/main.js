var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Title = require('./title');
var Query = require('./query');
var Rating = require('./rating');

var Main = React.createClass({

    componentDidMount: function() {
        this.props.imdbTest();
    },

    render: function() {

        return (
            <div>
                <Title />

                <Query />

                <Rating />
            </div>
        );
    }

});

var mapDispatchToProps = function(dispatch) {
    return {
        imdbTest: function(){dispatch(actions.imdbTest())}
    };
};

var Container = connect(null, mapDispatchToProps)(Main);

module.exports = Container;

//module.exports = Main;