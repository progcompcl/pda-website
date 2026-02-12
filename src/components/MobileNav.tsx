import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { NavbarItem } from "@/types/nav";
import {
  ACTIVE_CLASSES,
  TEXT_CLASSES,
  LINK_CLASSES,
} from "@/components/ui/navigation-menu";
import "@/styles/navigation_menu.css"

interface MobileNavProps {
  navItems: NavbarItem[];
  variant: "default" | "home";
  currentPath?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  navItems,
  variant,
  currentPath,
}) => {
  const menuIconClasses = cn("h-6 w-6", variant === "home" ? "text-white" : "");

  const triggerButtonClasses = cn(
    variant === "home"
      ? "hover:bg-white/20 focus-visible:ring-offset-0 focus-visible:ring-white/50"
      : "",
  );

  const Link: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => (
    <a
      href={href}
      className={cn(
        LINK_CLASSES,
        TEXT_CLASSES,
        "text-2xl text-center block",
        href === currentPath ? ACTIVE_CLASSES : "",
      )}
    >
      {children}
    </a>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className={triggerButtonClasses}>
          <Menu className={menuIconClasses} />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col items-center justify-start w-3/4 sm:w-[400px] pt-4"
      >
        <SheetHeader className="text-center w-full">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <NavigationMenu
          className="w-full mt-0 flex-col justify-start MobileNavigationMenu"
          orientation="vertical"
        >
          <NavigationMenuList className="flex flex-col items-center gap-1 w-full">
            {navItems.map((link, index) => (
              <NavigationMenuItem key={index} className="w-full">
                {link.submenu ? (
                  <>
                    <div className="text-muted-foreground px-2 py-1.5 text-sm font-medium text-center">
                      {link.label}
                    </div>
                    <ul className="w-full flex flex-col items-center gap-1">
                      {link.items?.map((item) => (
                        <li key={item.href} className="w-full">
                          <a
                            href={item.href}
                            className={cn(
                              LINK_CLASSES,
                              TEXT_CLASSES,
                              "text-2xl text-center block w-full rounded-md px-3 py-2 hover:bg-transparent hover:text-logo-orange-600 dark:hover:text-logo-negative",
                            )}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={link.href!}
                    className={cn(
                      LINK_CLASSES,
                      TEXT_CLASSES,
                      "text-2xl text-center block w-full rounded-md px-3 py-2 hover:bg-transparent hover:text-logo-orange-600 dark:hover:text-logo-negative",
                    )}
                  >
                    {link.label}
                  </a>
                )}

                {/* Separator */}
                {index < navItems.length - 1 &&
                  ((!link.submenu && navItems[index + 1].submenu) ||
                    (link.submenu && !navItems[index + 1].submenu)) && (
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      className="bg-border -mx-1 my-2 h-px w-full"
                    />
                  )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};
