export interface NavbarItem {
  href?: string;
  label: string;
  submenu?: boolean;
  items?: Array<{
    href: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
}
