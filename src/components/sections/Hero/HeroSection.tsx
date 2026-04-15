import { useContext } from "react";
import { motion } from "framer-motion";
import { heroArt } from "../../../assets/imgs";
import { githubIcon, githubWhiteIcon, linkedinIcon, whatsappIcon } from "../../../assets/icons";
import { fadeInUp, heroArtFadeIn, heroArtSpiral, heroChevronPulse, mainContainer } from "../../../animations/variants";
import { LanguageContext, ThemeContext } from "../../../context";
import { heroData, socialData } from "../../../data";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { scrollToSection } from "../../../utilities/scroll.utils";
import { IconLink, SectionShell } from "../../ui";

export const HeroSection = () => {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const scrollDirection = useScrollDirection();
    const currentContent = heroData[language];
    const currentSocialLinks = socialData[language];
    const chevrons = [0, 1];
    const currentGithubIcon = theme === "dark" ? githubWhiteIcon : githubIcon;
    const handleContactNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        scrollToSection("contact");
    };

    return (
        <section id="home" className="min-h-screen">
            <SectionShell className="flex flex-col gap-12 px-4 pt-50 pb-8 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
                <motion.div
                    className="flex w-full flex-col md:w-1/2"
                    variants={mainContainer(scrollDirection)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <motion.p variants={fadeInUp} className="mb-3 text-xl">
                        {currentContent.greeting}, {currentContent.intro}
                    </motion.p>

                    <motion.h1 variants={fadeInUp} className="mb-3 font-display text-5xl text-accent md:text-7xl">
                        {currentContent.name}
                    </motion.h1>

                    <motion.h3 variants={fadeInUp} className="mt-2 text-2xl md:text-3xl">
                        {currentContent.role}
                    </motion.h3>

                    <motion.div variants={fadeInUp}>
                        <a
                            href="#contact"
                            className="mt-6 inline-flex self-center rounded-2xl bg-accent-strong px-6 py-3 text-2xl text-on-accent transition-colors duration-200 hover:bg-accent-hover md:self-start"
                            onClick={handleContactNavigation}
                        >
                            {currentContent.contact}
                        </a>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <div className="mt-8 flex justify-center gap-4 md:justify-start">
                            <IconLink href={currentSocialLinks.linkedin} label="LinkedIn">
                                <img src={linkedinIcon} alt="Linkedin" className="h-12 w-12 transition-transform duration-200" />
                            </IconLink>
                            <IconLink href={currentSocialLinks.github} label="GitHub">
                                <img src={currentGithubIcon} alt="Github" className="h-12 w-12 transition-transform duration-200" />
                            </IconLink>
                            <IconLink href={currentSocialLinks.whatsapp} label="WhatsApp">
                                <img src={whatsappIcon} alt="WhatsApp" className="h-12 w-12 transition-transform duration-200" />
                            </IconLink>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        aria-hidden="true"
                        className="mt-12 flex justify-center md:ml-10 md:justify-start"
                    >
                        <div className="flex flex-col items-center text-accent">
                            {chevrons.map((chevron) => (
                                <motion.span
                                    key={chevron}
                                    className="-mt-1 h-4 w-4 rotate-45 border-r-2 border-b-2 border-current"
                                    animate={heroChevronPulse.animate}
                                    transition={{
                                        ...heroChevronPulse.transition,
                                        delay: chevron * 0.15,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hidden w-full items-center justify-center md:flex md:w-1/2"
                    variants={heroArtFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <motion.img
                        src={heroArt}
                        alt="Abstract hero artwork for the developer portfolio"
                        className="max-w-full"
                        animate={heroArtSpiral.animate}
                        transition={heroArtSpiral.transition}
                    />
                </motion.div>
            </SectionShell>
        </section>
    );
};
