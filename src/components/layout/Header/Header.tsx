import { useContext } from "react";
import type { Language, NavContent } from "../../../types";
import { LanguageContext } from "../../../context";
import { ThemeSwitcher } from "../../theme";
import { LanguageSelector } from "../../language";
import { NavHashLink } from "react-router-hash-link";
import { DownloadCVButton } from "../../ui/DownloadCVButton/DownloadCVButton";

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
    const { language } = useContext(LanguageContext);
    const currentContent = content[language];

    return (
        <header className={`header-container`}>
            <nav className="header-nav">
                <NavHashLink smooth to="#about" className="nav-link">{currentContent.about}</NavHashLink>
                <NavHashLink smooth to="#portfolio" className="nav-link">{currentContent.portfolio}</NavHashLink>
                <NavHashLink smooth to="#contact" className="nav-link">{currentContent.contact}</NavHashLink>
            </nav>

            <div className="flex items-center gap-4">
                <DownloadCVButton />
                <ThemeSwitcher />
                <LanguageSelector />
            </div>
        </header>
    );
};