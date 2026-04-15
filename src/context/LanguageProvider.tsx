import { useState} from "react";
import { type Language, type LanguageProviderProps } from "../types";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider= ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>(() => {
        
        const userPreferredLanguages = navigator.languages;

        for (const lang of userPreferredLanguages) {
            if (lang.startsWith('en')) {
                return 'en';
            }
            if (lang.startsWith('es')) {
                return 'es';
            }
        }

        return 'en';
    });

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
