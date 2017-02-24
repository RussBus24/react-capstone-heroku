
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var expect = require('chai').expect;
var store = require('../js/store');

var Rating = require('../js/components/rating');

describe('Rating Component', function() {
    it('Renders Rating component', function() {

        var renderer = TestUtils.createRenderer();
        renderer.render(<Rating store={store} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('movie-rating');

        var p = result.props.children[0];
        p.type.should.equal('p');

        var form = result.props.children[2];
        form.id.should.equal('movieQuery');

        var input = result.props.children[3];
        input.type.should.equal('text');
        input.name.should.equal('movieQueryInput');

    });
});
