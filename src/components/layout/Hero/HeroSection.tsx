import { useContext } from "react";
import { LanguageContext } from "../../../context";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import { githubIcon, linkedinIcon} from '../../../assets/icons/index';
import Hi from '../../assets/gifs/Hi.gif'


const content = {
    es: {
        greeting: 'Hola',
        intro: 'soy',
        name: 'Nahuel Nicolas Noir',
        role: 'Desarrollador de Software | Full Stack Developer',
        contact: 'Contáctame'
    },
    en: {
        greeting: 'Hello',
        intro: "I'm",
        name: 'Nahuel Nicolas Noir',
        role: 'Software Developer | Full Stack Developer',
        contact: 'Contact Me'
    }
};

export const HeroSection = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = content[language];

    return (
        
        <section id="home" className="hero-container">
            <div className="hero-text">
                <ScrollAnimation animateIn="fadeInUp">
                    <p>{currentContent.greeting} <img src={Hi} alt="Hi" width="20px" />, {currentContent.intro} </p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={200}>
                    <h1>{currentContent.name}</h1>
                </ScrollAnimation>

                
                <ScrollAnimation animateIn="fadeInUp" delay={400}>
                    <h3>{currentContent.role}</h3>
                </ScrollAnimation>

                
                <ScrollAnimation animateIn="fadeInUp" delay={600}>
                      <NavHashLink smooth to="#contact" className="button">
                            {currentContent.contact}
                      </NavHashLink>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" delay={800}>
                    <div className="social-media">
                                <a href="https://www.linkedin.com/in/nahuelnicolasnoir/" target="_blank" rel="noreferrer">
                                    <img src={linkedinIcon} alt="Linkedin" />
                                </a>
                                <a href="https://github.com/nanonoir" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="Github" />
                                </a>   
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};