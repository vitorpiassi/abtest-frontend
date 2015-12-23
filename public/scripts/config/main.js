'use strict';

System.config({
	baseURL: 'dist/scripts',
	defaultJSExtensions: true,
	format: 'cjs',
	map: {
		'Fluxxor': '/vendor/fluxxor/build/fluxxor.js',
		'React': '/vendor/react/react.js',
		'ReactDom': '/vendor/react/react-dom.js'
	}
});

System.import('app.js');