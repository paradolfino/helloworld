import React, { Component } from 'react';

class Button extends React.Component {
	render(){
		return (
				<button onClick={this.props.onClick} className="btn btn-primary">Click Me</button>

			);
	}
}

export {Button};