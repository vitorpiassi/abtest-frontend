const AppDispatcher = require('../dispatcher/AppDispatcher'),
	EventEmitter = require('events'),
	FeatureConstants = require('../constants/Feature'),
	assign = require('object-assign');

const CHANGE_EVENT = 'change';

var features = [
		{id: 1, name: 'Nova DefaultFrame (Filtros)', enabled: true}, 
		{id: 2, name: 'Alterações da Home dos Portais', enabled: false}, 
		{id: 3, name: 'Nova DefaultFrame (Grid)', enabled: false}
	];

function toggleEnable(featureId, enabled) {

	for (var i = 0, len = features.length; i < len; i++)
		if (features[i].id == featureId)
			return features[i].enabled = enabled;
}

function getFeatures() {
	return features;
}

const Feature = assign({}, EventEmitter.prototype, {

	getFeatures: function() {
		return getFeatures();
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function(action) {

	switch(action.actionType) {
		case FeatureConstants.TOGGLE_ENABLE:
			toggleEnable(action.featureId, action.enabled);
			Feature.emitChange();
			break;
			
		default:
	}
});

module.exports = Feature;
