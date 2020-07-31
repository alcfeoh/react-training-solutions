import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.name = 'React';
	}

	render() {
		return (
			<div className="App">
			<header className="App-header">
				<p>
				Hello {this.name}
				</p>
			</header>
			</div>
		);
	}
};

export default App;