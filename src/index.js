import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

const allTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

fetch(allTime)
	.then(function(response) {
		return response.json();
	}).then(function(json) {
		var rows = json.map( (obj) => {
			return	<tr key={obj.username}><td><img src={obj.img} /></td><td>{obj.username}</td><td>{obj.recent}</td><td>{obj.alltime}</td></tr>;
		});
		ReactDOM.render(
			<Chart obj={rows}/>,
		document.getElementById('root'),
);
	}).catch(function(ex) {
		console.log('parsing failed', ex);
  });

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {mode: 'recent'};
	}
	render() {
		return (
			<div>
			<div className='Banner'>
				<h1>Camper Leaderboard</h1>
			</div>
			<table>
				<thead id='chartHead'>
					<tr><td>User</td><td></td><td>Most Recent</td><td>All Time</td></tr>
				</thead>
				<tbody>
					{this.props.obj}
				</tbody>
			</table>
			</div>
		);
	}
}


Chart.propTypes = {
obj: React.PropTypes.array
};
