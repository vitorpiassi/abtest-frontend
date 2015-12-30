const ReactDOM = require('react-dom'),
	React = require('react'),
	Index = require("views/Index.js"),
	Features = require("views/pages/Features.js");

Index.render();

var container = document.getElementById('page');

ReactDOM.render(<Features/>, container);