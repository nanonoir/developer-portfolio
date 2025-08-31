import type { Language, AboutContent } from "../types";
import * as Icons from '../assets/icons';

export const aboutData: Record<Language, AboutContent> = {
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

export const mainSkills = [
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

export const secondarySkills = ['Python', 'PHP', 'C++ (Arduino)'];