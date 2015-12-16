'use strict'

System.config({
	"baseURL": ".",
	"transpiler": "babel",
	"babelOptions": {
		"optional": [
			"runtime"
		]
	},
	"map": {
		'depPath': '../../bower_components',
		'distPath': '../../public/dist',
		'srcPath': '../resources',

		'React': 'depPath/react/react.min.js',
		'Fluxxor': 'depPath/fluxxor/build/fluxxor.min.js',
	},
});

System.import("srcPath/scripts/helloworldcommonjs.js")