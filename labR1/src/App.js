import React from 'react';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";
import NavTemplate from './navigation/NavTemplate';
import StoreViewComponent from './store-view/StoreViewComponent';
import CartViewComponent from './cart-view/CartViewComponent';
import CheckoutViewComponent from './checkout-view/CheckoutViewComponent';

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
			<BrowserRouter>
			<NavTemplate setCurrency={this.setCurrency} currency={this.state.currency}/>
			<main role="main">
				<Route exact path={["/"]} render={() => <StoreViewComponent currency={this.state.currency} />} />
				<Route exact path={["/cart"]} component={CartViewComponent} />
				<Route exact path={["/checkout"]} component={CheckoutViewComponent} />
			</main>
			</BrowserRouter>
			</div>
		);
	}
};

export default App;