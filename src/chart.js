import React, { Component } from 'react';
import 'whatwg-fetch';

const allTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const recent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export default class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			receivedData: [],
			mode: allTime
		};
		this.buildRows = this.buildRows.bind(this);
		this.callAPI = this.callAPI.bind(this);
		this.makeRecent = this.makeRecent.bind(this);
		this.makeAllTime = this.makeAllTime.bind(this);
	}

	makeRecent() {
		this.setState({mode: recent});
		this.callAPI(recent);
	}

	makeAllTime() {
		this.setState({mode: allTime});
		this.callAPI(allTime);
	}
	callAPI(mode) {
		console.log('API called with ', mode);
		var _this = this;
		fetch(mode)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				_this.setState({
					receivedData: json
				});
			}).catch(function(ex) {
			console.log('parsing failed', ex);
		});
	}

	componentWillMount() {
		this.callAPI(this.state.mode);
	}

	handleLink() {
		window.open('https://freecodecamp.com/' + this, '_blank');
	}

	buildRows(data) {
		return data.map( (obj) => {
			return (
				<tr
				className='userRow'
				key={obj.username}
				onClick={this.handleLink.bind(obj.username)}
				>
					<td><img src={obj.img} /></td>
					<td>{obj.username}</td><td>{obj.recent}</td>
					<td>{obj.alltime}</td>
				</tr>
			);
		});
	}

	render() {
		return (
				<table>
					<thead id='chartHead'>
						<tr>
							<td>User</td>
							<td />
							<td
								id='#recent'
								onClick={this.makeRecent}
								>Most Recent
							</td>
							<td
								id='#allTime'
								onClick={this.makeAllTime}
								>All Time
							</td>
						</tr>
					</thead>
					<tbody>
						{this.buildRows(this.state.receivedData)}
					</tbody>
				</table>
		);
	}
}
Chart.propTypes = {
	words: React.PropTypes.string
};
