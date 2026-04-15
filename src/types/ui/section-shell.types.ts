import type { HTMLAttributes, ReactNode } from "react";

type Width = "default" | "full";

export interface SectionShellProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    width?: Width;
}
