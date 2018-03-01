import './App.css';

import React, { Component } from 'react';

import MyCheckbox from './my-checkbox/MyCheckbox';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Exercise Checkbox</h1>
        </header>
        <section className="App-demo">
          <MyCheckbox label="Left Checkbox" />
        </section>
        <section className="App-demo">
          <MyCheckbox label="Right Checkbox" align="right" />
        </section>
      </div>
    );
  }
}

export default App;
