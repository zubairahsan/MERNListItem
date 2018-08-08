import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './component/appNavBar'
import ShoppingList from './component/shoppingList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
