import React from 'react';
import './CurrencyDropdown.css';

class CurrencyDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			showItems: false
		};
    }
	render() {
		return (
			<div className="btn-group margin10">
				<button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" onClick={() => {
this.setState({showItems : !this.state.showItems})
}}>{this.props.currency}</button>
				<div className={this.state.showItems? "dropdown-menu show" : "dropdown-menu"}>
				<a className="dropdown-item" onClick={()=>{this.setState({showItems : false}); this.props.setCurrency('USD');}}>USD ($)</a>
				<a className="dropdown-item" onClick={()=>{this.setState({showItems : false}); this.props.setCurrency('EUR');}}>EUR (€)</a>
				<a className="dropdown-item" onClick={()=>{this.setState({showItems : false}); this.props.setCurrency('GBP');}}>GBP (£)</a>
				</div>
			</div>
		);
	}
};
	
export default CurrencyDropdown;