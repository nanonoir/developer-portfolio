import { FiExternalLink } from "react-icons/fi";
import { githubIcon } from "../../../assets/icons";
import type { Project } from "../../../types/project.types"

type Props = {
    project: Project;
};

export const ProjectCard = ({ project }: Props) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="technologies-list">
                {project.technologies.map(technology => (
                    <span className="technology" key={technology}>
                        {technology}
                    </span>))};
            </div>

            <div className="project-links">
                    <a 
                        href={project.githubLink}
                        target="_blank" 
                        rel="noreferrer"
                        aria-label={`Ver código de ${project.title}`}
                    >
                        {githubIcon}
                    </a>
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            aria-label="Open Link"
                            target="_blank" 
                            rel="noreferrer">
                            Demo <FiExternalLink />
                        </a>
                    )};
            </div>
        </div>
    );
};