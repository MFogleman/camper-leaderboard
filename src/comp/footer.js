import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<p className='alltime'>All time<br />{this.props.alltime}</p>
				<p className='recent'>Last 30 days<br />{this.props.recent}</p>
				<p className='username'>{this.props.username}</p>
			</div>
		);
	}
}

Footer.propTypes = {
	alltime: React.PropTypes.number,
	recent: React.PropTypes.number,
	username: React.PropTypes.string
};
