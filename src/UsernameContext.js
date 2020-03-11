import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {

    state = {
        username: 'Matt'
    }

    changeUsername = () => {
        this.setState({
            username: this.event.target
        })
    }

    render() {
        return (
            <Provider value={this.state.username}>
                {this.props.children}
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }