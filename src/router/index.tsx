import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/Layout/MainLayout";
import MovieDetail from "@/pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail/:imdbId",
        element: <MovieDetail />,
      },
    ],
  },
]);

export default router;
