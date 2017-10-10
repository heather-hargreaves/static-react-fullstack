import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreditCardPage from './CreditCardPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {<CreditCardPage />}
      </div>
    );
  }
}

export default App;
