import { useContext } from "react"
import { LanguageContext } from "../../context"
import type { Language } from "../../types";

export const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <div className="language-selector">
            <button
                onClick={() => handleLanguageChange('es')}
                disabled={language === 'es'}
                className="language-button"
            >
            ES
            </button>
            <button
                onClick={() => handleLanguageChange('en')}
                disabled={language === 'en'}
                className="language-button"
            >
            EN
            </button>
        </div>

    );
};