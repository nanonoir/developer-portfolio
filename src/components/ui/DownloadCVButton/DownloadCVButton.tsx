import { useContext } from 'react'; 
import { LanguageContext } from '../../../context' 

const content = {
  es: 'Descargar CV',
  en: 'Download CV',
};

export const DownloadCVButton = () => {
  const { language } = useContext(LanguageContext);

  return (
    <a
      href="/CV_Nahuel_Noir_EN.pdf"
      download="CV_Nahuel_Noir_EN.pdf"
      target="_blank" 
      rel="noopener noreferrer"
      className="button-cv"
    >
      {content[language]}
    </a>
  );
};