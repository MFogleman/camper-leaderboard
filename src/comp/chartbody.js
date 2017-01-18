import React, { Component } from 'react';

export default class Chartbody extends Component {
	constructor(props) {
		super(props);
		this.buildRows = this.buildRows.bind(this);
	}
/**
 * Takes the data from state to populate the rows
 * @param  {Array} data Either state.allTimeData or state.recentData
 * @return {Jsx}      Returns a table row that links to the user's FCC page.  The
 * cells are the rank, user image, user name, recent score, and all time score.
 */
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
		let rowContent = null;

		if (this.props.mode === 'allTime') {
			rowContent = this.buildRows(this.props.allTimeData);
		} else {
			rowContent = this.buildRows(this.props.recentData);
		}

		return (
			<tbody>
				{rowContent}
			</tbody>
		);
	}
}
Chartbody.propTypes = {
	allTimeData: React.PropTypes.array,
	mode: React.PropTypes.string,
	recentData: React.PropTypes.array
};
