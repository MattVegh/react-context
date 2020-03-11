import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Button from './Components/Button'
import UserHeader from './Components/UserHeader'
import { UserContextConsumer } from './UsernameContext'

class App extends Component {

  state = {
    username: ''
  }
  render() {
    return (

      <div className="App">
        <UserHeader />
        <UserContextConsumer>
          {username => (
            <main>
              <p className="main">No new notifications, {username}! 🎉</p>
            </main>
          )}

        </UserContextConsumer>
        <Header />
        <Button />

        <input
          type="text"
          name="username"
          placeholder="New username"
          value={''}
          onChange={''}
        />
        <button onClick={''}>Change Username</button>
      </div>
    )
  }
}


export default App;
