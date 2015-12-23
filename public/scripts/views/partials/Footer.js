'use strict';

var Footer = function () {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var Navigationbar = require('./../widgets/Navigationbar');

	var FooterObj = React.createClass({
		render: function() {
			return (
				<Navigationbar></Navigationbar>
			);
		}
	});
	return FooterObj;
}();

module.exports = Footer;
