var React = require('react');
var NotesList = require('./NotesList');

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
				<NotesList notes={this.props.notes}/>
			</div>
		);
	}
});

module.exports = Notes;