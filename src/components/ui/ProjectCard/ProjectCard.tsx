import { FiExternalLink } from "react-icons/fi";
import { githubIcon } from "../../../assets/icons";
import type { Project } from "../../../types/project.types"

type Props = {
    project: Project;
};

export const ProjectCard = ({ project }: Props) => {
    return (
        <div className="project-card">
            <div className="project-links">
                <a 
                    href={project.githubLink}
                    target="_blank" 
                    rel="noreferrer"
                    aria-label={`Ver código de ${project.title}`}
                >
                    <img src={githubIcon} alt="Github" className="card-git" />
                </a>
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            aria-label="Open Link"
                            target="_blank" 
                            rel="noreferrer">
                            <FiExternalLink className="card-link"/>
                        </a>
                    )}
            </div>

            <div className="project-card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                
                <img src={project.image} alt={project.title} className="card-img" />

                <div className="technologies-list">
                    {project.technologies.map(technology => (
                        <span className="technology" key={technology}>
                            {technology}
                        </span>))}
                </div>
            </div>

        </div>
    );
};