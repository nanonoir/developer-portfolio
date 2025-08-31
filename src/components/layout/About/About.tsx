import { useContext } from "react";
import { LanguageContext } from "../../../context";
import ScrollAnimation from "react-animate-on-scroll";
import { content, mainSkills, secondarySkills } from "../../../data";


export const About = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = content[language];

    return (
        <section id="about" className="about-container">
            <ScrollAnimation animateIn="fadeInLeft">
                <h2>{currentContent.about}</h2>
            </ScrollAnimation>

            {/* <ScrollAnimation animateIn="fadeInRight" delay={200}>
                <div className="about-image-column">
                    <img src={devFoto} alt="Nahuel Nicolas Noir" /> Note: in a next version i put a image of me here
                </div>
            </ScrollAnimation> */}
            
            <ScrollAnimation animateIn="fadeInLeft" delay={200}>
                <div className="about-text">
                    <p>{currentContent.intro}</p>
                    <p>{currentContent.made}</p>
                </div>
            </ScrollAnimation>

            <div className="about-details">
                <ScrollAnimation animateIn="fadeInLeft" delay={400}>
                    <div className="education-block">
                        <h3>{currentContent.education.title}</h3>
                        <p className="degree">{currentContent.education.degree}</p>
                        <p className="institution">{currentContent.education.institution}</p>
                        <p className="details">{currentContent.education.details}</p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInLeft" delay={600}>
                    <div className="experience-block">
                        <h3>{currentContent.experience.title}</h3>
                        <p className="role">{currentContent.experience.role}</p>
                        <p className="company">{currentContent.experience.company}</p>
                        <p className="details">{currentContent.experience.details}</p>
                    </div>
                </ScrollAnimation>
            </div>

            <div className="skills-section">
                <h3>{currentContent.skills}</h3>
                    <div className="skills-grid">
                        {mainSkills.map((skill, index) => (
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            delay={index * 100}
                            key={skill.name}
                            offset={50}
                        >
                            <div className="skill-item">
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                        </ScrollAnimation>
                        ))}
                    </div>
                
                <ScrollAnimation animateIn="fadeInLeft" delay={1000}>
                    <h4>{`${currentContent.secondarySkills}: ${secondarySkills.join(', ')}`}</h4>
                </ScrollAnimation>
            </div>
        </section>
    );
};
