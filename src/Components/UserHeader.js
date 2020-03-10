import React, {Component} from "react"
import UsernameContext from '../UsernameContext'

class UserHeader extends Component {
    static contextType = UsernameContext
    render() {
        console.log(this.context)
        return (
            <header className='user-header'>
                <p>Welcome, {this.context}!</p>
            </header>
        )    
    }
}

export default UserHeader