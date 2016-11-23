import React, { Component } from 'react';
import 'whatwg-fetch';

const allTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export default class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartRow: ['placeholder1', 'placerholder2']
		};
		this.buildRows = this.buildRows.bind(this);
	}

	componentDidMount() {
		const _this = this;
		fetch(allTime)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				_this.setState({
					chartRow: json
				});
			}).catch(function(ex) {
			console.log('parsing failed', ex);
		});
	}

	buildRows(data) {
		var rows = data.map( (obj) => {
			return (
				<tr key={obj.username}><td><img src={obj.img} /></td>
				<td>{obj.username}</td><td>{obj.recent}</td>
				<td>{obj.alltime}</td></tr>
			);
		});
		return rows;
	}
	render() {
		return (
				<table>
					<thead id='chartHead'>
						<tr><td>User</td><td /><td>Most Recent</td><td>All Time</td></tr>
					</thead>
					<tbody>
						{this.buildRows(this.state.chartRow)}
					</tbody>
				</table>
		);
	}
}
Chart.propTypes = {
	words: React.PropTypes.string
};
