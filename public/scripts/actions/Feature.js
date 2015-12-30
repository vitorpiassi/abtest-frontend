const AppDispatcher = require('../dispatcher/AppDispatcher'),
	FeatureConstants = require('../constants/Feature');

class Feature {
	toggleEnable (featureId, enabled) {
		AppDispatcher.dispatch({
			actionType: FeatureConstants.TOGGLE_ENABLE,
			featureId: featureId,
			enabled: enabled
		});
	}
}

module.exports = new Feature();