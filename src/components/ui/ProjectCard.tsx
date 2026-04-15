import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { useProjectCarousel } from "../../hooks/useProjectCarousel";
import { IconLink } from "./IconLink";
import type { Project } from "../../types/project.types";

type Props = {
    project: Project;
};

export const ProjectCard = ({ project }: Props) => {
    const {
        activeImageIndex,
        hasMultipleImages,
        goToNextImage,
        goToPreviousImage,
        handleTouchEnd,
        handleTouchStart,
        setActiveImageIndex,
    } = useProjectCarousel({ imageCount: project.images.length });
    const previewImage = project.images[activeImageIndex];
    const hasActions = Boolean(project.githubLink || project.demoLink);
    const isMobileProject = project.mediaVariant === "mobile";
    const isDesktopProject = project.mediaVariant === "desktop";

    return (
        <article className="group flex flex-col rounded-[2rem] border border-border bg-surface p-6 text-left text-text shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 md:p-6">
            <header className="mb-5 md:mb-4">
                <h3 className="mb-3 text-3xl leading-tight md:text-[2rem]">{project.title}</h3>
                <p className="max-w-[58ch] text-base leading-relaxed text-text-muted md:text-base">
                    {project.description}
                </p>

                {hasActions && (
                    <div className="mt-4 flex flex-wrap justify-end gap-2 md:mt-3">
                        {project.githubLink && (
                            <IconLink
                                href={project.githubLink}
                                label={`Abrir repositorio de ${project.title}`}
                                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-text-muted hover:border-accent/40 hover:text-text md:px-2.5 md:py-1 md:text-[0.6rem]"
                            >
                                GitHub
                            </IconLink>
                        )}

                        {project.demoLink && (
                            <IconLink
                                href={project.demoLink}
                                label={`Abrir demo de ${project.title}`}
                                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-text-muted hover:border-accent/40 hover:text-text md:px-2.5 md:py-1 md:text-[0.6rem]"
                            >
                                <span>Demo</span>
                                <FiExternalLink className="ml-1.5 h-3.5 w-3.5" />
                            </IconLink>
                        )}
                    </div>
                )}
            </header>

            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className={`relative overflow-hidden rounded-[1.6rem] border border-border bg-background/45 p-3 md:p-4 ${
                    isMobileProject
                        ? "flex h-[26rem] items-center justify-center md:h-[30rem]"
                        : "w-full"
                } ${
                    isDesktopProject
                        ? "flex h-[16rem] items-center justify-center p-2 sm:h-[18rem] sm:p-2.5 md:h-auto md:min-h-0 md:p-3"
                        : ""
                }`}
            >
                {hasMultipleImages && (
                    <>
                        <button
                            type="button"
                            onClick={goToPreviousImage}
                            aria-label={`Ver imagen anterior de ${project.title}`}
                            className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-text shadow-sm transition-colors duration-200 hover:border-accent/40 hover:text-accent md:flex"
                        >
                            <FiChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={goToNextImage}
                            aria-label={`Ver imagen siguiente de ${project.title}`}
                            className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-text shadow-sm transition-colors duration-200 hover:border-accent/40 hover:text-accent md:flex"
                        >
                            <FiChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}

                <img
                    src={previewImage.src}
                    alt={previewImage.alt}
                    className={
                        isMobileProject
                            ? "h-full w-auto max-w-full object-contain"
                            : "block h-full w-full rounded-[0.9rem] object-cover md:h-auto md:object-contain"
                    }
                />
            </div>

            {hasMultipleImages && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-3">
                    {project.images.map((image, index) => {
                        const isActive = index === activeImageIndex;

                        return (
                            <button
                                type="button"
                                key={image.src}
                                onClick={() => setActiveImageIndex(index)}
                                aria-label={`Ir a la imagen ${index + 1} de ${project.title}`}
                                aria-pressed={isActive}
                                className={`h-2.5 rounded-full transition-all duration-200 ${
                                    isActive
                                        ? "w-6 bg-accent"
                                        : "w-2.5 bg-border hover:bg-text-muted"
                                }`}
                            />
                        );
                    })}
                </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2 md:mt-4">
                {project.technologies.map((technology) => (
                    <span
                        className="rounded-full bg-accent-surface/85 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-on-accent md:px-2 md:py-0.75 md:text-[0.7rem]"
                        key={technology}
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );
};
