'use strict'

System.config({
	baseURL: "dist/scripts",
	defaultJSExtensions: true,
	transpiler: "babel",
	babelOptions: {
		optional: [
			"runtime"
		]
	},
	map: {
		'react': '../../../../bower_components/react/react.min.js',
		'reactDom': '../../../../bower_components/react/react-dom.min.js',
		'Fluxxor': '../../../../bower_components/fluxxor/build/fluxxor.min.js',
	},
});

System.import("main.js");