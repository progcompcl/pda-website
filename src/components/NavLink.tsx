import React from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  variant: "default" | "home";
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  variant,
  className,
}) => {
  const NAV_ACTIVE_CLASSES =
    "text-logo-orange-600 dark:text-logo-negative before:visible after:visible";
  const NAV_LINK_CLASSES_MAP = {
    default:
      "text-black dark:text-white hover:text-logo-orange-600 dark:hover:text-logo-negative",
    home: "text-white hover:text-logo-orange-600",
  };

  const linkColorClasses = NAV_LINK_CLASSES_MAP[variant];
  const activeClasses = isActive ? NAV_ACTIVE_CLASSES : "";

  return (
    <a
      href={href}
      className={cn(
        "relative text-lg before:content-['['] before:invisible after:content-[']'] after:invisible hover:before:visible hover:after:visible",
        linkColorClasses,
        activeClasses,
        className,
      )}
    >
      {label}
    </a>
  );
};
