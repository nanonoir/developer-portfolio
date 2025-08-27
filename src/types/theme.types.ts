import { type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export type ThemeProviderProps = {
    children: ReactNode;
};