import React, { Fragment } from 'react';

export class Jumbotron extends React.Component {
	render() {
		return (
			<Fragment>
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-3">{this.props.title}</h1>
					<p>{this.props.description}</p>
				</div>
			</div>
			</Fragment>
		);
	}
};
