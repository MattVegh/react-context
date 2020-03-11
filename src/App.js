import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Button from './Components/Button'
import UserHeader from './Components/UserHeader'
import { UserContextConsumer } from './UsernameContext'

class App extends Component {

  state = {
    newUsername: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
}

  render() {
    console.log(this.state)
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
          value={this.state.newUsername}
          onChange={this.handleChange}
        />
        <button >Change Username</button>
      </div>
    )
  }
}


export default App;
