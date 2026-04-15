import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    href: string;
    label: string;
}
