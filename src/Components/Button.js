import React from "react"
import { ThemeContextConsumer } from "../ThemeContext"

function Button() {
    return (
        <ThemeContextConsumer>
            {theme => (
                <button className={theme}>Switch Theme</button>
            )}
            
        </ThemeContextConsumer>
    )
}

export default Button