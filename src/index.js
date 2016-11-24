import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart.js';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id='Wrapper'>
				<div className='Banner'>
					<img
						id='Logo'
						onClick={ () =>{
							window.open('https://freecodecamp.com/about', '_blank');
						} }
						src='./freeCodeCampLogo.svg'
					/>
					<p id='Nav'>About</p>
				</div>
			<Chart />

			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);

