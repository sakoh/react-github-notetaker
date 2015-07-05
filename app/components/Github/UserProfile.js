var React = require('react');

var UserProfile = React.createClass({
	render: function() {
		return (
			<div className="col-md-4">
				<h2>User Profile </h2>
				Username: {this.props.username} <br/>
				Bio: {this.props.bio}
			</div>
		);
	}
});

module.exports = UserProfile;