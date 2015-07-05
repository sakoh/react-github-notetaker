import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

var {string, array, func} = React.PropTypes;

class Notes extends React.Component {
	
	render() {
		return (
			<div className="col-md-4">
				<h2>Notes for {this.props.username}</h2>
				<AddNote username={this.props.username} addNote={this.props.addNote}/>
				<NotesList notes={this.props.notes}/>
			</div>
		);
	}

}

Notes.propTypes = {
	username: string.isRequired,
	notes: array.isRequired,
	addNote: func.isRequired
};

module.exports = Notes;