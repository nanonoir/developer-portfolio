import { type PropsWithChildren } from 'react';

export type Language = 'es' | 'en';

export type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

export type LanguageProviderProps = PropsWithChildren;

export type NavContent = {
  about: string;
  portfolio: string;
  contact: string;
};