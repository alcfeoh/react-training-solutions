import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavTemplate from './navigation/NavTemplate';
import StoreViewComponent from './store-view/StoreViewComponent';
import CartViewComponent from './cart-view/CartViewComponent';
import CheckoutViewComponent from './checkout-view/CheckoutViewComponent';
import LoginComponent from './login/LoginComponent';
import AuthenticatedRoute from './authorization-service/AuthenticatedRoute';
import UnauthenticatedRoute from './authorization-service/UnauthenticatedRoute';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currency : 'USD',
			isUserLoggedIn : false
		}
		this.setCurrency = this.setCurrency.bind(this);
		this.setIsUserLoggedIn = this.setIsUserLoggedIn.bind(this);
	}

	setCurrency(currency) {
        this.setState({ currency : currency });
	}

	setIsUserLoggedIn(isUserLoggedIn) {
		this.setState({ isUserLoggedIn });
	}

	render() {
		return (
			<div className="App">
			<header className="App-header">
			</header>
			<BrowserRouter>
			<NavTemplate setCurrency={this.setCurrency} currency={this.state.currency} isUserLoggedIn={this.state.isUserLoggedIn}/>
			<main role="main">
				<Switch>
					<UnauthenticatedRoute path="/login">
						<LoginComponent setIsAuthenticated={this.setIsUserLoggedIn} isAuthenticated={this.state.isUserLoggedIn}/>
					</UnauthenticatedRoute>
					<Route path={"/cart"} component={CartViewComponent} />
					<UnauthenticatedRoute path={"/checkout"}>
						<CheckoutViewComponent isAuthenticated={this.state.isUserLoggedIn}/>
					</UnauthenticatedRoute>
					<Route path={"/login"}>
						<LoginComponent setIsAuthenticated={this.setIsUserLoggedIn} isAuthenticated={this.state.isUserLoggedIn}/>
					</Route>
					<Route path={"/"} render={() => <StoreViewComponent currency={this.state.currency} />} />
				</Switch>
			</main>
			</BrowserRouter>
			</div>
		);
	}
};

export default App;