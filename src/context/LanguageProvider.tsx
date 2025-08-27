import { createContext, useState} from "react";
import { type LanguageContextType, type Language, type LanguageProviderProps } from "../types";

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
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