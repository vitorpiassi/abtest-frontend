'use strict';

var NormalPage = function () {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var rb = require('react-bootstrap');
	var	PageHeader = rb.PageHeader;

	var NormalList = require('./../widgets/NormalList');

	var NormalPageObj = React.createClass({
		render: function() {
			return (
				<div className="normal-page container">
					<PageHeader>Hello World <small>React</small></PageHeader>
					<NormalList></NormalList>
				</div>
			);
		}
	});
	return NormalPageObj;
}();

module.exports = NormalPage;
