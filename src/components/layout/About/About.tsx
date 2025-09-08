import { useContext } from "react";
import { LanguageContext } from "../../../context";
import { aboutData, mainSkills, secondarySkills } from "../../../data";
import { motion } from 'framer-motion';
import { mainContainer, fadeInLeft, secondaryContainer } from "../../../animations/variants";

export const About = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = aboutData[language];

    return (
        <section id="about" className="about-container">
            <motion.div
              variants={mainContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
                <motion.h2 variants={fadeInLeft} className="about-title">{currentContent.about}</motion.h2>
                
                <motion.p variants={fadeInLeft} className="about-text">{currentContent.intro}</motion.p>
                <motion.p variants={fadeInLeft} className="about-text">{currentContent.made}</motion.p>

                <motion.h3 variants={fadeInLeft} className="education-title">{currentContent.education.title}</motion.h3>
                <motion.p variants={fadeInLeft} className="degree">{currentContent.education.degree}</motion.p>
                <motion.p variants={fadeInLeft} className="institution">{currentContent.education.institution}</motion.p>
                <motion.p variants={fadeInLeft} className="details">{currentContent.education.details}</motion.p>

                <motion.h3 variants={fadeInLeft} className="experience-title">{currentContent.experience.title}</motion.h3>
                <motion.p variants={fadeInLeft} className="role">{currentContent.experience.role}</motion.p>
                <motion.p variants={fadeInLeft} className="company">{currentContent.experience.company}</motion.p>
                <motion.p variants={fadeInLeft} className="details">{currentContent.experience.details}</motion.p>

                <motion.h3 variants={fadeInLeft} className="skills-title">{currentContent.skills}</motion.h3>
                
                <motion.div variants={secondaryContainer} className="skills-grid">
                    {mainSkills.map((skill) => (
                        <motion.div 
                            variants={fadeInLeft}
                            className="skill-item"
                            key={skill.name}
                        >
                            <img src={skill.icon} alt={skill.name} />
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.h4 variants={fadeInLeft}>
                    {`${currentContent.secondarySkills} ${secondarySkills.join(', ')}.`}
                </motion.h4>
            </motion.div>
        </section>
    );
};