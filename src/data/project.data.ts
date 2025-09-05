import type { Language } from "../types";
import type { ProjectSectionContent } from "../types/project.types";

export const projectData: Record<Language, ProjectSectionContent> = {
    es: {
            title: 'Mis Proyectos',
            projects: [
            {
                title: 'Gympoint - App de Fitness',
                description: 'Aplicación móvil Full Stack para la gestión de un gimnasio, permitiendo a los usuarios registrarse, ver rutinas y seguir su progreso. Desarrollado en equipo usando metodologías ágiles.',
                technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Docker'],
                image: '/images/gympoint-cover.png',
                githubLink: 'https://github.com/gonzaloogv/GymPoint',
                demoLink: ''
            },
            {
                title: 'Portfolio Personal',
                description: 'Esta misma web. Una Single Page Application (SPA) responsiva con tema claro/oscuro y soporte multi-idioma, construida para mostrar mis habilidades como desarrollador.',
                technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
                image: '/images/portfolio-cover.png',
                githubLink: 'https://github.com/nanonoir/developer-portfolio',
                demoLink: '',
            } 
        ]
    },
        
    en: {
            title: 'My Projects',
            projects: [
            {
                title: 'Gympoint - Fitness App',
                description: 'Full Stack mobile application for gym management, allowing users to register, view routines, and track their progress. Developed in a team using agile methodologies.',
                technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Docker'],
                image: '/images/gympoint-cover.png',
                githubLink: 'https://github.com/gonzaloogv/GymPoint',
                demoLink: ''
            },
            {
                title: 'Personal Portfolio',
                description: 'This very website. A responsive Single Page Application (SPA) with light/dark theme and multi-language support, built to showcase my skills as a developer.',
                technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
                image: '/images/portfolio-cover.png',
                githubLink: 'https://github.com/nanonoir/developer-portfolio',
                demoLink: '',
            }
        ]
    }       
};