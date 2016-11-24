import React, { Component } from 'react';

export default class Banner extends Component {
	render() {
		return (
			<div className='Banner'>
				<img
					id='Logo'
					onClick={ () =>{
						window.open('https://freecodecamp.com/about', '_blank');
					} }
					src='./freeCodeCampLogo.svg'
				/>
				<p
					id='Nav'
					onClick={ () =>{
						window.open('https://mfogleman.com', '_blank');
					} }
					>
					About
				</p>
			</div>
		);
	}
}
