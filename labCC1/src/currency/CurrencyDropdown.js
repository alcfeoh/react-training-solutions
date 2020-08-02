import React from 'react';
import './CurrencyDropdown.css';

export class CurrencyDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			showItems: false,
			currency: 'USD'
		};
    }
	render() {
		return (
			<div className="btn-group margin10">
				<button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"
onClick={() => {
this.setState({showItems : !this.state.showItems})
      }}>{this.state.currency}</button>
				<div className={this.state.showItems? "dropdown-menu show" : "dropdown-menu"}>
				<a className="dropdown-item" onClick={()=>this.setState({currency: 'USD', showItems : false})}>USD ($)</a>
				<a className="dropdown-item" onClick={()=>this.setState({currency: 'EUR', showItems : false})}>EUR (€)</a>
				<a className="dropdown-item" onClick={()=>this.setState({currency: 'GBP', showItems : false})}>GBP (£)</a>
				</div>
			</div>
		);
	}
};
