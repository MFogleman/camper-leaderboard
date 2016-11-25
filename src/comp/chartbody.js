import React, { Component } from 'react';

export default class Chartbody extends Component {
	constructor(props) {
		super(props);
		this.buildRows = this.buildRows.bind(this);
	}

	buildRows(data) {
		return data.map( (obj, index) => {
			return (
				<tr
				className='userRow'
				key={obj.username}
				onClick={() => {
					window.open('https://freecodecamp.com/' + obj.username, '_blank');
				} }
				>
					<td>{index + 1}</td>
					<td><img src={obj.img} /></td>
					<td>{obj.username}</td><td>{obj.recent}</td>
					<td>{obj.alltime}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<tbody>
				{this.buildRows(this.props.receivedData)}
			</tbody>
		);
	}
}
Chartbody.propTypes = {
	receivedData: React.PropTypes.array
};
