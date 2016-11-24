import React, { Component } from 'react';
import 'whatwg-fetch';

const allTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const recent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export default class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			receivedData: [],
			firstRun: true
		};
		this.buildRows = this.buildRows.bind(this);
		this.callAPI = this.callAPI.bind(this);
		this.makeRecent = this.makeRecent.bind(this);
		this.makeAllTime = this.makeAllTime.bind(this);
	}

	makeRecent() {
		document.getElementById('recent').style.backgroundColor = '#D9EDF7';
		document.getElementById('allTime').style.backgroundColor = '#FFFFFF';
	}

	makeAllTime() {
		document.getElementById('allTime').style.backgroundColor = '#D9EDF7';
		document.getElementById('recent').style.backgroundColor = '#FFFFFF';
	}
	callAPI(endPoint) {
		// _this is bound to this so that it can be passed to the fetch promise.

		var _this = this;
		if (_this.state.firstRun === false) {
			// The components will be refactored.  Until then we cant add the
			// highlight effects to 'Recent' and 'All Time' until it is created
			// If it has been created we highlight the button on click, before
			// the api call so that the user has instant feedback, instead of
			// waiting for the api call to finish.
			if (endPoint === allTime) {
				_this.makeAllTime();
			} else {
				_this.makeRecent();
			}
		}
		fetch(endPoint)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				_this.setState({
					// Saved the returned data to State.
					receivedData: json
				});
				if (_this.state.firstRun === true) {
					// On the initial API call, note it was successful and
					// make the inital highlight
					_this.setState({
						firstRun: false
					});
					_this.makeAllTime();
				}
			}).catch(function(ex) {
			console.log('parsing failed', ex);
		});
	}

	componentWillMount() {
		this.callAPI(allTime);
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
				onClick={() => {
					window.open('https://freecodecamp.com/' + obj.username, '_blank');
				} }
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
								id='recent'
								onClick={() => {this.callAPI(recent);} }
								>Most Recent
							</td>
							<td
								id='allTime'
								onClick={() => {this.callAPI(allTime);} }
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
