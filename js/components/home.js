var React = require('react');
var connect = require('react-redux').connect;

var Home = React.createClass({

    render: function() {

        return (
          <div className="home">
              <h1>Welcome!</h1>
              <p>Here is an opportunity for you to rate movies yourself and see how you stack super
              against the MPAA rating itself. Give it a try!</p>
          </div>
        );

    }
});

module.exports = Home;
