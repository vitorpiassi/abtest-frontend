'use strict';

System.config({
	baseURL: 'dist/scripts',
	defaultJSExtensions: true,
	format: 'cjs',
	map: {
		'Flux': '/vendor/flux/dist/Flux.js',
		'react': '/vendor/react/react.js',
		'react-dom': '/vendor/react/react-dom.js',
		'react-bootstrap': '/vendor/react-bootstrap/react-bootstrap.js'
	}
});

System.import('app.js');