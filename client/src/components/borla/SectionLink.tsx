import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";

interface SectionLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

/**
 * Links to a home-page section (e.g. "#how", "#pricing", "#questions").
 * On the home page it renders a plain anchor so the browser scrolls natively.
 * On any other page it renders a wouter Link to "/#section" so the SPA routes
 * home first — Home then scrolls to the hash after mounting.
 */
export default function SectionLink({ href, className, onClick, children }: SectionLinkProps) {
  const [location] = useLocation();

  if (location === "/") {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={`/${href}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
