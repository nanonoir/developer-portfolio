import type { Language, FooterContent } from '../types';

export const footerData: Record<Language, FooterContent> = {
  es: {
    madeWithText: 'Hecho por Nahuel Nicolas Noir con',
    navLinks: [
      { name: 'Inicio', href: '#home' },
      { name: 'Sobre Mí', href: '#about' },
      { name: 'Proyectos', href: '#projects' },
    ],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nahuelnicolasnoir/',
      github: 'https://github.com/nanonoir',
      whatsapp: 'https://wa.me/543794657335?text=Hola,%20Nahuel,%20me%20pongo%20en%20contacto%20a%20través%20de%20tu%20portfolio.',
    },
  },
  en: {
    madeWithText: 'Made by Nahuel Nicolas Noir using',
    navLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
    ],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nahuelnicolasnoir/',
      github: 'https://github.com/nanonoir',
      whatsapp: `https://wa.me/543794657335?text=Hello,%20Nahuel,%20I'm%20contacting%20you%20through%20your%20portfolio.`,
    },
  },
};