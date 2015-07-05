var React = require('react');
var Router = require('react-router');
var Repos = require('./github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var FireBase = require('firebase');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
	mixins: [Router.State, ReactFireMixin],
	getInitialState: function() {
		return {
			notes: [],
			bio: {name: "Sako"},
			repos:[1,2,3]
		};
	},
	componentDidMount: function() {
		this.ref = new FireBase("https://react-github-note.firebaseio.com/");
		var childRef = this.ref.child(this.getParams().username);
		this.bindAsArray(childRef, 'notes');
	},
	componentWillUnmount: function(){
		this.unbind('notes');
	},
	handleAddNote: function(newNote){
		this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
	},
	render: function() {
		var username = this.getParams().username;

		return (
			<div className="row">
				<UserProfile username={username} bio={this.state.bio}/>
				<Repos username={username} repos={this.state.repos}/>
				<Notes 
					username={username} 
					notes={this.state.notes} 
					addNote={this.handleAddNote}/>
			</div>
		);
	}
});

module.exports = Profile;