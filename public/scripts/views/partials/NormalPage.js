'use strict';

var NormalPage = function () {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var rb = require('react-bootstrap');

	var	PageHeader = rb.PageHeader,
		ListGroup = rb.ListGroup,
		ListGroupItem = rb.ListGroupItem;

	var NormalPageObj = React.createClass({
		render: function() {
			return (
				<div className="normal-page container">
					<PageHeader>Hello World <small>React</small></PageHeader>
					<ListGroup>
						<ListGroupItem>Item 1</ListGroupItem>
						<ListGroupItem>Item 2</ListGroupItem>
						<ListGroupItem>...</ListGroupItem>
					</ListGroup>
				</div>
			);
		}
	});
	return NormalPageObj;
}();

module.exports = NormalPage;
