'use strict';

var Header = function () {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var Navigationbar = require('./../widgets/Navigationbar');

	var HeaderObj = React.createClass({
		render: function() {
			return (
				<Navigationbar></Navigationbar>
			);
		}
	});
	return HeaderObj;
}();

module.exports = Header;
