import React, {Component} from 'react';
import './LicensePlateComponent.css';

import {addToCart} from './cart-service/cart-service';
const img = require("./assets/sale.png");
const currencyMap = { 'USD' : '$', 'EUR' : '€', 'GBP' : '£'};

class LicensePlateComponent extends Component {
	constructor(props) {
		super(props);
	}
	buttonClicked() {
		const result = addToCart(this.props.plate);
		this.props.setItemAddedToCart(true);
	}

	render() {
		const plate = this.props.plate ? this.props.plate : {};
		const currency = this.props.currency ? this.props.currency : '$';
		return (
			<>
			<h2>{plate.title} {(plate.onSale) ? <img src={img} /> : ''}</h2>
			<img src={plate.picture} className="img-fluid" />
			<p>{plate.description}</p>
			<div>
			<h2 className="float-left">{currencyMap[currency]}{plate.price}</h2>
			<button className="btn btn-primary float-right" role="button" onClick={this.buttonClicked}>
				{this.props.buttonText}
			</button>
			</div>
			</>
		);
	}

};


   
export default LicensePlateComponent;