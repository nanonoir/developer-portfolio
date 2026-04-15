import { useContext } from "react";
import { LanguageContext } from "../../../context";
import { projectData } from "../../../data";
import { ProjectCard, SectionHeading, SectionShell } from "../../ui";

export const ProjectSection = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = projectData[language];

    return (
        <section id="projects" className="py-16 text-center">
            <SectionShell className="px-4">
                <SectionHeading align="center" className="mb-8 text-6xl">
                    {currentContent.title}
                </SectionHeading>

                <div className="mt-16 mb-24 grid grid-cols-1 items-start gap-8 md:mt-18 md:gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {currentContent.projects.map(project => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </SectionShell>
        </section>
    );
};
