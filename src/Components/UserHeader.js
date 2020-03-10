import React from "react"
import UsernameContext from '../UsernameContext'

function UserHeader() {
    return (
        <UsernameContext.Consumer>
            {username => (
                <header className='user-header'>
                    <p>Welcome, {username}!</p>
                </header>
            )}

        </UsernameContext.Consumer>
    )
}

export default UserHeader