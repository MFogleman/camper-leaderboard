import React, { Component } from 'react';
import Charthead from './charthead.js';
import Chartbody from './chartbody.js';
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
		this.callAPI = this.callAPI.bind(this);
		this.makeRecent = this.makeRecent.bind(this);
		this.makeAllTime = this.makeAllTime.bind(this);
	}

	componentWillMount() {
		this.callAPI(allTime);
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
			// We cant add the highlight effects to 'Recent' and 'All Time'
			// Until they have been created (which is after the API call),
			// But if they have already been created, we want the clicked option
			// to highlight immediately, to give instant feedback to the user
			(endPoint === allTime) ? _this.makeAllTime() : _this.makeRecent();
		}

		fetch(endPoint)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				_this.setState({
					receivedData: json,
					firstRun: false
				});
			}).catch(function(ex) {
			console.log('parsing failed', ex);
		});
	}

	render() {
		return (
			<table>
				<Charthead
					allTime={allTime}
					callAPI={this.callAPI}
					recent={recent}
				/>
				<Chartbody
					receivedData={this.state.receivedData}
				/>
			</table>
		);
	}
}
