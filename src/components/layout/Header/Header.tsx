import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageContext, ThemeContext } from "../../../context";
import { headerData } from "../../../data";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { scrollToSection } from "../../../utilities/scroll.utils";
import { closeMenuDarkIcon, closeMenuIcon, menuDarkIcon, menuIcon } from "../../../assets/icons";
import { LanguageSelector } from "../../language";
import { ThemeSwitcher } from "../../theme";
import { DownloadCVButton, SectionShell } from "../../ui";

export const Header = () => {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const scrollDirection = useScrollDirection();
    const currentContent = headerData[language];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNearTop, setIsNearTop] = useState(true);
    const currentMenuIcon = theme === "dark" ? menuDarkIcon : menuIcon;
    const currentCloseIcon = theme === "dark" ? closeMenuDarkIcon : closeMenuIcon;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleSectionNavigation = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        scrollToSection(sectionId);
        closeMenu();
    };

    const navLinks = [
        { href: "#about", label: currentContent.about },
        { href: "#projects", label: currentContent.portfolio },
        { href: "#contact", label: currentContent.contact },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsNearTop(window.pageYOffset <= 80);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isHeaderHidden = scrollDirection === "down" && !isNearTop && !isMenuOpen;

    return (
        <header
            data-site-header
            className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/95 text-text backdrop-blur-sm transition-transform duration-300 ${
                isHeaderHidden ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <SectionShell className="flex h-20 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                <a
                    href="#home"
                    className="shrink-0 whitespace-nowrap font-display text-2xl lg:text-3xl xl:text-4xl"
                    onClick={handleSectionNavigation("home")}
                >
                    {"<Nahuel Nicolas Noir />"}
                </a>

                <nav className="hidden min-w-0 items-center gap-3 lg:flex lg:gap-4">
                    <LanguageSelector />
                    <ThemeSwitcher />

                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-accent"
                            onClick={handleSectionNavigation(link.href.replace("#", ""))}
                        >
                            {link.label}
                        </a>
                    ))}

                    <DownloadCVButton />
                </nav>

                <button
                    type="button"
                    className="relative z-[60] shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background lg:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav"
                >
                    <span className="sr-only">{isMenuOpen ? "Close Menu" : "Open Menu"}</span>
                    <img
                        src={isMenuOpen ? currentCloseIcon : currentMenuIcon}
                        alt=""
                        aria-hidden="true"
                        className="h-5 w-5"
                    />
                </button>
            </SectionShell>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-nav"
                        className="fixed inset-0 z-40 flex min-h-screen bg-surface text-text lg:hidden"
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 28 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                    >
                        <SectionShell className="flex min-h-screen flex-col px-4 pb-8 pt-24 sm:px-6">
                            <nav className="mt-12 flex flex-1 flex-col items-center justify-center gap-8 text-center font-display text-4xl sm:text-5xl">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="transition-colors hover:text-accent"
                                        onClick={handleSectionNavigation(link.href.replace("#", ""))}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="flex flex-col items-center gap-8 pb-8">
                                <div className="flex items-center gap-5">
                                    <div className="scale-125">
                                        <LanguageSelector />
                                    </div>
                                    <div className="scale-125">
                                        <ThemeSwitcher />
                                    </div>
                                </div>
                                <div className="scale-110">
                                    <DownloadCVButton />
                                </div>
                            </div>
                        </SectionShell>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
