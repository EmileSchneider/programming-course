import React, { Component } from 'react';

import './App.css';

import AppBar from './components/appBar';
import Screen from './components/screen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Screen />
      </div>
    );
  }
}

export default App;
