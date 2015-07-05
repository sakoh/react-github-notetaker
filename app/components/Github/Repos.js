import React from 'react';

var {string, array} = React.PropTypes;

class Repos extends React.Component {

	render() {
		var repos = this.props.repos.map((repo, index) => {
			return (
				<li className="list-group-item" key={index}>
					{repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
					{repo.description && <p>{repo.description}</p>}
				</li>
			);
		});

		return (
			<div className="col-md-4">
				<h2>User Repos</h2>
					<ul className="list-group">
						{repos}
					</ul>
			</div>
		);
	}

}

Repos.propTypes = {
	username: string.isRequired,
	repos: array.isRequired
};

export default Repos;