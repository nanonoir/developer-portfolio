import { useContext } from "react";
import { ThemeContext } from "../../context";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === "dark"}
            aria-label="Cambiar tema"
            className={`relative inline-flex h-7 w-12 items-center rounded-full border border-border transition-colors ${
                theme === "dark" ? "bg-accent" : "bg-background"
            }`}
        >
            <span
                className={`h-5 w-5 rounded-full bg-surface transition-transform ${
                    theme === "dark" ? "translate-x-6" : "translate-x-1"
                }`}
            />
        </button>
    );
};
