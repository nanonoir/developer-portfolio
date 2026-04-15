import type React from "react";
import type { SectionShellProps } from "../../types";

export const SectionShell: React.FC<SectionShellProps> = ({
    children,
    width = "default",
    className = "",
    ...props
}) => {
    const standard = "mx-auto";

    const widthStyle = {
        default: "w-4/5",
        full: "w-full",
    };

    const computedClassName = `
        ${standard}
        ${widthStyle[width]}
        ${className}
    `;

    return (
        <div className={computedClassName.trim()} {...props}>
            {children}
        </div>
    );
};
