var React = require('react'),
	Router = require('react-router'),
	routes = require('./config/routes')

Router.run(routes, function(Root){
	React.render(<Root/>, document.getElementById('app'))
})