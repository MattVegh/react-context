import React from "react"
import { UserContextConsumer } from '../UsernameContext'

function UserHeader() {
    return (
        <UserContextConsumer>
            {({username}) => (
                <header className='user-header'>
                    <p>Welcome, {username}!</p>
                </header>
            )}

        </UserContextConsumer>
    )
}

export default UserHeader