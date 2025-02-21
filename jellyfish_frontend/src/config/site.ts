export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Login",
      href: "/login",
    },
  ],
  navMenuItems: [],
  links: {
    github: "https://github.com/epicseven-cup/jellyfish",
  },
};
