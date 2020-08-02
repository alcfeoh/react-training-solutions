import React from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { StoreViewComponent } from './store-view/StoreViewComponent';
import { CartViewComponent } from './cart-view/CartViewComponent';
import { CheckoutViewComponent } from './checkout-view/CheckoutViewComponent';
import { BrowserRouter, Route } from "react-router-dom";

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
            {/* Add Navigation here */}
            <Navigation setCurrency={this.setCurrency} currency={this.state.currency}/>
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
