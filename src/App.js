import React, { Component } from 'react';
import './App.css';
import CustomerPage from './container/CustomerPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Customers List</h2>
        </div>
        <p className="App-intro">
          <CustomerPage />
        </p>
      </div>
    );
  }
}

export default App;
