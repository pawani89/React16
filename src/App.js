import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from './mainapp/mainapp'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="app-root" />
        <div id="modal-root" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MainApp>

        </MainApp>
      </div>
    );
  }
}

export default App;
