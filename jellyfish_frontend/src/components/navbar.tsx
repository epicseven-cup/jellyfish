import { Button, PressEvent } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
} from "@/components/icons";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate()

  function handlePress(e: PressEvent): void {
    let loc: string = (e.target?.textContent) ? e.target.textContent.toLowerCase() : ""
    navigate("/" + loc)
  };


  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <p className="font-bold text-inherit">Jellyfish</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>


      {/* TODO: Make this a tab, and find a way to pass data here */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.navItems.map((item, i) => (
          <NavbarItem key={i}>
            <Link className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href={item.href}
            >{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button size="sm" onPress={handlePress}>Login</Button>
          <Button size="sm" onPress={handlePress}>Signup</Button>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

    </HeroUINavbar>
  );
};
