import React from 'react';

var {string, func} = React.PropTypes;

class AddNote extends React.Component {
	
	handleSubmit(){
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = "";
		this.props.addNote(newNote);
	}

	render(){
		return (
			<div className="input-group">
				<input type="text" className="form-control" ref="note" placeholder="add new note"/>
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
				</span>
			</div>
		);
	}
}


AddNote.PropTypes = {
	username: string.isRequired,
	addNote: func.isRequired
};

export default AddNote;