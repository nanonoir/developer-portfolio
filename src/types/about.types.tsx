export type EducationItem = {
    title: string;
    degree: string;
    institution: string;
    details: string;
};

export type ExperienceItem = {
    title: string;
    role: string;
    company: string;
    details: string;
};

export type AboutContent = {
    about: string;
    intro: string;
    made: string;
    education: EducationItem;
    experience: ExperienceItem;
    skills: string;
    secondarySkills: string;
};