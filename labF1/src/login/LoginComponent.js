import React from 'react';
import { login } from '../authorization-service/login-service';
import './LoginComponent.css';

class LoginComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username : '',
			password : ''
		}
		this.handleEmailInput = this.handleEmailInput.bind(this);
		this.handlePasswordInput = this.handlePasswordInput.bind(this);
		this.handleSignIn = this.handleSignIn.bind(this);
	}

	async handleSignIn() {
		const authToken = await login(this.state.username, this.state.password);
		// e.g. token is {"token":"1abcd21atsampletoken21"}
		// TODO FIXME check for error
		this.props.setIsAuthenticated(true);
	}

	handleEmailInput(event) {
		this.setState({
			username: event.target.value
		});
	}

	handlePasswordInput(event) {
		this.setState({
			password: event.target.value
		});
	}
		
	render() {
		return (
		<div className="text-center">
			<div className="form-signin">
			    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label htmlFor="inputEmail" className="sr-only">Email address</label>
				<input type="email" id="inputEmail" className="form-control input-field" placeholder="Username"
					value={this.state.username} onChange={this.handleEmailInput}
				/>
				<label htmlFor="inputPassword" className="sr-only">Password</label>
				<input type="password" id="inputPassword" className="form-control input-field" placeholder="Password"
					value={this.state.password} onChange={this.handlePasswordInput}
				/>
				<button className="btn btn-lg btn-primary btn-block login-btn" onClick={this.handleSignIn}>Sign in</button>
			</div>
		</div>
		);
	}
}

export default LoginComponent;