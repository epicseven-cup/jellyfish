import { Button, PressEvent } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Tab, Tabs } from "@heroui/tabs"

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
} from "@/components/icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {

  const { pathname } = useLocation();
  console.log(pathname)
  const [disable, setDisable] = useState({
    login: false,
    signup: false,
  })

  function buttonPress(e: PressEvent): void {
    const element: string = e.target.textContent ? e.target.textContent.toLowerCase() : ""
    if (element === "login") {
      setDisable({
        login: true,
        signup: false,
      })

    } else if (element === "signup") {
      setDisable({
        login: false,
        signup: true,

      })
    } else {
      setDisable({
        login: false,
        signup: false,
      })
    }
  }

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

        <Tabs variant="underlined" aria-label="Tabs" disableAnimation={false} selectedKey={pathname}>
          {siteConfig.navItems.map((item) => (
            <Tab key={item.href} title={item.label} href={item.href}></Tab>
          ))}
          {/* <Tab key={"/"} title={"Home"}></Tab>
          <Tab key={"/about"} title={"About"} ></Tab>
          <Tab key={"/doc"} title={"Doc"}></Tab> */}

        </Tabs>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button size="sm" isDisabled={disable.login} onPress={buttonPress}>Login</Button>
          <Button size="sm" isDisabled={disable.signup} onPress={buttonPress}>Signup</Button>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
