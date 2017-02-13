var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Title = require('./title');
var Query = require('./query');

var Main = React.createClass({
    
    componentDidMount: function() {
        this.props.imdbTestQuery();
    },
    
    render: function() {
        
        return (
        <div>
            <Title />
            
            <Query />
        </div>
        );
    }
    
});

var mapDispatchToProps = function(dispatch) {
    return {
        imdbTestQuery: function(){dispatch(actions.imdbTestApi())}
    };
};

var Container = connect(null, mapDispatchToProps)(Main);

module.exports = Container;

//module.exports = Main;