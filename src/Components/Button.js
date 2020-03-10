import React, {Component} from "react"
import ThemeContext from "../ThemeContext"

class Button extends Component {
    render() {
        console.log('context', this.context)
        const theme = this.context + '-theme'
        return (
            <button className={theme}>Switch Theme</button>
        )    
    }
}

Button.contextType = ThemeContext

export default Button