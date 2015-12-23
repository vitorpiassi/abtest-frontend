'use strict';

var React = require('React');

var Button = React.createClass({
	render: function() {
		return <button class="btn">{this.props.label}</button>;
	}
});

module.exports = Button;