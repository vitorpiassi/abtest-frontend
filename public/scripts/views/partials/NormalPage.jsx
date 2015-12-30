const React = require('react'),
	ReactDOM = require('react-dom'),
	rb = require('react-bootstrap');

class NormalPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const NormalList = require('./../widgets/NormalList'),
			PageHeader = rb.PageHeader;

		return (
			<div className="normal-page container">
				<PageHeader>{this.props.pageName} <small>{this.props.pageSubname}</small></PageHeader>
				<NormalList items={this.props.items}/>
			</div>
		);
	}
}

NormalPage.defaultProps = {pageName: "Listagem"};

module.exports = NormalPage;
