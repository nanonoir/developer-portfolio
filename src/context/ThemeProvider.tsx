import { useState, useEffect } from 'react';
import { type Theme, type ThemeProviderProps } from '../types'
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [hasManuallyToggled, setHasManuallyToggled] = useState(false);
    const [theme, setTheme] = useState<Theme>(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode ? 'dark' : 'light';
        
    });

    useEffect(() => {
        const body = document.body;
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (hasManuallyToggled) {
                return;
            }
            setTheme(e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);
        
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [hasManuallyToggled]);

    const toggleTheme = () => {
        if (!hasManuallyToggled) {
            setHasManuallyToggled(true);
        }
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
