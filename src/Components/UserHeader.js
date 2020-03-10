import React, {Component} from "react"
import UsernameContext from '../UsernameContext'

class UserHeader extends Component {
    static contextType = UsernameContext
    render() {
        console.log(this.context)
        const username = this.context
        return (
            <header className='user-header'>
                <p>Welcome, {username}!</p>
            </header>
        )    
    }
}

export default UserHeader