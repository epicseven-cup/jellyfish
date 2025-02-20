// Code is referenced from: https://ui.mantine.dev/category/headers/#header-mega-menu




import {
  IconBrandGitlab
} from '@tabler/icons-react';
import {
  Box,
  Button,
  Group,
} from '@mantine/core';
import classes from './HeaderMegaMenu.module.css';


export function HeaderMegaMenu() {


  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <IconBrandGitlab size={30} />

          <Group h="100%" gap={0} visibleFrom="sm" ta='center'>
            <a href="#" className={classes.link}>Home</a>
            <a href="#" className={classes.link}>Home</a>
            <a href="#" className={classes.link}>Home</a>
            <a href="#" className={classes.link}>Home</a>
            <a href="#" className={classes.link}>Home</a>
          </Group>


          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}