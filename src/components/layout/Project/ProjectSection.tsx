import { useContext } from "react";
import { LanguageContext } from "../../../context";
import { projectContent } from "../../../data";
import { ProjectCard } from "../../ui/ProjectCard/ProjectCard";

export const ProjectSection = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = projectContent[language];

    return (
        <section id="projects">
            <h2>{currentContent.title}</h2>

            <div className="projects-grid">
                {currentContent.projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

