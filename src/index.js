import React from 'react';
import ReactDOM from 'react-dom';

/*
API is an array of objects, example below.
[
	{
		"username":"sjames1958gm",
		"img":"https://avatars.githubusercontent.com/u/4639625?v=3",
		"alltime":4089,
		"recent":510,
		"lastUpdate":"2016-11-19T00:05:55.438Z"
	},
]
*/

class Test extends React.Component {
	render() {
		return (
			<div>
				<h1>Testing Dev Config</h1>
			</div>
		);
	}
}
ReactDOM.render(
  <Test />,
  document.getElementById('root'),
);
