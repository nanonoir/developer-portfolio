import { useContext } from "react"
import { LanguageContext } from "../../context"
import type { Language } from "../../types";

export const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <>
        <button
            onClick={() => handleLanguageChange('es')}
            disabled={language === 'es'}
        >
            ES
        </button>
        <button
            onClick={() => handleLanguageChange('en')}
            disabled={language === 'en'}
        >
            EN
        </button>
            </>
    );
};