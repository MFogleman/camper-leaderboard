import React, { Component } from 'react';

export default class Charthead extends Component {
	render() {
		return (
			<thead id='chartHead'>
				<tr>
					<td>User</td>
					<td />
					<td
						id='recent'
						onClick={() => {this.props.callAPI(this.props.recent);} }
						>Most Recent
					</td>
					<td
						id='allTime'
						onClick={() => {this.props.callAPI(this.props.allTime);} }
						>All Time
					</td>
				</tr>
			</thead>
		);
	}
}
Charthead.propTypes = {
	allTime: React.PropTypes.string,
	callAPI: React.PropTypes.func.isRequired,
	recent: React.PropTypes.string
};
