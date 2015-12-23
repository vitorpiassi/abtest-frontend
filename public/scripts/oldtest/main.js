'use strict';

var React = require('react');
var ReactDOM = require('reactDom');
var Button = require('Widget/Button');

console.log(ReactDOM);
console.log(Button);

var container = document.getElementById('app');

ReactDOM.render(<Button label="teste" />, container);