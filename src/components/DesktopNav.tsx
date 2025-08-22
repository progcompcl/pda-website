import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { NavbarItem } from "@/types/nav";
import { cn } from "@/lib/utils";

const ACTIVE_CLASSES =
  "text-logo-orange-600 dark:text-logo-negative before:visible after:visible";

const TEXT_CLASSES =
  "font-mono text-lg text-black dark:text-white hover:text-logo-orange-600 hover:text-logo-orange-600 dark:hover:text-logo-negative";

const LINK_CLASSES =
  "relative text-lg before:content-['['] before:invisible after:content-[']'] after:invisible hover:before:visible hover:after:visible";

interface DesktopNavProps {
  navItems: NavbarItem[];
  currentPath: string;
}

export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  navItems,
  currentPath,
}) => {
  const Link: React.FC<LinkProps> = ({ href, children }) => {
    return (
      <a
        href={href}
        className={cn(
          LINK_CLASSES,
          TEXT_CLASSES,
          href === currentPath ? ACTIVE_CLASSES : "",
        )}
      >
        {children}
      </a>
    );
  };

  return (
    <NavigationMenu className={cn("hidden lg:flex")}>
      <NavigationMenuList className="gap-8">
        {navItems.map((link, index) => (
          <NavigationMenuItem key={index}>
            {link.submenu ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    TEXT_CLASSES,
                    LINK_CLASSES,
                    link.items &&
                      link.items.length > 0 &&
                      link.items.some((item) => item.href === currentPath)
                      ? ACTIVE_CLASSES
                      : "",
                    "inline-flex items-center",
                  )}
                >
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {
                    <div className="flex flex-col gap-3 bg-background p-4">
                      {link.items?.map((item) => (
                        <NavigationMenuLink
                          asChild
                          className={"cursor-pointer"}
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  }
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={"cursor-pointer"}>
                <Link href={link.href!}>{link.label}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
