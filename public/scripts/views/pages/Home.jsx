'use strict';

var Home = function () {
	var HomeObj = {
		render: function() {
			var React = require('react');
			var ReactDOM = require('react-dom');
			var NormalPage = require('./../partials/NormalPage');

			var container = document.getElementById('page');

			ReactDOM.render(<NormalPage></NormalPage>, container);			
		}	
	}
	return HomeObj;
}();

module.exports = Home;