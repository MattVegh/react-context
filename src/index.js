import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './ThemeContext'
import UsernameContext from './UsernameContext'


ReactDOM.render(
    <UsernameContext.Provider value={'Matt'}>
        <ThemeContext.Provider value={'light'}>
            <App />
        </ThemeContext.Provider>
    </UsernameContext.Provider>,
    document.getElementById('root'));

