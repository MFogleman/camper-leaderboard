import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './comp/chart.js';
import Banner from './comp/banner.js';

class App extends Component {
	render() {
		return (
			<div id='Wrapper'>
				<Banner />
				<Chart />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);

