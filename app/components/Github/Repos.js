var React = require('react');

var {string, array} = React.PropTypes;

var Repos = React.createClass({
	propTypes: {
		username: string.isRequired,
		repos: array.isRequired
	},
	render: function() {
		return (
			<div className="col-md-4">
				<h2>Repos </h2>
				Username: {this.props.username} <br/>
				Repos: {this.props.repos}
			</div>
		);
	}
});

module.exports = Repos;