import { useContext } from "react";
import type { Language, NavContent } from "../../../types";
import { LanguageContext, ThemeContext } from "../../../context";
import { ThemeSwitcher } from "../../theme";
import { LanguageSelector } from "../../language";

const content: Record<Language, NavContent> = {
    es: {
        about: 'Sobre Mí',
        portfolio: 'Portafolio',
        contact: 'Contacto'
    },
    en: {
        about: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact'
    }
};

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    const currentContent = content[language];

    return (
        <header className={`header ${theme}`}>
            <nav>
                <a href="#about">{currentContent.about}</a>
                <a href="#portfolio">{currentContent.portfolio}</a>
                <a href="#contact">{currentContent.contact}</a>
            </nav>

            <div>
                <ThemeSwitcher />
                <LanguageSelector />
            </div>
        </header>
    );
};