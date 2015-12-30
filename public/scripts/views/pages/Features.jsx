const React = require('react'),
	FeatureStore = require("stores/Feature");

function getFeaturesState() {
	return {
		features: FeatureStore.getFeatures()
	};
}

class Features extends React.Component {

	constructor(props) {
		super(props);
		this.state = getFeaturesState();
	}

	componentDidMount() {
		FeatureStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		FeatureStore.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		const ListPage = require('views/generics/ListPage');

		return <ListPage items={this.state.features} pageName="Features"/>
	}

	_onChange() {
		this.setState(getFeaturesState());
	}
}

module.exports = Features;