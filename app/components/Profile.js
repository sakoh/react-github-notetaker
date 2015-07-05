var React = require('react');
var Router = require('react-router');
var Repos = require('./github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
	mixins: [Router.State],
	getInitialState: function() {
		return {
			notes: ["Good stuff", "Amazing programmer"],
			bio: {name: "Sako"},
			repos:[1,2,3]
		};
	},
	render: function() {
		var username = this.getParams().username;

		return (
			<div className="row">
				<UserProfile username={username} bio={this.state.bio}/>
				<Repos username={username} repos={this.state.repos}/>
				<Notes username={username} notes={this.state.notes}/>
			</div>
		);
	}
});

module.exports = Profile;