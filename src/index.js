import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './ThemeContext'
import UsernameContext from './UsernameContext'


ReactDOM.render(
    <UsernameContext.Provider value={'Matt'}>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </UsernameContext.Provider>,
    document.getElementById('root'));

