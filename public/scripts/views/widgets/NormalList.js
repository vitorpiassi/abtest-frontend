'use strict';

var NormalList = function () {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var rb = require('react-bootstrap');

	var	ListGroup = rb.ListGroup,
		ListGroupItem = rb.ListGroupItem;

	var NormalListObj = React.createClass({
		getInitialState: function() {
			return {items: [{id: 1, value: 'teste'}, {id: 2, value: 'testea'}, {id: 3, value: 'testeb'}]};
		},
		remove: function (item) {
			var items = this.state.items;
			var index = items.indexOf(item);
			items.slice(index, 1);
			this.setState({items: items});
		},
		render: function() {
			return (
				<ListGroup>
					{this.state.items.map(function(item) {
						return <ListGroupItem key={item.id} onClick={this.remove.bind(this, item)}>{item.value}</ListGroupItem>;
					}.bind(this))}
				</ListGroup>
			);
		}
	});
	return NormalListObj;
}();

module.exports = NormalList;
