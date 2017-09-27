import React, { Component } from 'react';

class Header extends React.Component {
	render() {
		return <h1>{this.props.bodytext}</h1>;
	}
}

export { Header };