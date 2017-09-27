import React, { Component } from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h1 className="text-primary text-center">{this.props.text}</h1>
			</div>
			);
	}
}

export { Header };