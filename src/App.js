import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';

const btext = "Hello World!";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { bodytext: btext };
  }
  render() {
    return (

      <div className="App">
        <Header bodytext={this.state.bodytext}/>
      </div>
    );
  }
}

export default App;
