import { type ReactNode } from 'react';

export type Language = 'es' | 'en';

export type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

export type LanguageProviderProps = {
    children: ReactNode;
};

