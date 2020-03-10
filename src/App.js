import React from 'react';
import './App.css';
import Header from './Components/Header'
import Button from './Components/Button'
import UserHeader from './Components/UserHeader'
import UsernameContext from './UsernameContext'

function App() {
  return (

    <div className="App">
      <UserHeader />
      <UsernameContext.Consumer>
        {username => (
          <main>
            <p className="main">No new notifications, {username}! 🎉</p>
          </main>
        )}

      </UsernameContext.Consumer>
      <Header />
      <Button />
    </div>
  )
}


export default App;
