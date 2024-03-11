/**
 * @file ThemeContext.jsx
 * @desc Provides a theme context for the application.
 * @requires react
 * @exports ThemeProvider
 * @exports useTheme
 */

import { createContext, useState, useContext } from 'react';

/**
 * @constant {object} ThemeContext
 * @desc The theme context object created using createContext().
 */
const ThemeContext = createContext();

/**
 * @function ThemeProvider
 * @desc A wrapper component that provides the theme context to its children.
 * @param {object} children - The child components.
 * @returns {React.JSX.Element} The wrapped components with theme context.
 */
export const ThemeProvider = ({ children }) => {
    const [theme, setCurrentTheme] = useState('dark');

    /**
     * @function setTheme
     * @desc Sets the current theme.
     * @param {string} newTheme - The new theme value.
     */
    const setTheme = (newTheme) => {
        if (newTheme !== "dark" && newTheme !== "light") return;
        setCurrentTheme(newTheme);
    };

    /**
     * @function getTheme
     * @desc Returns the current theme.
     * @returns {string} The current theme value.
     * @example
     * const theme = getTheme();
     * console.log(theme); // dark
     */
    const getTheme = () => {
        return theme;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * @function useTheme
 * @desc A custom hook to access the theme context.
 * @returns {object} The theme context object.
 */
export const useTheme = () => {
    return useContext(ThemeContext);
};