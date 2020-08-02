import React, {Component} from 'react';
import './LicensePlateComponent.css';
const img = require("../public/sale.png");
const currencyMap = { 'USD' : '$', 'EUR' : '€', 'GBP' : '£'};
export class LicensePlateComponent extends Component {
	buttonClicked() {
		alert("Plate added to cart");
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

}