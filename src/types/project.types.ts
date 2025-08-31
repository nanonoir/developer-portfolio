export type Project = {
  title: string;
  description: string;
  technologies: string[]; 
  image: string; 
  githubLink: string;
  demoLink?: string; 
};

export type ProjectSectionContent = {
  title: string;
  projects: Project[];
}