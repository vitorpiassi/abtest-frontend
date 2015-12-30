const React = require('react'),
	rb = require('react-bootstrap'),
	FeatureActions = require('actions/Feature');

class NormalList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {items: this.props.items};
	}
	
	render() {
		const ListGroup = rb.ListGroup,
			ListGroupItem = rb.ListGroupItem;

		var listItems = [],
			stateItems = this.state.items,
			item = null;

		for (var i = 0, len = stateItems.length; i < len; i++) {
			item = stateItems[i];
			var style = item.enabled ? "success" : "danger";
			listItems.push(<ListGroupItem bsStyle={style} key={item.id} 
								onClick={this.toggleEnable.bind(this, item)}>{i + 1} - {item.name}</ListGroupItem>);
		}

		return (
			<ListGroup>
				{listItems}
			</ListGroup>
		);
	}

	toggleEnable(item) {
		FeatureActions.toggleEnable(item.id, !item.enabled);
	}
}

module.exports = NormalList;
