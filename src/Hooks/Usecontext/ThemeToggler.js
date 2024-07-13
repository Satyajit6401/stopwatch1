// src/ThemeToggler.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} style={{ padding: '10px', margin: '20px' }}>
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    );
};

export default ThemeToggler;