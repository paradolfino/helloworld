import React, { Component } from 'react';

class MainBody extends React.Component {
	render() {
		return <p className="text-center">{this.props.text}</p>;
	}
}

export { MainBody };