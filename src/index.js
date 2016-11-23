import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {mode: 'allTime'};
	}
	render() {
		return (
			<Chart words={this.state.mode} />
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);

App.propTypes = {
mode: React.PropTypes.string
};
