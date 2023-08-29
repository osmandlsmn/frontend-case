import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";
import CHeader from "./Header";

const MainLayout = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS withCSSVariables>
      <CHeader />
      <Outlet />
    </MantineProvider>
  );
};

export default MainLayout;
