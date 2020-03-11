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
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state, this.context)
    return (

      <div className="App">
        <UserHeader />
        <UserContextConsumer>
          {({username, changeUsername}) => (
            <main>
              <p className="main">No new notifications, {username}! 🎉</p>

              <input
                type="text"
                name="newUsername"
                placeholder="New username"
                value={this.state.newUsername}
                onChange={this.handleChange}
              />
              <button onClick={() => changeUsername(this.state.newUsername)}>Change Username</button>
            </main>
          )}


        </UserContextConsumer>
        <Header />
        <Button />


      </div>
    )
  }
}


export default App;
