import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {

    state = {
        username: 'Matt'
    }

    changeUsername = (username) => {
        this.setState({
            username: username
        })
    }

    render() {
        
        return (
            <Provider value={
                {
                    username: this.state.username,
                    changeUsername: this.changeUsername
                }
            }>
                {this.props.children}
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }