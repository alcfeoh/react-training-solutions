import React, {Component} from 'react';
import './LicensePlateComponent.css';

class LicensePlateComponent extends Component {
	buttonClicked() {
		alert("Plate added to cart");
	}

	render() {
		const plate = this.props.plate ? this.props.plate : {};
		return (
			<>
			<h2>{plate.title}</h2>
			<img src={plate.picture} className="img-fluid" />
			<p>{plate.description}</p>
			<div>
			<h2 className="float-left">${plate.price}</h2>
			<button className="btn btn-primary float-right" role="button" onClick={this.buttonClicked}>
				{this.props.buttonText}
			</button>
			</div>
			</>
		);
	}

};

export default LicensePlateComponent;