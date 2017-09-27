import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {MainBody} from './components/body';
import {Button} from './components/button';

const htext = "Hello World!";
const btext = "I'm a paragraph!";
const chgText = "I've been changed!";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      headtext: htext,
      bodytext: btext
     };
     this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    alert("this is working");
    this.setState({bodytext: chgText});
  }
  render() {
    return (

      <div className="App">
        <Header text={this.state.headtext}/>
        <MainBody text={this.state.bodytext}/>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
