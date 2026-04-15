export type ProjectMediaVariant = "desktop" | "mobile";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  mediaVariant: ProjectMediaVariant;
  images: ProjectImage[];
  githubLink?: string;
  demoLink?: string;
};

export type ProjectSectionContent = {
  title: string;
  projects: Project[];
};
