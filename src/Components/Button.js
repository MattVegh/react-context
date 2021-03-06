import React, { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

function Button() {
    const {theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            className={`${theme}-theme`}
            onClick={toggleTheme}
        >
            Switch Theme
        </button>
    )
}

export default Button