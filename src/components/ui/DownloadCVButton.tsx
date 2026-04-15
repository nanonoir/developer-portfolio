import { useContext } from "react";
import { LanguageContext } from "../../context";

const content = {
    es: "Descargar CV",
    en: "Download CV",
};

export const DownloadCVButton = () => {
    const { language } = useContext(LanguageContext);
    const currentCvHref =
        language === "es"
            ? "/CV_Noir_Nahuel_Nicolas_ES.pdf"
            : "/CV_Noir_Nahuel_Nicolas_EN.pdf";

    return (
        <a
            href={currentCvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-accent-strong px-5 py-2.5 text-center text-on-accent transition-colors hover:bg-accent-hover"
        >
            {content[language]}
        </a>
    );
};
