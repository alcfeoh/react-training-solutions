import React, { Component } from 'react';
import { LicensePlateComponent } from './license-plate/LicensePlateComponent';

export class LicensePlateService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
		fetch('http://localhost:8000/data')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }    
	render() {
		if (!this.state.data) {
			return null;
		}
		return this.state.data.map((licensePlate, index) => {
			return <div key={licensePlate._id} className="col-md-4" style={{backgroundColor: (index % 2 === 0) ? '#F5F5F5' : ''}}>
			<LicensePlateComponent plate={licensePlate} buttonText="Add to cart" setCurrency={this.setCurrency} currency={this.props.currency}
            buttonClicked={this.props.setItemAddedToCart}/>
			</div>
		});
  
	}
 
}