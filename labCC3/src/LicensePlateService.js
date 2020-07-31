import React, { Component } from 'react';
import LicensePlateComponent from './LicensePlateComponent';

class LicensePlateService extends Component {
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
            <LicensePlateComponent currency={this.props.currency} plate={licensePlate} buttonText="Add to cart"
				setItemAddedToCart={this.props.setItemAddedToCart}/>
            </div>
        });
    }
}
 
export default LicensePlateService;
