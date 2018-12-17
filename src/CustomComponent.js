import React, { Component } from 'react';

class CustomComponent extends Component {
	render() {
		return (
			<div className="CustomComponent">
				<h2>{this.props.title}</h2>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default CustomComponent;