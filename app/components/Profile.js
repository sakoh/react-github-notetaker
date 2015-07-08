import React from 'react';
import Repos from './github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Rebase from 're-base';
import helpers from '../utils/helpers';
import Router from "react-router";

var base = Rebase.createClass("https://react-github-note.firebaseio.com/");

class Profile extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			notes: [],
			bio: {},
			repos:[]
		};
	}

	init() {
		this.ref = base.bindToState(this.getCurrentParams().username, {
			context: this,
			asArray: true,
			state: 'notes'
		});

		helpers.getGihubInfo(this.getCurrentParams().username)
			.then( (dataObj) => {
				this.setState({
					bio: dataObj.bio,
					repos: dataObj.repos
				});
			});
	}

	componentDidMount() {
		this.init();
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	componentWillReceiveProps() {
		base.removeBinding(this.ref);
		this.init();
	}

	handleAddNote(newNote){
		base.post(this.getCurrentParams().username, {
			data: this.state.notes.concat([newNote])
		});
	}

	render() {
		var username = this.getCurrentParams().username;

		return (
			<div className="row">
				<UserProfile username={username} bio={this.state.bio}/>
				<Repos username={username} repos={this.state.repos}/>
				<Notes 
					username={username} 
					notes={this.state.notes} 
					addNote={this.handleAddNote.bind(this)}/>
			</div>
		);
	}
}

reactMixin.onClass(Profile, Router.State);


export default Profile;