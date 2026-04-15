import type React from "react";
import type { SectionHeadingProps } from "../../types";

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    children,
    level = "h2",
    align = "left",
    className = "",
    ...props
}) => {
    const standard = "font-display text-accent tracking-tight";

    const levelStyle = {
        h1: "text-5xl md:text-6xl",
        h2: "text-4xl md:text-5xl",
        h3: "text-3xl md:text-4xl",
    };

    const alignStyle = {
        left: "text-left",
        center: "text-center",
    };

    const computedClassName = `
        ${standard}
        ${levelStyle[level]}
        ${alignStyle[align]}
        ${className}
    `;

    const HeadingTag = level;

    return (
        <HeadingTag className={computedClassName.trim()} {...props}>
            {children}
        </HeadingTag>
    );
};
