import { useContext } from "react";
import { LanguageContext } from "../../../context";
import { motion } from 'framer-motion'
import { githubIcon, linkedinIcon} from '../../../assets/icons/index';
import { heroData } from "../../../data";
import { fadeInRight, fadeInUp, mainContainer } from "../../../animations/variants";
import { NavHashLink } from "react-router-hash-link";
import illustrationHero from '../../../assets/imgs/illustrationHero.png'


export const HeroSection = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = heroData[language];

    return (
        <section id="home" className="hero-container">
            <motion.div
                className="hero-text"
                variants={mainContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <motion.p variants={fadeInUp}>
                    {currentContent.greeting}, {currentContent.intro}
                </motion.p>

                <motion.h1 variants={fadeInUp}>
                    {currentContent.name}
                </motion.h1>

                <motion.h3 variants={fadeInUp}>
                    {currentContent.role}
                </motion.h3>

                <motion.div variants={fadeInUp}>
                    <NavHashLink smooth to="#contact" className="button">
                        {currentContent.contact}
                    </NavHashLink>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/nahuelnicolasnoir/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="Linkedin" />
                        </a>
                        <a href="https://github.com/nanonoir" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <img src={githubIcon} alt="Github" />
                        </a>   
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-illustration-container"
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <img src={illustrationHero} alt="Developer Working at Desk Illustration" className="hero-illustration"></img>
            </motion.div>

        </section>
    );    
};