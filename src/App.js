import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Button from './Components/Button'
import UserHeader from './Components/UserHeader'
import UsernameContext from './UsernameContext'

class App extends Component {
  static contextType = UsernameContext
  render() {
  return (
    <div className="App">
      <UserHeader />
      <main>
        <p className="main">No new notifications, {this.context}! 🎉</p>
      </main>
      <Header />
      <Button />
    </div>
  );
  }
}

export default App;
