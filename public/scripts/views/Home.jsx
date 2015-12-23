'use strict';

function Home () {
	var homeObj = {
		render: function() {
			var React = require('React');
			var ReactDOM = require('ReactDom');
			var Button = require('./widgets/Button');

			console.log(ReactDOM);
			console.log(Button);

			var container = document.getElementById('app');

			ReactDOM.render(<Button label="teste" />, container);			
		}	
	}
	return homeObj;
}

module.exports = Home;