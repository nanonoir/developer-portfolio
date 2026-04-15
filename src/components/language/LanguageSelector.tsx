import { useContext } from "react";
import { LanguageContext } from "../../context";
import type { Language } from "../../types";

export const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    const buttonClassName = (lang: Language) =>
        `rounded-lg px-3 py-2 text-sm transition-colors ${
            language === lang
                ? "bg-accent text-on-accent"
                : "text-text hover:bg-background"
        }`;

    return (
        <div className="flex items-center rounded-xl border border-border bg-surface p-1">
            <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                disabled={language === "es"}
                className={buttonClassName("es")}
            >
                ES
            </button>
            <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                disabled={language === "en"}
                className={buttonClassName("en")}
            >
                EN
            </button>
        </div>
    );
};
