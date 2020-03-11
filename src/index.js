import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './ThemeContext'
import { UserContextProvider } from './UsernameContext'


ReactDOM.render(
    <UserContextProvider>
        <ThemeContextProvider >
            <App />
        </ThemeContextProvider>
    </UserContextProvider>,
    document.getElementById('root'));

