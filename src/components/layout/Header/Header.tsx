import { useContext, useState } from "react";
import { LanguageContext } from "../../../context";
import { ThemeSwitcher } from "../../theme";
import { LanguageSelector } from "../../language";
import { NavHashLink } from "react-router-hash-link";
import { DownloadCVButton } from "../../ui/DownloadCVButton/DownloadCVButton";
import { headerData } from "../../../data";


export const Header = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = headerData[language];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header-container`}>
            <NavHashLink smooth to="#home" className="nav-link">
                {"<Nahuel Nicolas Noir />"}
            </NavHashLink>

            <nav className="header-nav">
                <NavHashLink smooth to="#about" className="nav-link" onClick={closeMenu}>{currentContent.about}</NavHashLink>
                <NavHashLink smooth to="#portfolio" className="nav-link" onClick={closeMenu}>{currentContent.portfolio}</NavHashLink>
                <NavHashLink smooth to="#contact" className="nav-link" onClick={closeMenu}>{currentContent.contact}</NavHashLink>
            </nav>

            <div className="flex items-center gap-4">
                <DownloadCVButton />
                <ThemeSwitcher />
                <LanguageSelector />

                <button 
                    className="hamburger-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>    
                </button>
            </div>
        </header>
    );
};