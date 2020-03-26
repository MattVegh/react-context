import React, { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

function Button() {
    const context = useContext(ThemeContext)

    return (
        <button
            className={`${context.theme}-theme`}
            onClick={context.toggleTheme}
        >
            Switch Theme
        </button>
    )
}

export default Button