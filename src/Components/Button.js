import React from "react"
import ThemeContext from "../ThemeContext"

function Button() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button className={theme}>Switch Theme</button>
            )}
            
        </ThemeContext.Consumer>
    )
}

export default Button