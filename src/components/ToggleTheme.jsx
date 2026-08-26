import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ToggleTheme = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="theme-selection">
            <span>
                <input type="checkbox" id="change-theme" className="change-theme" onClick={toggleTheme} />
                <label htmlFor="change-theme" className="change-theme-label"></label>
            </span>
        </div>
    );
}

export default ToggleTheme;