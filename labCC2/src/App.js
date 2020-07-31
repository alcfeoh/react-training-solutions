import React from 'react';
import './App.css';

import NavTemplate from './navigation/NavTemplate';
import JumbotronTemplate from './jumbotron/JumbotronTemplate';
import LicensePlateService from './LicensePlateService';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currency : 'USD'
		}
		this.setCurrency = this.setCurrency.bind(this);
	}

	setCurrency(currency) {
        this.setState({ currency : currency });
    }

	render() {
		return (
			<div className="App">
			<header className="App-header">
			</header>
			{/* Add Navigation here */}
			<NavTemplate setCurrency={this.setCurrency} currency={this.state.currency}/>
			<main role="main">
			{/* Add Jumbotron here */}
			<JumbotronTemplate title="Welcome to our store" description="Browse our collection of license plates"/>
			<div className="row" >
			{/* Replace single license plate with list of license plates here */}
			<LicensePlateService setCurrency={this.setCurrency} currency={this.state.currency}/>
			</div>
			</main>
			</div>
		);
	}
};

export default App;