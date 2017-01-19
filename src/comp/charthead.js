import React, { Component } from 'react';

export default class Charthead extends Component {
	render() {
		return (
			<thead id='chartHead'>
				<tr>
					<td>Rank</td>
					<td />
					<td>Camper Name</td>
					<td
						id='recent'
						onClick={() => {this.props.makeRecent();} }
						>Recent Score
					</td>
					<td
						id='allTime'
						onClick={() => {this.props.makeAllTime();} }
						>All Time Score
					</td>
				</tr>
			</thead>
		);
	}
}
Charthead.propTypes = {
	makeAllTime: React.PropTypes.func,
	makeRecent: React.PropTypes.func
};
