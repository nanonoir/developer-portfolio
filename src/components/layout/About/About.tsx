import { useContext } from "react";
import type { AboutContent, Language } from "../../../types";
import { LanguageContext } from "../../../context";
import * as Icons from '../../../assets/icons';
import ScrollAnimation from "react-animate-on-scroll";

const content: Record<Language, AboutContent> = {
    es: {
        about: 'Sobre mi',
        intro: '¡Hola! Soy Nahuel, un apasionado desarrollador de software enfocado en la creación de aplicaciones web y móviles. Me especializo en construir soluciones de software escalables y de fácil mantenimiento.',
        made: 'Construyo aplicaciones web y móviles interactivas, e implemento servicios backend robustos para darles vida. Además, aplico metodologías ágiles como Scrum y Pair Programming, utilizando herramientas como Jira, Trello y GitHub para asegurar un flujo de trabajo colaborativo y eficiente.',
        education: {
            title: 'Educación',
            degree: 'Técnico en Desarrollo de Software',
            institution: 'Instituto Económico Nacional (I.E.N.)',
            details: '2023 - 2025 (Estimado)'
        },
        experience: {
            title: 'Experiencia',
            role: 'Desarrollador de Robótica (Pasantía)',
            company: 'Secretaría de Contenidos Audiovisuales',
            details: '2024 - Corrientes, Argentina'
        },
        skills: 'Estas son mis habilidades principales:',
        secondarySkills: 'Otras tecnologías con las que he trabajado:'
    },
    en: {
        about: 'About Me',
        intro: "Hello! I'm Nahuel, a passionate software developer focused on creating web and mobile applications. I specialize in building scalable and easy-to-maintain software solutions.",
        made: "I build interactive web and mobile applications and implement robust backend services to bring them to life. Additionally, I apply agile methodologies like Scrum and Pair Programming, using tools like Jira, Trello, and GitHub to ensure a collaborative and efficient workflow.",
        education: {
            title: 'Education',
            degree: 'Software Development Technician',
            institution: 'National Economic Institute (I.E.N.)',
            details: '2023 - 2025 (Estimated)'
        },
        experience: {
            title: 'Experience',
            role: 'Robotics Developer Intern',
            company: 'Audiovisual Content Secretariat',
            details: '2024 - Corrientes, Argentina'
        },
        skills: 'Here are my main skills:',
        secondarySkills: "Other technologies I've worked with:"
    }
};

const mainSkills = [
  { name: 'React', icon: Icons.reactIcon },
  { name: 'TypeScript', icon: Icons.typescriptIcon },
  { name: 'JavaScript', icon: Icons.javascriptIcon },
  { name: 'Node.js', icon: Icons.nodejsIcon },
  { name: 'PostgreSQL', icon: Icons.postgresqlIcon },
  { name: 'Tailwind CSS', icon: Icons.tailwindIcon },
  { name: 'Git', icon: Icons.gitIcon },
  { name: 'Docker', icon: Icons.dockerIcon },
  { name: 'Jest', icon: Icons.jestIcon },
];

const secondarySkills = ['Python', 'PHP', 'C++ (Arduino)'];

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
