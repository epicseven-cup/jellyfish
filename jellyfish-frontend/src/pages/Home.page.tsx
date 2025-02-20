import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Jellyfish } from '../components/Jellyfish/Jellyfish';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu/HeaderMegaMenu';

export function HomePage() {
  return (
    <>
      <HeaderMegaMenu/>
      <Jellyfish />
      <ColorSchemeToggle />
    </>
  );
}
