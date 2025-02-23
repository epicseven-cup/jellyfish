import { NavigateOptions, Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

import { HeroUIProvider } from "@heroui/system";
import { useNavigate, useHref } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { RouterOptions } from "@react-types/shared";
import { Footer } from "./components/footer";
import Setting from "./pages/setting";
import Grade from "./pages/grade";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}



declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: RouterOptions;
  }
}

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        <Navbar />
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<Login/>} path="/login" />
          <Route element={<Signup/>} path="/signup" />
          <Route element={<Setting/>} path="/setting" />
          <Route element={<Grade/>} path="/grade" />
        </Routes>

      <Footer />
      </HeroUIProvider>
    </div>
  );
}

export default App;
