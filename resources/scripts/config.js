'use strict'

System.config({
	"baseURL": "dist",
	"transpiler": "babel",
	"babelOptions": {
		"optional": [
			"runtime"
		]
	},
	"map": {
		'React': 'depPath/react/react.min.js',
		'Fluxxor': 'depPath/fluxxor/build/fluxxor.min.js',
	},
});

System.import("srcPath/scripts/helloworldcommonjs.js")