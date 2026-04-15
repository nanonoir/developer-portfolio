import { useContext } from "react";
import { motion } from "framer-motion";
import { aboutArt } from "../../../assets/imgs";
import { LanguageContext } from "../../../context";
import { aboutData, mainSkills } from "../../../data";
import { aboutArtFadeIn, aboutArtFloat, mainContainer, fadeInLeft, secondaryContainer } from "../../../animations/variants";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { SectionShell } from "../../ui";

export const About = () => {
    const { language } = useContext(LanguageContext);
    const scrollDirection = useScrollDirection();
    const currentContent = aboutData[language];

    return (
        <section id="about" className="mb-30">
            <SectionShell className="px-4 py-16 text-left">
                <motion.div
                    className="md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center md:gap-10 lg:gap-14"
                    variants={mainContainer(scrollDirection)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <div>
                        <motion.h2 variants={fadeInLeft} className="mb-8 text-5xl text-accent">
                            {currentContent.about}
                        </motion.h2>

                        <motion.p variants={fadeInLeft} className="mb-8 w-full text-2xl md:w-full">
                            {currentContent.intro}
                        </motion.p>
                        <motion.p variants={fadeInLeft} className="mb-8 w-full text-2xl md:w-full">
                            {currentContent.made}
                        </motion.p>

                        <motion.h3 variants={fadeInLeft} className="mb-4 text-4xl text-accent">
                            {currentContent.education.title}
                        </motion.h3>
                        <motion.p variants={fadeInLeft} className="mb-1 text-3xl">
                            {currentContent.education.degree}
                        </motion.p>
                        <motion.p variants={fadeInLeft} className="text-xl">
                            {currentContent.education.institution}
                        </motion.p>
                        <motion.p variants={fadeInLeft} className="text-base text-accent-soft">
                            {currentContent.education.details}
                        </motion.p>

                        <motion.h3 variants={fadeInLeft} className="mt-4 mb-4 text-4xl text-accent">
                            {currentContent.experience.title}
                        </motion.h3>
                        <motion.p variants={fadeInLeft} className="mb-1 text-3xl">
                            {currentContent.experience.role}
                        </motion.p>
                        <motion.p variants={fadeInLeft} className="text-xl">
                            {currentContent.experience.company}
                        </motion.p>
                        <motion.p variants={fadeInLeft} className="text-base text-accent-soft">
                            {currentContent.experience.details}
                        </motion.p>

                        <motion.h3 variants={fadeInLeft} className="mt-8 mb-6 text-4xl text-accent">
                            {currentContent.skills}
                        </motion.h3>

                        <motion.div
                            variants={secondaryContainer}
                            className="mt-8 grid grid-cols-4 justify-items-center gap-4 sm:grid-cols-6 md:w-full md:grid-cols-8 lg:grid-cols-10"
                        >
                            {mainSkills.map((skill) => (
                                <motion.div
                                    variants={fadeInLeft}
                                    className="group"
                                    key={skill.name}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="h-12 w-12 transition-transform duration-200 group-hover:scale-110"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="hidden md:flex md:items-center md:justify-center"
                        variants={aboutArtFadeIn}
                    >
                        <motion.img
                            src={aboutArt}
                            alt="Abstract illustration for the about section"
                            className="max-w-full"
                            animate={aboutArtFloat.animate}
                            transition={aboutArtFloat.transition}
                        />
                    </motion.div>
                </motion.div>
            </SectionShell>
        </section>
    );
};
