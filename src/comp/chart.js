import React, { Component } from 'react';
import Charthead from './charthead.js';
import Chartbody from './chartbody.js';
import 'whatwg-fetch';

/**
 * API Endpoints for the FreeCodeCamp.com leaderboard.
 * @type {String}
 */
const allTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const recent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export default class Chart extends Component {
  constructor(props) {
		super(props);
		this.state = {
			allTimeData: [],
			recentData: [],
			mode: 'allTime'
		};
		this.callAPI = this.callAPI.bind(this);
		this.makeRecent = this.makeRecent.bind(this);
		this.makeAllTime = this.makeAllTime.bind(this);
	}

	componentWillMount() {
		this.callAPI(allTime);
		this.callAPI(recent);
	}

	/**
	 * Highlight 'Recent' tab, un-highlight 'All Time' tab, sets
	 * state.mode to 'recent'
	 * @return {void}
	 */
	makeRecent() {
		document.getElementById('recent').style.backgroundColor = '#D9EDF7';
		document.getElementById('allTime').style.backgroundColor = '#FFFFFF';
		this.setState({
			mode: 'recent'
		});
	}

	/**
	 * Highlight 'All Time' tab, un-highlight 'Recent' tab, sets
	 * state.mode to 'recent'
	 * @return {void}
	 */
	makeAllTime() {
		document.getElementById('allTime').style.backgroundColor = '#D9EDF7';
		document.getElementById('recent').style.backgroundColor = '#FFFFFF';
		this.setState({
			mode: 'allTime'
		});
	}

	/**
	 * Is called twice on page load, one for each API endpoint
	 * @param  {String} endPoint [Location of JSON]
	 * @return {void}
	 */
	callAPI(endPoint) {
		// _this is bound to this so that it can be passed to the fetch promise.
		var _this = this;

		fetch(endPoint)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				if (endPoint === allTime) {
					_this.setState({
						allTimeData: json
					});
				} else {
					_this.setState({
						recentData: json
					});
				}
			}).catch(function(ex) {
			console.log('parsing failed', ex);
		});
	}

	render() {
		return (
			<table>
				<Charthead
					makeAllTime={this.makeAllTime}
					makeRecent={this.makeRecent}
				/>
				<Chartbody
					allTimeData={this.state.allTimeData}
					mode={this.state.mode}
					recentData={this.state.recentData}
				/>
			</table>
		);
	}
}
