import type React from "react";
import type { IconLinkProps } from "../../types";

export const IconLink: React.FC<IconLinkProps> = ({
    children,
    href,
    label,
    className = "",
    target = "_blank",
    rel = "noreferrer",
    ...props
}) => {
    const standard = "inline-flex items-center justify-center rounded-md transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

    const computedClassName = `
        ${standard}
        ${className}
    `;

    return (
        <a
            href={href}
            aria-label={label}
            target={target}
            rel={rel}
            className={computedClassName.trim()}
            {...props}
        >
            {children}
        </a>
    );
};
