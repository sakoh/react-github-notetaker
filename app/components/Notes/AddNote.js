var React = require('react');

var {string, func} = React.PropTypes;

var AddNote = React.createClass({
	PropTypes:{
		username: string.isRequired,
		addNote: func.isRequired
	},
	handleSubmit: function () {
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = "";
		this.props.addNote(newNote);
	},
	render: function () {
		return (
			<div className="input-group">
				<input type="text" className="form-control" ref="note" placeholder="add new note"/>
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
				</span>
			</div>
		);
	}
});

module.exports = AddNote;