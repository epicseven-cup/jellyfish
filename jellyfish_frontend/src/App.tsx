import { NavigateOptions, Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

import { HeroUIProvider } from "@heroui/system";
import { useNavigate, useHref } from "react-router-dom";
import { Navbar } from "@/components/navbar";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

function App() {
  const navigate = useNavigate();
  return (
    <>
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        <Navbar />
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<DocsPage />} path="/docs" />
          <Route element={<PricingPage />} path="/pricing" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </HeroUIProvider>
    </>
  );
}

export default App;
