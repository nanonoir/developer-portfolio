import { useContext } from "react"
import { LanguageContext } from "../../../context"
import { footerData } from "../../../data/footer.data";
import { NavHashLink } from "react-router-hash-link";
import { githubIcon, linkedinIcon, reactIcon, tailwindIcon, typescriptIcon, whatsappIcon } from "../../../assets/icons";


export const Footer =  () => {

    const { language } = useContext(LanguageContext);
    const currentContent = footerData[language];

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-nav">
                    {currentContent.navLinks.map((link) => (
                        <NavHashLink
                            key={link.name}
                            smooth
                            to={link.href}>
                                {link.name}
                        </NavHashLink>
                    ))}
                </div>

                <div className="footer-credits">
                    <span>{currentContent.madeWithText}</span>
                    <img src={reactIcon} alt="React" className="animate-spin-slow" />
                    <img src={typescriptIcon} alt="TypeScript" />
                    <img src={tailwindIcon} alt="Tailwind CSS" />
                </div>

                <div className="footer-socials">
                    <a href={currentContent.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href={currentContent.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href={currentContent.socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>
            </div>
        </footer>
    );
};