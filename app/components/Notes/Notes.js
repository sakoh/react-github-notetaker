var React = require('react');

var {string, array} = React.PropTypes;

var Notes = React.createClass({
	propTypes: {
		username: string.isRequired,
		notes: array.isRequired
	},
	render: function() {
		return (
			<div className="col-md-4">
				<h2>Notes for {this.props.username}</h2>
			</div>
		);
	}
});

module.exports = Notes;