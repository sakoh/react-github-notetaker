var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var {string, array, func} = React.PropTypes;

var Notes = React.createClass({
	propTypes: {
		username: string.isRequired,
		notes: array.isRequired,
		addNote: func.isRequired
	},
	render: function() {
		return (
			<div className="col-md-4">
				<h2>Notes for {this.props.username}</h2>
				<AddNote username={this.props.username} addNote={this.props.addNote}/>
				<NotesList notes={this.props.notes}/>
			</div>
		);
	}
});

module.exports = Notes;