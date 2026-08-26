import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('default');
    // document.documentElement.className = theme;

    const toggleTheme = () => {
        console.log('change theme');
        setTheme((prev) => (prev === 'dark') ? 'default' : 'dark');
    }

    useEffect(() => {
        document.documentElement.className = theme;
    },[theme])

    return (
        <ThemeContext value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext>
    )
}

export default ThemeProvider;
export { ThemeContext, ThemeProvider };