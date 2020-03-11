import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {

    state = {
        username: 'Matt'
    }


    render() {
        return (
            <Provider value={
                {
                    username: this.state.username
                }
            }>

            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }