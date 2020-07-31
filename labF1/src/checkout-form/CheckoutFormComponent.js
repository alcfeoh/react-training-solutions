import React from 'react';
const img = require("../assets/card-types/mastercard.png");
const zipRegExp = new RegExp(/(^\d{5}$)/);

class CheckoutFormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"zip" : {"value" : '', "valid" : false, "pristine" : true }
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	validate(name) {
		switch (name) {
			case "zip":
				const obj = this.state["zip"];
				const clone = {...obj};
				// Set pristine to false no matter what; the user has touched this field.
				clone["pristine"] = false;
				const newState = {"zip" : clone};
				if (this.state.zip.value.length === 0 || !this.state.zip.value.match(zipRegExp)) {
					clone["valid"] = false;
					this.setState(newState);
				} else {
					clone["valid"] = true;
					this.setState(newState);
				}
				break;
			default: 
		}
	}

	handleChange(event) {
		// Shallow clone the object corresponding to this state:
		const obj = this.state[event.target.name];
		let clone = {...obj};
		// reset the value that changed:
		clone["value"] = event.target.value;
		const newState = {};
		newState[event.target.name] = clone;
		this.setState(newState);
	}

	handleOnClick() {
		this.validate("zip", this.state.zip.value);
	}

	render() {
		return (
<div id="checkoutForm">
  <div className="row">
    <div className="col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Firstname" name="firstname" required/>
        </div>
    </div>
    <div className="col-lg-6">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Lastname" name="lastname" required/>
      </div>
    </div>
  </div>
  <br/>
  <div className="row">
    <div className="col-lg-6">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Street" name="street"/>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="City" name="city"/>
      </div>
    </div>
  </div>
  <br/>
  <div className="row">
    <div className="col-lg-6">
		<div className="alert alert-danger" role="alert" hidden={this.state.zip.valid || this.state.zip.pristine}>
			Please enter a 5-digit zipcode
		</div>
      <div className="input-group">
		<input type="text" className="form-control" placeholder="Zip"
			name="zip" onChange={this.handleChange} value={this.state.zip.value}/>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="State" name="state"/>
      </div>
    </div>
  </div>
  <br/>
  <div className="row">
    <div className="col-lg-6">
      <div className="input-group">
        <input type="password" className="form-control" placeholder="Credit card number" name="cc" required/>
        <span className="input-group-addon" ><img src={img}/></span>
      </div>
    </div>
    <div className="col-lg-6">
    </div>
  </div>
  <br/>
  <button type="submit" className="btn btn-primary" onClick={this.handleOnClick}>Submit</button>
</div>
		);
	}
};

export default CheckoutFormComponent;