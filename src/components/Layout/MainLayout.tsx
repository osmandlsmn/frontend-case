import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";
import CHeader from "./Header";

const MainLayout = () => {
  return (
    <MantineProvider
      theme={{ colors: { brand: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"] }, primaryColor: "brand" }}
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      <CHeader />
      <Outlet />
    </MantineProvider>
  );
};

export default MainLayout;
