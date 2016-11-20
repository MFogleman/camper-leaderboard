import React, { Component } from 'react';

export default class Photo extends Component {
	render() {
		return (
			<div className='photocontainer'>
				<img src={this.props.img} />
			</div>
		);
	}
}

Photo.propTypes = {
	img: React.PropTypes.string
};
