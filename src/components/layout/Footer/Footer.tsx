import { useContext } from "react";
import { motion } from "framer-motion";
import { footerReactSpin, footerTailwindWave, footerTypeScriptWobble } from "../../../animations/variants";
import { LanguageContext } from "../../../context";
import { footerData } from "../../../data/footer.data";
import { reactIcon, tailwindIcon, typescriptIcon } from "../../../assets/icons";
import { SectionShell } from "../../ui";

export const Footer = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = footerData[language];

    return (
        <footer className="mt-10 w-full border-t border-border bg-surface py-6 text-sm text-text">
            <SectionShell className="flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                    <span>{currentContent.madeWithText}</span>
                    <motion.img
                        src={reactIcon}
                        alt="React"
                        className="h-8 w-8"
                        animate={footerReactSpin.animate}
                        transition={footerReactSpin.transition}
                    />
                    <span className="text-text-muted">+</span>
                    <motion.img
                        src={typescriptIcon}
                        alt="TypeScript"
                        className="h-8 w-8"
                        animate={footerTypeScriptWobble.animate}
                        transition={footerTypeScriptWobble.transition}
                    />
                    <span className="text-text-muted">+</span>
                    <motion.img
                        src={tailwindIcon}
                        alt="Tailwind CSS"
                        className="h-8 w-8"
                        animate={footerTailwindWave.animate}
                        transition={footerTailwindWave.transition}
                    />
                </div>
            </SectionShell>
        </footer>
    );
};
