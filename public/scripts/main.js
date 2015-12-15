'use strict'

var depPath = '../../bower_components';
var distPath = '../../dist';

require.config({
	baseUrl: 'scripts',

	paths: {
		'React': depPath + '/react/react.min',
		'Fluxxor': depPath + '/fluxxor/build/fluxxor.min',

		'app': distPath + '/scripts/test'
	},

	shim: {
	},

	deps: ['app']
});