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
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import path from "path";


export const Navbar = () => {

  const navigate = useNavigate();

  const [tabList, setTabList] = useState(siteConfig.navItems)

  const { pathname } = useLocation();

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

      navigate("/login")

    } else if (element === "signup") {
      setDisable({
        login: false,
        signup: true,

      })

      navigate("/signup")
    } else {
      setDisable({
        login: false,
        signup: false,
      })

      navigate("/")

    }
  }

  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/signup") {
      
      setDisable({
        login: false,
        signup: false,
      })
    }
  }, [pathname])


  function tabChange(key: React.Key): void {
    console.log(key)
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


      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <Tabs variant="underlined" aria-label="Tabs" disableAnimation={false} selectedKey={pathname} onSelectionChange={tabChange}>
          {tabList.map((item) => (
            <Tab key={item.href} title={item.label} href={item.href}></Tab>
          ))}

        </Tabs>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button size="sm" isDisabled={disable.login} onPress={buttonPress} >Login</Button>
          <Button size="sm" isDisabled={disable.signup} onPress={buttonPress} >Signup</Button>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
