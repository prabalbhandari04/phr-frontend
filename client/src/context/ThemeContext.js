import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const themes = {
    light: {
        name: 'Light',
        white: '#FFF',
        gray_light: '#EEEEEE',
        gray_dark: '#aeaeae',
        primary: '#50CB93',
        secondary: '#71EFA3',
        black: '#3F3F44',
        red : '#e62517',
    },
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;