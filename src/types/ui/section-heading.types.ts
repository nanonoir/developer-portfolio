import type { HTMLAttributes, ReactNode } from "react";

type Level = "h1" | "h2" | "h3";
type Align = "left" | "center";

export interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    level?: Level;
    align?: Align;
}
