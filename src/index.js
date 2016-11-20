import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Photo from './comp/photo';
import Footer from './comp/footer';

const testObj = {
		username: 'sjames1958gm',
		img: 'https://avatars.githubusercontent.com/u/4639625?v=3',
		alltime: 4089,
		recent: 510,
		lastUpdate: '2016-11-19T00:05:55.438Z'
	};

class Card extends Component {
	render() {
		return (
			<div className='card'>
				<Photo
					img={this.props.img}
				/>
				<Footer
					alltime={this.props.alltime}
					recent={this.props.recent}
					username={this.props.username}
				/>
			</div>
		);
	}
}
ReactDOM.render(
	<Card
		alltime = {testObj.alltime}
		img = {testObj.img}
		recent = {testObj.recent}
		username = {testObj.username}
	/>,
	document.getElementById('root'),

);

Card.propTypes = {
	alltime: React.PropTypes.number,
	img: React.PropTypes.string,
	recent: React.PropTypes.number,
	username: React.PropTypes.string
};
