import React from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlateService } from './LicensePlateService';
import { PopupWindowComponent } from './popup/PopupWindowComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency : 'USD',
            showPopup : false
        }
        this.setCurrency = this.setCurrency.bind(this);
        this.setItemAddedToCart = this.setItemAddedToCart.bind(this);
	}
    setItemAddedToCart(result) {
        this.setState({ showPopup : true });
    }

    setCurrency(currency) {
		this.setState({ currency : currency });
	}
 
    render() {
        return (
            <div className="App">
            <header className="App-header">
            </header>
            <PopupWindowComponent show={this.state.showPopup} close={() => { this.setState( { showPopup: false } ); }}>
            </PopupWindowComponent>
            {/* Add Navigation here */}
            <Navigation setCurrency={this.setCurrency} currency={this.state.currency}/>
            <main role="main">
            {/* Add Jumbotron here */}
            <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>
            <div className="row" >
			{/* Replace single license plate with list of license plates here */}
			<LicensePlateService setCurrency={this.setCurrency} currency={this.state.currency}
                setItemAddedToCart={this.setItemAddedToCart}/>
            </div>
            </main>
            </div>
		);
	}
};

export default App;
