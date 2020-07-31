import React from "react";
import { Redirect, Route } from "react-router-dom";

export default class AuthenticatedRoute extends React.Component {

	constructor(props) {
		super(props);
		// See App.js to see what to expect here.
		// For AuthenticatedRoute, props is {path: "/checkout",...
		// and "children" (the child component, CheckoutViewComponent)
	}

	render() {
		let { children, ...rest } = this.props;
		let pathname = this.props.path; // for example, "/checkout"
		let search = this.props.search; // for example, testing=123. Not in use.
		let isAuthenticated = children && children.props && children.props.isAuthenticated;
		const redirectUrl = search ? `/login?redirect=${pathname}${search}` : `/login?redirect=${pathname}`;
		return (
			<Route {...rest}>{isAuthenticated ? ( children ) : ( <Redirect to={redirectUrl} /> )}</Route>
		);
	}
}